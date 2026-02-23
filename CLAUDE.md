# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Schlummershuffle (Schlafi) — a web app implementing the Cognitive Shuffle sleep technique. Users listen to random German words spoken via TTS and visualize them to fall asleep. See `RESEARCH.md` for scientific background and feature roadmap.

## Development

No build system, no dependencies, no package manager. Open `index.html` directly in a browser to develop and test. Deployment is automated to GitHub Pages on push to `main` via `.github/workflows/pages.yml`.

## Architecture

Four source files:
- `index.html` — markup only, links to external CSS/JS.
- `style.css` — all styles (dark theme, animations, responsive layout, accessibility focus styles).
- `app.js` — all application logic (TTS, timer, session, word selection, Wake Lock).
- `words.js` — German word lists as a single `const words = { category: [...] }` object. 40 categories, ~3400 words total.

**Key browser APIs:**
- **Web Speech API** — TTS for speaking words. German voices discovered dynamically via `speechSynthesis.getVoices()`. Includes a Chromium workaround (periodic `synth.resume()` every 5s to prevent pause bugs after ~15s). Graceful fallback with warning UI if TTS is unavailable.
- **Wake Lock API** — keeps screen on during sessions (graceful fallback if unsupported).

**Timer:** deadline-based using `Date.now()` to prevent drift during background throttling or CPU sleep.

**Word selection algorithm** (`pickWord()`): picks a category different from the last 3 used, avoids words from the last 50 spoken, avoids same starting letter as previous word, with progressive fallback if the pool is exhausted.

**State management:** global variables (`running`, `timerMinutes`, `intervalSeconds`, `volume`, `speechRate`, `speechPitch`, `selectedVoice`, etc.) — no framework.

**UI pattern:** Single-page layout — settings are directly visible on the start screen (no hidden drawers or sheets). CSS-driven state toggle via `.container.running` hides settings and shows word display + timer ring. Chip selectors use `data-value` attributes and `aria-pressed` for timer/interval values.

**Visual design:** Warm dark palette (amber `#D4A46A` on near-black `#080810`) for nighttime readability. Typography: Fraunces serif for word display and title, Outfit sans-serif for UI. Subtle ambient glow (`body::before` radial gradient), film grain texture (`body::after` SVG noise), staggered `fade-up` entrance animations on settings groups. Moon crescent icon in start button.

**Accessibility:** `aria-live` on word display, `aria-pressed` on chip buttons, `role="group"` with `aria-labelledby` on chip groups, `for`/`id` on labels, `:focus-visible` styles on all interactive elements.

## Word list guidelines

Words in `words.js` must be:
- Concrete nouns (easily visualizable)
- Emotionally neutral and calming
- German language only (no anglicisms)
- Not threatening or activating (no weapons, violence, etc.)
- No duplicates within the same category (cross-category duplicates are OK if thematically fitting)
