# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Schlummershuffle (Schlafi) — a web app implementing the Cognitive Shuffle sleep technique. Users listen to random German words spoken via TTS and visualize them to fall asleep. See `RESEARCH.md` for scientific background and feature roadmap.

## Development

No build system, no dependencies, no package manager. Open `index.html` directly in a browser to develop and test. Deployment is automated to GitHub Pages on push to `main` via `.github/workflows/pages.yml`.

## Architecture

Two source files:
- `index.html` — markup, styles (`<style>`), and all application logic (`<script>`). Loads `words.js` via script tag.
- `words.js` — German word lists as a single `const words = { category: [...] }` object. 16 categories, ~30+ words each.

**Key browser APIs:**
- **Web Speech API** — TTS for speaking words. German voices discovered dynamically via `speechSynthesis.getVoices()`. Includes a Chromium workaround (periodic `synth.resume()` every 5s to prevent pause bugs after ~15s).
- **Wake Lock API** — keeps screen on during sessions (graceful fallback if unsupported).

**Word selection algorithm** (`pickWord()`): picks a category different from the last 3 used, avoids words from the last 50 spoken, avoids same starting letter as previous word, with progressive fallback if the pool is exhausted.

**State management:** global variables (`running`, `timerMinutes`, `intervalSeconds`, `volume`, `speechRate`, `speechPitch`, `selectedVoice`, etc.) — no framework.

**UI pattern:** CSS-driven state visibility via `.container.running` — settings panel hides when running, word display + timer ring show when running. Chip selectors use `data-value` attributes for timer/interval values.
