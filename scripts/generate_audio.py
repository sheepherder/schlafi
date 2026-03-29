#!/usr/bin/env python3
"""Generate TTS audio files for Schlummershuffle words.

Uses Google Cloud Text-to-Speech (Chirp 3: HD) to render each word
as a separate .opus file. One folder per voice.

Voices (best first):
  1. Enceladus
  2. Sadachbia
  3. Sadaltager
  4. Charon

Setup:
  Google Cloud Console: https://console.cloud.google.com/
  API credentials:      https://console.cloud.google.com/apis/credentials
  Enable TTS API:       https://console.cloud.google.com/apis/library/texttospeech.googleapis.com
  Pricing:              https://cloud.google.com/text-to-speech/pricing

Usage:
  export GOOGLE_TTS_API_KEY=your-key-here   # or put in .env
  python scripts/generate_audio.py                    # all voices, all words
  python scripts/generate_audio.py --voice Enceladus   # one voice
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

# Voices in order of preference (best first)
VOICES = ["Enceladus", "Sadachbia", "Sadaltager", "Charon"]

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
    # normalize for filesystem (keep umlauts, replace spaces)
    name = name.replace(" ", "_")
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

    subset = words[:limit] if limit else words
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
    parser = argparse.ArgumentParser(description="Generate TTS audio for Schlummershuffle")
    parser.add_argument("--voice", choices=VOICES, help="Generate only this voice")
    parser.add_argument("--limit", type=int, help="Limit to first N words (for testing)")
    args = parser.parse_args()

    api_key = os.environ.get("GOOGLE_TTS_API_KEY")
    if not api_key:
        print("Set GOOGLE_TTS_API_KEY environment variable", file=sys.stderr)
        sys.exit(1)

    project_root = Path(__file__).resolve().parent.parent
    words_path = project_root / "words.js"
    output_dir = project_root / "audio"

    words = parse_words_js(words_path)
    print(f"Parsed {len(words)} words from words.js")

    voices = [args.voice] if args.voice else VOICES
    for voice in voices:
        print(f"\nVoice: {voice}")
        generate_voice(words, voice, api_key, output_dir, args.limit)


if __name__ == "__main__":
    main()
