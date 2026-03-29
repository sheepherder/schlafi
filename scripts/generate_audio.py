#!/usr/bin/env python3
"""Generate TTS audio files for Schlummershuffle words.

Uses Google Cloud Text-to-Speech (Chirp 3: HD) to render each word
as a separate .opus file. One folder per voice.

Default voices (best first):
  1. Enceladus
  2. Sadachbia
  3. Sadaltager
  4. Charon

All 30 Chirp 3: HD de-DE voices are supported via --voice or --all.

Setup:
  Google Cloud Console: https://console.cloud.google.com/
  API credentials:      https://console.cloud.google.com/apis/credentials
  Enable TTS API:       https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
  Pricing:              https://cloud.google.com/text-to-speech/pricing

Usage:
  export GOOGLE_TTS_API_KEY=your-key-here   # or put in .env
  python scripts/generate_audio.py                       # default 4 voices
  python scripts/generate_audio.py --voice Enceladus     # one specific voice
  python scripts/generate_audio.py --voice Sulafat       # any of the 30 voices
  python scripts/generate_audio.py --all                 # all 30 voices
  python scripts/generate_audio.py --list                # list available voices
  python scripts/generate_audio.py --voice Enceladus --limit 10  # test run

Requires: requests, ffmpeg (for opus encoding)
"""

import argparse
import json
import os
import re
import subprocess
import sys
import base64
import time
from pathlib import Path

import requests

# Default voices (best first) — generated when no --voice is specified
DEFAULT_VOICES = ["Enceladus", "Sadachbia", "Sadaltager", "Charon"]

# All available Chirp 3: HD voices for de-DE
ALL_VOICES = {
    # Male
    "Achird": "m", "Algenib": "m", "Algieba": "m", "Alnilam": "m",
    "Charon": "m", "Enceladus": "m", "Fenrir": "m", "Iapetus": "m",
    "Orus": "m", "Puck": "m", "Rasalgethi": "m", "Sadachbia": "m",
    "Sadaltager": "m", "Schedar": "m", "Umbriel": "m",
    "Zubenelgenubi": "m",
    # Female
    "Achernar": "f", "Aoede": "f", "Autonoe": "f", "Callirrhoe": "f",
    "Despina": "f", "Erinome": "f", "Gacrux": "f", "Kore": "f",
    "Laomedeia": "f", "Leda": "f", "Pulcherrima": "f", "Sulafat": "f",
    "Vindemiatrix": "f", "Zephyr": "f",
}

ARTICLE = {"m": "ein", "f": "eine", "n": "ein"}

# X-SAMPA phonemes to force correct pronunciation (prevent "n'" elision)
ARTICLE_PHONEME = {"m": "aIn", "f": "aIn@", "n": "aIn"}

API_URL = "https://texttospeech.googleapis.com/v1beta1/text:synthesize"


def parse_words_js(path):
    """Parse words.js and return list of (genus, noun) tuples."""
    words = []
    pattern = re.compile(r"\['([mfn])','(.+?)'\]")
    with open(path) as f:
        for line in f:
            m = pattern.search(line)
            if m:
                words.append((m.group(1), m.group(2)))
    return words


def make_filename(genus, noun):
    """Generate filename like 'ein_schmetterling.opus'.
    Keep in sync with app.js:audioFilename()."""
    article = ARTICLE[genus]
    name = f"{article}_{noun}".lower()
    name = name.replace(" ", "_")
    # ASCII-safe: replace umlauts to avoid Unicode normalization issues
    for orig, repl in (('ä', 'ae'), ('ö', 'oe'), ('ü', 'ue'), ('ß', 'ss')):
        name = name.replace(orig, repl)
    return f"{name}.opus"


def synthesize(ssml, voice_name, api_key, max_retries=5):
    """Call Google Cloud TTS and return raw audio bytes (LINEAR16/WAV).
    Retries with exponential backoff on rate limit (429) errors."""
    body = {
        "input": {"ssml": ssml},
        "voice": {
            "languageCode": "de-DE",
            "name": f"de-DE-Chirp3-HD-{voice_name}",
        },
        "audioConfig": {
            "audioEncoding": "LINEAR16",
            "pitch": 0,
            "speakingRate": 1,
        },
    }
    for attempt in range(max_retries):
        resp = requests.post(
            f"{API_URL}?key={api_key}",
            json=body,
            timeout=30,
        )
        if resp.status_code == 200:
            audio_b64 = resp.json()["audioContent"]
            return base64.b64decode(audio_b64)
        if resp.status_code == 429 and attempt < max_retries - 1:
            wait = 2 ** attempt
            print(f"  Rate limited, waiting {wait}s...", file=sys.stderr)
            time.sleep(wait)
            continue
        print(f"  API error {resp.status_code}: {resp.text}", file=sys.stderr)
        return None
    return None


def wav_to_opus(wav_bytes, output_path):
    """Convert WAV bytes to Opus via ffmpeg.

    Trims leading/trailing silence, adds 50ms pad at start to avoid
    click artifacts, and encodes as Opus with 'audio' application mode.
    """
    proc = subprocess.run(
        [
            "ffmpeg", "-y",
            "-f", "wav", "-i", "pipe:0",
            # trim leading silence only, then add 50ms pad at start
            "-af", (
                "silenceremove=start_periods=1:start_threshold=-50dB:start_duration=0.01"
                ",adelay=50|50"
            ),
            "-c:a", "libopus", "-b:a", "48k",
            "-vbr", "on",
            "-application", "audio",
            str(output_path),
        ],
        input=wav_bytes,
        capture_output=True,
    )
    if proc.returncode != 0:
        print(f"  ffmpeg error: {proc.stderr.decode()}", file=sys.stderr)
        return False
    return True


def generate_voice(words, voice_name, api_key, output_dir, limit=None):
    """Generate audio files for one voice, ~200 requests/min to stay within quota."""
    voice_dir = output_dir / voice_name.lower()
    voice_dir.mkdir(parents=True, exist_ok=True)

    subset = words[:limit] if limit is not None else words
    total = len(subset)
    skipped = 0
    generated = 0
    errors = 0

    for i, (genus, noun) in enumerate(subset, 1):
        filename = make_filename(genus, noun)
        output_path = voice_dir / filename
        if output_path.exists():
            skipped += 1
            continue

        article = ARTICLE[genus]
        phoneme = ARTICLE_PHONEME[genus]
        ssml = (
            f'<speak>. '
            f'<phoneme alphabet="x-sampa" ph="{phoneme}">{article}</phoneme> '
            f'{noun}.</speak>'
        )

        print(f"  [{i}/{total}] {article} {noun}")
        wav_bytes = synthesize(ssml, voice_name, api_key)
        if wav_bytes is None:
            errors += 1
            continue

        if not wav_to_opus(wav_bytes, output_path):
            errors += 1
            continue

        generated += 1

    print(f"  Done: {generated} generated, {skipped} skipped, {errors} errors")


def main():
    parser = argparse.ArgumentParser(
        description="Generate TTS audio for Schlummershuffle",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="Use --list to see all available voices.")
    parser.add_argument("voice", nargs="?", metavar="VOICE",
                        help="Voice name (e.g. Enceladus). Use --list to see all.")
    parser.add_argument("--defaults", action="store_true",
                        help="Generate the 4 default voices")
    parser.add_argument("--all", action="store_true",
                        help="Generate all 30 voices")
    parser.add_argument("--list", action="store_true",
                        help="List available voices and exit")
    parser.add_argument("--limit", type=int, help="Limit to first N words (for testing)")
    args = parser.parse_args()

    if args.list:
        print("Available Chirp 3: HD voices for de-DE:\n")
        for name in sorted(ALL_VOICES.keys()):
            gender = "männlich" if ALL_VOICES[name] == "m" else "weiblich"
            default = " *" if name in DEFAULT_VOICES else ""
            print(f"  {name:20} {gender}{default}")
        print(f"\n  * = default voices")
        return

    if args.voice:
        # Case-insensitive lookup
        match = {k.lower(): k for k in ALL_VOICES}
        key = args.voice.lower()
        if key not in match:
            parser.error(f"unknown voice '{args.voice}'. Use --list to see options.")
        voices = [match[key]]
    elif args.defaults:
        voices = DEFAULT_VOICES
    elif args.all:
        voices = sorted(ALL_VOICES.keys())
    else:
        parser.print_usage()
        print("\nSpecify a voice name, --defaults, or --all. Use --list to see available voices.")
        sys.exit(1)

    api_key = os.environ.get("GOOGLE_TTS_API_KEY")
    if not api_key:
        print("Set GOOGLE_TTS_API_KEY environment variable", file=sys.stderr)
        sys.exit(1)

    project_root = Path(__file__).resolve().parent.parent
    words_path = project_root / "words.js"
    output_dir = project_root / "audio"

    words = parse_words_js(words_path)
    print(f"Parsed {len(words)} words from words.js")

    for voice in voices:
        print(f"\nVoice: {voice}")
        generate_voice(words, voice, api_key, output_dir, args.limit)


if __name__ == "__main__":
    main()
