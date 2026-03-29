<h1 align="center">🌙</h1>

<h1 align="center">Schlummershuffle</h1>

<p align="center">
  <strong><a href="https://sheepherder.github.io/schlafi/">App starten</a></strong>
</p>

<p align="center">
  Eine Web-App, die mit der <strong>Cognitive Shuffle</strong>-Technik beim Einschlafen hilft.
</p>

Alle paar Sekunden wird ein zufälliges deutsches Wort mit Artikel vorgelesen ("ein Haus", "eine Katze"). Du stellst dir das Wort bildlich vor – ohne Zusammenhänge herzustellen. Das unterbricht Grübelschleifen und ahmt das natürliche Denkmuster vor dem Einschlafen nach.

## Features

- 3500 konkrete deutsche Substantive, frequenzsortiert aus Korpusdaten
- 4 vorgerenderte Stimmen (Google Cloud TTS), Browser-TTS als Fallback
- Timer (15–60 min) mit sanftem Lautstärke-Fadeout in der letzten Minute
- Wortpause einstellbar (5–20 Sekunden)
- Nachtfreundliches Design mit warmem Dark-Theme
- Wake Lock hält den Bildschirm an
- Kein Framework, keine Dependencies, kein Build-Step

## Technik

| Datei | Beschreibung |
|-------|-------------|
| `index.html` | Markup |
| `style.css` | Styles (Dark-Theme, Animationen, responsive Layout) |
| `app.js` | Anwendungslogik (Stimmen, Timer, Session, Wake Lock) |
| `words.js` | Wortliste (3500 Substantive mit Genus) |
| `audio/<voice>/` | Vorgerenderte `.opus`-Dateien pro Stimme |
| `scripts/build_wordlist.py` | Generiert `words.js` aus Korpusdaten |
| `scripts/generate_audio.py` | Rendert Sprachausgabe via Google Cloud TTS |

Vanilla HTML, CSS und JavaScript. Deployment via GitHub Pages.

## Hintergrund

Der Cognitive Shuffle (Serial Diverse Imagining) wurde von Dr. Luc P. Beaudoin entwickelt. Details in [`RESEARCH.md`](RESEARCH.md).
