# Schlummershuffle

**[🌙 App starten](https://sheepherder.github.io/schlafi/)** · Am besten mit Chrome auf dem Handy

Eine Web-App, die mit der **Cognitive Shuffle**-Technik beim Einschlafen hilft.

Alle paar Sekunden wird ein zufälliges deutsches Wort vorgelesen. Du stellst dir das Wort bildlich vor -- ohne Zusammenhänge herzustellen. Das unterbricht Grübelschleifen und ahmt das natürliche Denkmuster vor dem Einschlafen nach. Die meisten schlafen innerhalb von 10--15 Minuten ein.

## Features

- ~3400 deutsche Wörter in 40 Kategorien (Natur, Tiere, Lebensmittel, ...)
- Text-to-Speech mit wählbarer Stimme, Geschwindigkeit, Tonhöhe und Lautstärke
- Timer (15, 30, 45, 60 min) mit sanftem Lautstärke-Fadeout in der letzten Minute
- Wortpause einstellbar (5, 8, 10, 15, 20 Sekunden)
- Warmes Dark-Theme (Amber auf Schwarz) mit hohem Kontrast für Nachts
- Fraunces-Serif für Wörter, Outfit-Sans für UI
- Dezenter Ambient-Glow, Film-Grain-Textur, Einblend-Animationen
- Wake Lock hält den Bildschirm an
- Kein Framework, keine Dependencies, kein Build-Step

## Technik

Vanilla HTML, CSS und JavaScript. Nutzt die Web Speech API für deutsche Sprachsynthese und die Wake Lock API gegen Bildschirmabschaltung. Deployment via GitHub Pages.

## Entwicklung

```
# Einfach im Browser öffnen
open index.html
```

Kein Build nötig. Push auf `main` deployt automatisch via GitHub Actions.

## Dateien

| Datei | Beschreibung |
|-------|-------------|
| `index.html` | HTML-Markup |
| `style.css` | Styles |
| `app.js` | Anwendungslogik |
| `words.js` | Wortlisten (~3400 Wörter, 40 Kategorien) |

## Wissenschaftlicher Hintergrund

Der Cognitive Shuffle (Serial Diverse Imagining) wurde von Dr. Luc P. Beaudoin entwickelt. Details in `RESEARCH.md`.
