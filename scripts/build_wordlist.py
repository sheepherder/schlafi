#!/usr/bin/env python3
"""
build_wordlist.py – Generiert words.js fuer Schlummershuffle.

Quellen:
  1. Wortfrequenz: hermitdave/FrequencyWords (OpenSubtitles-Korpus)
     https://github.com/hermitdave/FrequencyWords
  2. Substantive + Genus: gambolputty/german-nouns (Wiktionary-Extrakt)
     https://github.com/gambolputty/german-nouns
  3. Psycholinguistische Bewertungen: German Psycholinguistic Toolbox
     Brysbaert et al., https://osf.io/ghjd2/
     Spalten: GPT_concr (Konkretheit), GPT_val (Valenz), GPT_arou (Arousal)

Methodik:
  - Frequenzliste mit ~1M deutschen Woertern (OpenSubtitles)
  - Kreuzreferenz mit Wiktionary-Substantiven (nur pos == "Substantiv" exakt)
  - Nur Lemma-Formen (keine Plurale, Genitive, flektierte Formen)
  - Filter: Konkretheit >= 5.8 (gut vorstellbar), Skala 1-7
  - Filter: Valenz >= 3.5 (nicht negativ/bedrohlich), Skala 1-7
  - Filter: Arousal <= 4.0 (beruhigend, nicht aufregend), Skala 1-7
  - Ausschluss nominalisierter Infinitive und falscher Substantive
  - Sortiert nach Haeufigkeit, Top ~3400 Eintraege

Abhaengigkeiten: openpyxl (pip install openpyxl)

Nutzung: python3 scripts/build_wordlist.py
"""

import csv
import io
import os
import sys
import urllib.request

FREQ_URL = "https://raw.githubusercontent.com/hermitdave/FrequencyWords/master/content/2018/de/de_full.txt"
NOUNS_URL = "https://raw.githubusercontent.com/gambolputty/german-nouns/master/german_nouns/nouns.csv"
CONCRETENESS_URL = "https://osf.io/download/qftv9/"

TARGET_COUNT = 3400
CONCRETENESS_MIN = 5.8   # Skala 1-7, >= 5.8 = gut vorstellbar
VALENCE_MIN = 3.5         # Skala 1-7, >= 3.5 = nicht negativ
AROUSAL_MAX = 4.0         # Skala 1-7, <= 4 = beruhigend

# Woerter die primaer NICHT als Substantiv gebraucht werden, aber in Wiktionary
# einen Substantiv-Eintrag haben. Die Frequenzzaehlung erfasst alle Wortarten,
# daher wuerden diese faelschlich als hochfrequente Substantive erscheinen.
FALSE_NOUNS = {
    # Adverbien / Pronomen / Partikel
    'jetzt', 'heute', 'morgen', 'gestern', 'los', 'wohl', 'recht', 'ernst',
    'mal', 'halt', 'dank', 'trotz', 'statt', 'also', 'noch', 'schon',
    'erst', 'eben', 'ganz', 'viel', 'mehr', 'etwas', 'nichts', 'alles',
    'hier', 'dort', 'oben', 'unten', 'innen', 'vorn', 'hinten',
    # Wochentage / Monate (nicht visualisierbar)
    'montag', 'dienstag', 'mittwoch', 'donnerstag', 'freitag', 'samstag', 'sonntag',
    'januar', 'februar', 'april', 'juni', 'juli', 'august',
    'september', 'oktober', 'november', 'dezember',
    # Farben (primaer Adjektive)
    'weiss', 'weiß', 'schwarz', 'rot', 'blau', 'gruen', 'grün', 'gelb',
    'braun', 'grau', 'rosa', 'lila', 'violett', 'orange', 'beige',
    # Haeufige Adjektive mit Substantiv-Eintrag
    'gut', 'schlecht', 'neu', 'alt', 'gross', 'groß', 'klein', 'lang', 'kurz',
    'dick', 'nass', 'trocken', 'hell', 'dunkel', 'bitter', 'sauer', 'scharf',
    # Zahlwoerter
    'zwei', 'drei', 'vier', 'sechs', 'sieben', 'acht', 'neun', 'zehn',
    'hundert', 'tausend', 'million', 'milliarde',
    # Zeitbegriffe
    'sekunde', 'minute', 'stunde',
}

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(os.path.dirname(SCRIPT_DIR), "words.js")
DATA_DIR = os.path.join(SCRIPT_DIR, "data")


def ensure_downloaded(url, filename, desc):
    """Download a file into scripts/data/ if not already present. Returns the file path."""
    os.makedirs(DATA_DIR, exist_ok=True)
    path = os.path.join(DATA_DIR, filename)
    if os.path.exists(path):
        print(f"  {desc}: vorhanden ({path})")
    else:
        print(f"  {desc}: Lade herunter...")
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        resp = urllib.request.urlopen(req, timeout=120)
        data = resp.read()
        with open(path, "wb") as f:
            f.write(data)
        print(f"    {len(data)} bytes -> {path}")
    return path


def parse_frequency(data):
    """Parse hermitdave frequency list: 'word frequency' per line, all lowercase."""
    freq = {}
    for line in data.decode("utf-8").splitlines():
        parts = line.strip().split()
        if len(parts) == 2:
            freq[parts[0]] = int(parts[1])
    print(f"    {len(freq)} Eintraege")
    return freq


def parse_nouns(data):
    """Parse german-nouns CSV. Only entries with pos exactly 'Substantiv'.
    Returns dict: lowercase_lemma -> (capitalized_lemma, genus)."""
    nouns = {}
    reader = csv.DictReader(io.StringIO(data.decode("utf-8")))
    skipped_pos = 0
    skipped_genus = 0
    for row in reader:
        if row.get("pos", "").strip() != "Substantiv":
            skipped_pos += 1
            continue
        lemma = row.get("lemma", "").strip()
        if not lemma or lemma.startswith("-"):
            continue
        genus = row.get("genus", "").strip()
        if genus not in ("m", "f", "n"):
            skipped_genus += 1
            continue
        nouns[lemma.lower()] = (lemma, genus)
    print(f"    {len(nouns)} reine Substantive")
    print(f"    (uebersprungen: {skipped_pos} Nicht-Substantive, {skipped_genus} ohne Genus)")
    return nouns


def parse_psycholinguistic(filepath):
    """Parse the psycholinguistic xlsx.
    Returns dict: lowercase_word -> (concreteness, valence, arousal)."""
    import openpyxl
    wb = openpyxl.load_workbook(filepath, read_only=True, data_only=True)
    ws = wb.active

    headers = [cell.value for cell in next(ws.iter_rows(min_row=1, max_row=1))]
    # Expected: Word=0, GPT_concr=5, GPT_val=6, GPT_arou=7
    col = {}
    for i, h in enumerate(headers):
        if h is None:
            continue
        hl = str(h).strip()
        if hl in ("Word", "word", "Wort"):
            col["word"] = i
        elif hl == "GPT_concr":
            col["conc"] = i
        elif hl == "GPT_val":
            col["val"] = i
        elif hl == "GPT_arou":
            col["arou"] = i

    missing = {"word", "conc", "val", "arou"} - col.keys()
    if missing:
        print(f"    FEHLER: Spalten nicht gefunden: {missing}")
        print(f"    Verfuegbare Spalten: {headers}")
        sys.exit(1)

    print(f"    Spalten: Word={col['word']}, Concr={col['conc']}, Val={col['val']}, Arou={col['arou']}")

    data = {}
    for row in ws.iter_rows(min_row=2):
        word = row[col["word"]].value
        conc = row[col["conc"]].value
        val = row[col["val"]].value
        arou = row[col["arou"]].value
        if word and conc is not None and val is not None and arou is not None:
            try:
                data[str(word).strip().lower()] = (float(conc), float(val), float(arou))
            except (ValueError, TypeError):
                continue
    wb.close()
    print(f"    {len(data)} Bewertungen geladen")
    return data


def main():
    print("Schlummershuffle Wortlisten-Generator\n")

    # Download
    print("1. Daten herunterladen:")
    freq_path = ensure_downloaded(FREQ_URL, "de_full.txt", "Frequenzliste")
    nouns_path = ensure_downloaded(NOUNS_URL, "nouns.csv", "Substantive")
    psych_path = ensure_downloaded(CONCRETENESS_URL, "concreteness.xlsx", "Psycholinguistik")

    # Parse
    print("\n2. Daten verarbeiten:")
    print("  Frequenzliste:")
    with open(freq_path, "rb") as f:
        freq = parse_frequency(f.read())
    print("  Substantive:")
    with open(nouns_path, "rb") as f:
        nouns = parse_nouns(f.read())
    print("  Psycholinguistische Bewertungen:")
    psych = parse_psycholinguistic(psych_path)

    # Join & filter
    print(f"\n3. Zusammenfuehren und filtern:")
    print(f"  Schwellen: Konkretheit >= {CONCRETENESS_MIN}, Valenz >= {VALENCE_MIN}, Arousal <= {AROUSAL_MAX}")
    candidates = []
    stats = {"no_freq": 0, "no_psych": 0, "low_conc": 0, "low_val": 0,
             "high_arou": 0, "blocked": 0, "nom_inf": 0}

    for lower, (lemma, genus) in nouns.items():
        if lower not in freq:
            stats["no_freq"] += 1
            continue
        if lower in FALSE_NOUNS:
            stats["blocked"] += 1
            continue
        # Nominalisierte Infinitive: Neutrum + endet auf -en (das Gehen, das Hoeren)
        # Haben verfaelschte Frequenzen weil die Verbform mitgezaehlt wird
        if genus == "n" and lower.endswith("en") and len(lower) > 3:
            stats["nom_inf"] += 1
            continue
        if lower not in psych:
            stats["no_psych"] += 1
            continue
        conc, val, arou = psych[lower]
        if conc < CONCRETENESS_MIN:
            stats["low_conc"] += 1
            continue
        if val < VALENCE_MIN:
            stats["low_val"] += 1
            continue
        if arou > AROUSAL_MAX:
            stats["high_arou"] += 1
            continue
        candidates.append((freq[lower], lemma, genus, conc, val, arou))

    print(f"  Ohne Frequenzdaten:    {stats['no_freq']}")
    print(f"  Ohne Bewertungen:      {stats['no_psych']}")
    print(f"  Konkretheit zu niedrig:{stats['low_conc']}")
    print(f"  Valenz zu niedrig:     {stats['low_val']}")
    print(f"  Arousal zu hoch:       {stats['high_arou']}")
    print(f"  Falsche Substantive:   {stats['blocked']}")
    print(f"  Nominalisierte Inf.:   {stats['nom_inf']}")
    print(f"  -> Kandidaten:         {len(candidates)}")

    if len(candidates) < TARGET_COUNT:
        print(f"\n  WARNUNG: Nur {len(candidates)} Kandidaten, Ziel ist {TARGET_COUNT}!")
        print(f"  Eventuell Schwellenwerte anpassen.")

    # Sort by frequency, take top N
    candidates.sort(key=lambda x: x[0], reverse=True)
    final = candidates[:TARGET_COUNT]

    print(f"\n4. Top {len(final)} nach Haeufigkeit ausgewaehlt")

    # Stats
    genders = {"m": 0, "f": 0, "n": 0}
    for _, _, g, *_ in final:
        genders[g] += 1
    print(f"  Genus: m={genders['m']}, f={genders['f']}, n={genders['n']}")
    print(f"  Frequenz:    {final[0][0]:>8} – {final[-1][0]}")
    print(f"  Konkretheit: {min(c for _,_,_,c,_,_ in final):.2f} – {max(c for _,_,_,c,_,_ in final):.2f}")
    print(f"  Valenz:      {min(v for _,_,_,_,v,_ in final):.2f} – {max(v for _,_,_,_,v,_ in final):.2f}")
    print(f"  Arousal:     {min(a for _,_,_,_,_,a in final):.2f} – {max(a for _,_,_,_,_,a in final):.2f}")

    print(f"\n  Beispiele (haeufigste):")
    for fr, w, g, c, v, a in final[:20]:
        art = "ein" if g in ("m", "n") else "eine"
        print(f"    {art:4} {w:20} freq={fr:>6}  conc={c:.1f}  val={v:.1f}  arou={a:.1f}")

    # Generate words.js
    print(f"\n5. Schreibe {OUTPUT_PATH}...")
    lines = [
        "// Schlummershuffle – Deutsche Wortliste (frequenzbasiert)",
        "// Generiert von scripts/build_wordlist.py",
        "//",
        "// Quellen:",
        "//   Frequenz: hermitdave/FrequencyWords (OpenSubtitles-Korpus)",
        "//     https://github.com/hermitdave/FrequencyWords",
        "//   Substantive + Genus: gambolputty/german-nouns (Wiktionary-Extrakt)",
        "//     https://github.com/gambolputty/german-nouns",
        "//   Psycholinguistik: German Psycholinguistic Toolbox (Brysbaert et al.)",
        "//     https://osf.io/ghjd2/",
        "//",
        f"// {len(final)} konkrete, neutrale, beruhigende Substantive",
        f"// Sortiert nach Haeufigkeit im OpenSubtitles-Korpus",
        f"// Filter: Konkretheit >= {CONCRETENESS_MIN}, Valenz >= {VALENCE_MIN}, Arousal <= {AROUSAL_MAX} (Skala 1-7)",
        "//",
        "// Format: [genus, wort] – genus: m/f/n",
        "// Artikel wird zur Laufzeit abgeleitet (m/n -> 'ein', f -> 'eine')",
        "",
        "const words = [",
    ]
    for _, lemma, genus, *_ in final:
        lines.append(f"  ['{genus}','{lemma}'],")
    lines.append("];")
    lines.append("")

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print(f"  Fertig! {len(final)} Woerter geschrieben.")


if __name__ == "__main__":
    main()
