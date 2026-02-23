# Schlafi -- Recherche & Konzept: Cognitive Shuffle Schlaf-App fuer Android

> Erstellt: 2026-02-22
> Status: Recherche abgeschlossen, bereit fuer Planungsphase

---

## Inhaltsverzeichnis

1. [Was ist der Cognitive Shuffle?](#1-was-ist-der-cognitive-shuffle--serial-diverse-imagining)
2. [Wissenschaftliche Grundlagen](#2-wissenschaftliche-grundlagen)
3. [Regeln fuer die Wortwahl](#3-regeln-fuer-die-wortwahl)
4. [Variationen der Technik](#4-variationen-der-technik)
5. [Studien und Evidenz](#5-studien-und-evidenz)
6. [Analyse: mySleepButton App](#6-analyse-mysleepbutton-app)
6b. [Technische Ueberlegungen fuer die Implementierung](#6b-technische-ueberlegungen-fuer-die-implementierung)
7. [Konkurrierende Apps](#7-konkurrierende-apps)
8. [UI/UX Best Practices fuer Schlaf-Apps](#8-uiux-best-practices-fuer-schlaf-apps)
9. [Android TTS fuer Deutsch](#9-android-tts-fuer-deutsch)
10. [Wortlisten-Generierung](#10-wortlisten-generierung)
11. [Namensvorschlaege](#11-namensvorschlaege)
12. [Feature-Kategorien](#12-feature-kategorien-minimal--gut--luxus)
13. [Plan der Plaene](#13-plan-der-plaene)
14. [Quellen](#14-quellen)

---

## 1. Was ist der Cognitive Shuffle / Serial Diverse Imagining?

Der **Cognitive Shuffle** (auch **Serial Diverse Imagining**, kurz **SDI**) ist eine
nicht-medikamentoese Einschlaftechnik, bei der man sich in rascher Abfolge zufaellige,
zusammenhanglose, emotional neutrale mentale Bilder vorstellt. Man wechselt dabei alle
5--15 Sekunden das Vorstellungsbild, ohne eine logische Verbindung zwischen den Bildern
herzustellen.

### Grundidee

Die Technik ahmt das natuerliche Denkmuster nach, das dem Einschlafen vorausgeht -- die
sogenannten **hypnagogen Halluzinationen** (fragmentierte, unzusammenhaengende Bilder,
die das Gehirn beim Uebergang zum Schlaf erzeugt).

Zusammenhaengendes, analytisches Denken (Gruebeln, Planen, Sorgen) signalisiert dem
Gehirn, wach zu bleiben. Unzusammenhaengende, "unsinnige" mentale Aktivitaet hingegen
imitiert den natuerlichen Vor-Schlaf-Zustand und signalisiert dem Gehirn, dass es sicher
ist einzuschlafen.

### Erfinder

**Dr. Luc P. Beaudoin**, Kognitionswissenschaftler und Adjunct Professor an der
**Simon Fraser University (SFU)** in Vancouver, Kanada (Faculty of Education).

- **1989**: Beaudoin begann als Student der kognitiven Psychologie, Schlafstrategien
  zu erforschen
- **2012--2013**: Entwicklung der zugrundeliegenden **Somnolent Information Processing
  Theory (SIP/SIPT)**
- **2013**: Erste akademische Publikation ueber den Cognitive Shuffle (SFU Summit)
- **2014**: Lancierung der **mySleepButton-App** (iOS und Android)
- **2017**: Einfuehrung eines "Kids Pack" fuer Kinder ab 4 Jahren

Beaudoin ist Direktor von CogSci Apps Corp. und Mitgruender von Somnolence+ Inc.

### Wie funktioniert es Schritt fuer Schritt?

#### Vorbereitung
Bequem hinlegen, schlafbereit sein. Optional: zunaechst tiefes Atmen oder progressive
Muskelentspannung.

#### Die DIY-Methode (Selbstdurchfuehrung)

**Schritt 1 -- Ausgangswort waehlen:**
Ein zufaelliges, emotional neutrales Wort mit **mindestens 5 Buchstaben** waehlen
(z.B. "BLUMEN", "GARTEN", "WOLKEN"). Darauf achten, dass das Wort **moeglichst viele
verschiedene Buchstaben** hat.

**Schritt 2 -- Buchstabe fuer Buchstabe durchgehen:**
Mit dem ersten Buchstaben des Wortes beginnen. Sich Woerter ausdenken, die mit diesem
Buchstaben beginnen, und sich **jedes Wort bildhaft vorstellen** (ca. 5--10 Sekunden
pro Bild).

Beispiel mit "BLUMEN":
- **B**: Baby, Ball, Brot, Blume, Baum, Brille, Bank ...
- **L**: Lampe, Leiter, Laterne, Loewe ...
- **U**: Uhr, Uhu, Uniform ...
- **M**: Mond, Muschel, Muetze, Maus ...
- **E**: Elefant, Ei, Erdbeere, Eule ...
- **N**: Nadel, Nest, Nuss ...

**Schritt 3 -- Weitergehen:**
Wenn man zu einem Buchstaben keine weiteren Woerter mehr findet oder sich langweilt,
einfach zum naechsten Buchstaben uebergehen.

**Schritt 4 -- Neues Ausgangswort:**
Wenn alle Buchstaben erschoepft sind und man noch wach ist, ein neues Ausgangswort
waehlen und den Prozess wiederholen.

**Schritt 5 -- Sanftes Zuruecklenken:**
Wenn der Geist zu Sorgen oder Gruebeleien abschweift, sanft und ohne Selbstkritik
zurueck zu den Bildern lenken.

#### Die App-Methode (mySleepButton)
Die App spricht alle **8 Sekunden** ein zufaelliges, konkretes, leicht vorstellbares
Wort vor. Man muss nur zuhoeren und sich das Gesprochene bildlich vorstellen. Die App
uebernimmt die Wortauswahl, was den kognitiven Aufwand erheblich reduziert.

---

## 2. Wissenschaftliche Grundlagen

### Die Somnolent Information Processing Theory (SIP/SIPT)

Beaudoins theoretisches Fundament postuliert die Existenz eines **Sleep Onset Control
System (SOCS)** -- eines informationsverarbeitenden Systems im Gehirn, das den Uebergang
zum Schlaf reguliert. Dieses System hat sich evolutionaer entwickelt, um sicherzustellen,
dass Einschlafen tendenziell dann geschieht, wenn es evolutionaer guenstig (sicher,
rechtzeitig) ist.

### Klassifikation mentaler Zustaende

Die Theorie unterscheidet verschiedene Arten von Denkprozessen nach ihrer Wirkung auf
das Einschlafen:

| Kategorie | Bedeutung | Beispiele |
|---|---|---|
| **Insomnolent** | Verzoegert das Einschlafen | Sorgen, Gruebeln, Planen, Problemloesen |
| **Asomnolent** | Neutral | Atemuebungen, Meditation |
| **Pro-somnolent** | Foerdert aktiv das Einschlafen | Traumaehnliche, fragmentierte Bildgebung |
| **Counter-insomnolent** | Stoert schlafverzoegernde Prozesse | Unterbrechung von Gruebel-Schleifen |
| **Super-somnolent** | Kombiniert pro- UND counter-insomnolent | **Serial Diverse Imagining** |

### Mentale Perturbanz

Ein Kernkonzept: **Mentale Perturbanz** ist ein emergenter Geisteszustand, in dem ein
hartnackiger Motivator dazu tendiert, die exekutiven Funktionen zu kontrollieren --
z.B. obsessives Gruebeln ueber Probleme. Dieser Zustand ist "insomnolent", also
schlafverzoegernd. Der Cognitive Shuffle wirkt dem entgegen, indem er die mentale
Perturbanz unterbricht.

### Warum SDI als "super-somnolent" gilt

SDI wirkt auf **zwei Ebenen** gleichzeitig:

1. **Counter-insomnolent**: Es unterbricht Gruebelschleifen und Sorgen durch die
   Erzeugung kognitiver Dissonanz mittels neutraler, zufaelliger Bilder
2. **Pro-somnolent**: Es emuliert die natuerliche Vor-Schlaf-Mentation (hypnagoge
   Bilder) -- fragmentierte, niedrig-kohaerente visuelle Vorstellungen

### Phonologisches Priming und Imagery Dilution

- **Phonologisches Priming**: Die Buchstaben des Ausgangswortes dienen als Abrufhinweise
  (Cues), um Zielwoerter zu generieren
- **Imagery Dilution**: Nicht-elaboriertes, schematisches Vorstellen ueberlaestet das
  Arbeitsgedaechtnis und verhindert die Bildung zusammenhaengender Narrative. Dies
  signalisiert subkortikalen Regionen, schlaffreundliche Herunterregulierung einzuleiten
- Die zufaellige, nicht zusammenhaengende Natur der Bilder verhindert, dass das Gehirn
  in den "Sinngebungs-Modus" zurueckfaellt

Beaudoin: *"Das menschliche Gehirn ist ein Sinngebungs-Apparat. Es ist tatsaechlich
sehr schwierig fuer Menschen, zufaellige Bilder ohne Hilfsmittel zu erzeugen."*

### Unterscheidung: Insomnolenz vs. Insomnie

Beaudoin praegte den Begriff **"Insomnolenz"** fuer gelegentliche Schlaflosigkeit, im
Unterschied zur klinischen **Insomnie**. Diese Unterscheidung ist zentral: SDI ist
primaer fuer Insomnolenz gedacht, kann aber auch als Ergaenzung zu CBT-I bei Insomnie
eingesetzt werden.

---

## 3. Regeln fuer die Wortwahl

### Regeln fuer das Ausgangswort (Seed Word)

| Regel | Details |
|-------|---------|
| Laenge | Mindestens 5 Buchstaben (ideal: 5--12) |
| Emotionalitaet | Emotional neutral -- keine starken Assoziationen |
| Buchstaben | Moeglichst wenig Wiederholungen ("BLUMEN" gut, "ANANAS" schlecht) |
| Komplexitaet | Einfach und alltaeglich |

### Regeln fuer die generierten Woerter

| Eigenschaft | Empfohlen | Vermeiden |
|---|---|---|
| **Art** | Konkrete Substantive, Alltagsgegenstaende | Abstrakte Begriffe, Emotionen |
| **Emotionalitaet** | Neutral, angenehm | Aufgeladen, triggering, stressig |
| **Komplexitaet** | Einfach, vertraut | Komplex, ungewoehnlich |
| **Vorstellbarkeit** | Leicht visualisierbar | Schwer vorstellbar |
| **Beziehung** | Zusammenhanglos, zufaellig | Logisch verknuepft, narrativ |
| **Bedrohlichkeit** | Harmlos, nicht bedrohlich | Angsterzeugend, beunruhigend |

### Detaillierte Regeln

1. **Konkret und bildlich vorstellbar**: Substantive und Alltagsgegenstaende funktionieren
   am besten. "Apfel", "Tiger", "Brille" statt "Freiheit" oder "Mathematik".

2. **Emotional neutral**: Keine emotional aufgeladenen Woerter. NICHT: Name eines
   Ex-Partners, Gefuehlswoerter, Arbeitsstress-Assoziationen.

3. **Nicht bedrohlich**: Die Bilder sollen nicht beunruhigend oder angsterzeugend sein.

4. **Schlaffoerderlich**: Einfache, banale, alltaegliche Vorstellungen bevorzugen statt
   detaillierter Szenarien.

5. **Keine Verbindungen herstellen**: NICHT versuchen, die Woerter miteinander in
   Beziehung zu setzen. Den natuerlichen Drang des Gehirns zur Sinngebung widerstehen.

6. **Verschiedene Woerter pro Nacht**: Fuer Abwechslung sorgen.

7. **Flexibel bleiben**: Wenn ein Wort sich nicht leicht vorstellen laesst, ueberspringen.

### Timing

Jedes Bild etwa **5--10 Sekunden** halten (bei der App: 8-Sekunden-Intervalle), dann
rasch zum naechsten wechseln, um die Bildung zusammenhaengender Narrative zu verhindern.

---

## 4. Variationen der Technik

### a) Serial Diverse Imagining (SDI) -- Standardmethode
Die oben beschriebene visuelle Vorstellungsmethode mit Buchstaben-Cueing.

### b) Serial Diverse Kinesthetic Imagining (SDKI)
Erweiterung mit **koerperlichen Empfindungen und Bewegungsvorstellungen**. Man stellt
sich vor, die Zielobjekte zu zeichnen oder sich durch sie hindurchzubewegen. Beaudoin
beschreibt es als "ein bisschen wie Pictionary im Kopf spielen". (Publikation 2019,
SFU Summit)

### c) App-gestuetzte Methode
Die App uebernimmt die Wortauswahl und spricht kuratierte Woerter in regelmaessigen
Abstaenden vor. Reduziert den kognitiven Aufwand erheblich.

### d) Kinderversion
Altersgerechte Tier-Bilder und Alltagsgegenstaende fuer Kinder ab 4 Jahren.

### e) Klinische Integration
Kombination mit **Kognitiver Verhaltenstherapie fuer Insomnie (CBT-I)**.

### f) Vereinfachte Variante (ohne Ausgangswort)
Einfach zufaellige Woerter waehlen und sich die Bilder vorstellen, ohne den Umweg
ueber ein Ausgangswort.

---

## 5. Studien und Evidenz

### Hauptstudie: SLEEP 2016

**Titel:** "Serial diverse imagining task: A new remedy for bedtime complaints of
worrying and other sleep-disruptive mental activity"
**Autoren:** Luc P. Beaudoin, Nancy Digdon, Kristin O'Neill, Julia Rachor
**Praesentiert:** SLEEP 2016, Denver, 14. Juni 2016

**Methode:**
- 154 Universitaetsstudierende mit exzessiver kognitiver Vor-Schlaf-Erregung
- Randomisierte Zuweisung zu: SDIT, Strukturiertes Problemloesen (SP), oder Kombination
- Wiederholte Messungen (Repeated measures ANOVAs)

**Ergebnisse:**
- SDIT war gleich wirksam wie strukturiertes Problemloesen
- Signifikante Verbesserungen gegenueber Baseline (p < .001) bei:
  - Kognitiver und somatischer Vor-Schlaf-Erregung
  - Schlafanstrengung (sleep effort)
  - Schlafqualitaet
- **Grosse Effektstaerken**: partielles eta-quadrat = 0.43 bis 0.71
- **Vorteil von SDIT**: Kann direkt im Bett durchgefuehrt werden

### Grundlagenarbeit: Beaudoin 2013/2014

Theoretisches Grundlagenpaper, das die SIP-Theorie, das Konzept der super-somnolenten
Mentation und SDI einfuehrt.

### Weitere Arbeiten

- **Digdon & Beaudoin (2015)**: Vergleich Cognitive Shuffle mit konstruktivem
  Sorgen-Management (vielversprechend)
- **Beaudoin (2019)**: Paper zu SDKI als neue Variante
- **Beaudoin & Guloy (2025)**: Kapitel im Cambridge Handbook of Sleep Models and Theories

### Medienresonanz (2025)

Die Technik erlebte 2025 einen grossen Aufmerksamkeitsschub:
- The New York Times, CNN, BBC Science Focus, Psychology Today, Oprah, Forbes, The Guardian

### Einschraenkungen

1. **Begrenzte Studienlage**: Wenige Studien, hauptsaechlich kleine Stichproben
2. **Keine Langzeitdaten**: Untersuchungen umfassen nur 1 Woche bis 1 Monat
3. **Nicht fuer alle geeignet**: Weniger bei schwerer/chronischer Insomnie oder
   medizinischen Grunderkrankungen wie Schlafapnoe
4. **Individuelle Unterschiede**: Was fuer den einen funktioniert, muss nicht fuer
   den anderen funktionieren
5. **Eingeschraenkte Vorstellungskraft**: Personen mit Aphantasie oder ADHS koennen
   Frustration erleben (wobei: einige Aphantasie-Betroffene berichten trotzdem ueber
   Wirksamkeit)
6. **Uebung noetig**: Sofortige Ergebnisse nicht garantiert

---

## 6. Analyse: mySleepButton App

### Ueberblick

| Eigenschaft | Details |
|---|---|
| Entwickler | CogSci Apps Corp. (Luc P. Beaudoin) |
| Erstes Release | 2014 |
| Plattformen | iOS, Android |
| Android Package | com.cogsciapps.mysleepbutton |
| Android Version | 2.0.77 |
| Minimum Android | 5.0+ |
| Bewertung (iOS) | 4.5/5 Sterne (206 Bewertungen) |
| Preismodell | Kostenlos + In-App-Kaeufe (3--5 USD pro Pack) |

### Features

**Kernfunktion:**
- "Put Me to Sleep"-Button: Einfacher Start
- Cognitive Shuffle: Alle 5--15 Sekunden ein neues Wort/Phrase

**Modi / Packs:**
- "Simple Things" Pack: Einfache, konkrete Gegenstaende
- "Scenes" Pack: Komplexere Szenen zum Vorstellen
- "Things to Draw" Pack: Motorische Vorstellung (SDKI)
- "Affective Body Scan" Pack: Personalisierbarer Koerperscan
- Kinder-Pack: Fuer Kinder ab 4 Jahren
- Meditations-Packs

**Stimmen und Audio:**
- Aufgenommene menschliche Stimmen (Human Voice Packs)
- Synthetische Stimmen (system-TTS)

**Weitere Features:**
- Konfigurierbarer Timer
- Einstellbare Intervalle
- Siri Shortcuts (ab Version 1.4.12)
- Dunkelmodus
- Woerter ausschliessen (Blacklist)

### Was die App GUT macht

1. **Hohe Wirksamkeit**: Viele Benutzer berichten Einschlafen in 5--10 Minuten
2. **Wissenschaftliche Grundlage**: Basiert auf publizierter Forschung
3. **Hilft bei Gruebeln**: Besonders effektiv bei rasenden Gedanken
4. **Einzigartiger Ansatz**: Kein White Noise, kein ASMR
5. **Funktioniert auch bei Aphantasie**: Entgegen Erwartung
6. **Kein Abo-Modell**: Einmalkauf

### Was die App SCHLECHT macht

1. **Audioprobleme**: Unterschiedliche Lautstaerken zwischen Woertern, Knackgeraeusche
2. **Synthetische Stimmen minderwertig**: Falsch ausgesprochene Woerter, teilweise
   unfreiwillig komisch
3. **Begrenzter Wortschatz**: Wortlisten wiederholen sich nach ca. 5 Minuten!
4. **Technische Probleme auf Android**:
   - Audio stoppt, wenn der Bildschirm ausgeht
   - Probleme mit Android-Batterie-Optimierung
   - Timer laeuft nicht korrekt
5. **Pack-Download-Bug**: Gekaufte Packs "de-installieren" sich taeglich von selbst
6. **Google Play Store**: App wurde im Januar 2025 aus dem Store entfernt
   (abgelaufenes Steuerformular)
7. **Kundenservice**: Mehrere Benutzer berichten ueber schlechte Reaktionszeiten
8. **Veraltetes Design**: Im Vergleich zu modernen Schlaf-Apps wenig poliert
9. **Keine gute deutsche Sprachunterstuetzung**

### Bewertungsverteilung (iOS, 206 Bewertungen)

```
5 Sterne: ████████████████████████████████████████ 78%
4 Sterne: █████ 10%
3 Sterne: ██ 5%
2 Sterne: █ 2%
1 Stern:  ██ 4%
```

---

## 6b. Technische Ueberlegungen fuer die Implementierung

### Architektur

- **Kotlin + Jetpack Compose**: Modernes Android-UI-Framework
- **MVVM-Architektur**: ViewModel fuer Zustandsverwaltung
- **Room-Datenbank**: Fuer Wortlisten-Speicherung und Nutzungsstatistiken
- **DataStore**: Fuer Einstellungen (Theme, Sprechgeschwindigkeit, Timer-Dauer)
- **Coroutines + Flow**: Fuer asynchrone Wort-Generierung und Timer

### Dark Theme mit Jetpack Compose

```kotlin
// MaterialTheme mit reinem Dark-Theme
// isSystemInDarkTheme() ignorieren -- App ist IMMER dunkel
val SchlafiFarbpalette = darkColorScheme(
    primary = Color(0xFF7B68EE),       // Mittleres Schieferblau
    onPrimary = Color(0xFFFFFFFF),
    surface = Color(0xFF0D0B1A),       // Sehr dunkles Violett
    onSurface = Color(0xFFE0D8F0),     // Helles Lavendel
    background = Color(0xFF0D0B1A),
    secondary = Color(0xFF4A3F6B),     // Gedaempftes Violett
)
```

### Timer-Implementierung

- CountDownTimer oder Coroutine-basierter Timer
- Foreground Service fuer zuverlaessige Hintergrund-Wiedergabe
- WakeLock fuer CPU (nicht Bildschirm) waehrend TTS aktiv ist
- Notification mit Steuerungselementen (Pause/Stop)
- Sanftes Fade-Out der Lautstaerke vor Timer-Ende

### Audio-Fokus

- `AudioManager.requestAudioFocus()` mit `AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK`
- Andere Apps leiser machen, nicht stoppen
- Audio-Fokus korrekt freigeben bei Pause/Stop

### Hintergrund-Betrieb

- Foreground Service mit Notification (Android 8+ Pflicht)
- MediaSession-Integration fuer Sperrbildschirm-Steuerung
- Korrekte Lifecycle-Behandlung (App in Hintergrund, Bildschirm aus)

### Wortlisten-Management

- Vorgefertigte deutsche Wortlisten in der App (Asset-Dateien oder Room DB)
- Kategorisierung nach Themen
- Algorithmus zur Vermeidung von Wiederholungen (zuletzt verwendete Woerter merken)
- Optional: Nutzer koennen eigene Woerter hinzufuegen

---

## 7. Konkurrierende Apps

### Direkte Konkurrenten (Cognitive Shuffle)

| App | Plattform | Besonderheiten |
|---|---|---|
| **mySleepButton** | iOS, Android | Original-App des Erfinders, aber veraltet |
| **Sleep Words: Cognitive Shuffle** (Karyzan) | Android | Modernere UI, eigene Themen, v2.1 (Dez. 2024) |
| **SomnoTest** | -- | Forschungs-App, kein Consumer-Produkt |

### Indirekte Konkurrenten (Schlaf-Apps allgemein)

| App | Ansatz | Preis | Cognitive Shuffle? |
|---|---|---|---|
| **Calm** | Schlafgeschichten, Meditation, White Noise | ~70 USD/Jahr | Nein (nur Blog-Artikel) |
| **Headspace** | Sleepcasts, Sleep Radio, Meditation | ~70 USD/Jahr | Nein |
| **BetterSleep** | Klanglandschaften, ASMR, Meditationen | Abo | Nein |
| **Pzizz** | Algorithmische Dreamscapes | Abo | Nein |
| **Chorus Sleep** | CBT-I | Variiert | Nein |
| **Stellar Sleep** | CBT-I | Variiert | Nein |
| **Aumio** (deutsch) | Traumreisen fuer Kinder | Abo | Nein |

### Marktluecke

**Es gibt keine moderne, gut gemachte App, die sich auf Cognitive Shuffle spezialisiert
UND gute deutsche Sprachunterstuetzung bietet.** Die einzige dedizierte App (mySleepButton)
hat erhebliche UX-Probleme. Grosse Konkurrenten wie Calm und Headspace bieten keinen
dedizierten Cognitive-Shuffle-Modus. Das ist unsere Chance.

---

## 8. UI/UX Best Practices fuer Schlaf-Apps

### Farbgestaltung

- **Immer dunkles Theme** (keine Umschaltung noetig): Helle Bildschirme stoeren
  die Melatonin-Produktion
- **Primaerfarbe**: Tiefes Dunkelviolett/Dunkelblau als Hintergrund
- **Akzentfarben**: Hellere Violett-/Lavendel-Toene fuer interaktive Elemente
- **Vermeiden**: Reines Weiss (#FFFFFF), grelles Blau, Rot-Toene
- **Empfohlene Palette**:
  - Basis: `#0D0B1A` (sehr dunkles Violett)
  - Akzent: `#7B68EE` (mittleres Schieferblau)
  - Text: `#E0D8F0` (helles Lavendel)
  - Sekundaer: `#4A3F6B` (gedaempftes Violett)

### Typografie

- Klare Hierarchie: Ueberschriften, Untertitel, Fliesstext
- Moderne Schriftarten: Inter, Nunito, Poppins
- Grosse Touch-Targets: mindestens 48dp
- Reduzierte Textmenge -- visuelle Kommunikation bevorzugen

### Navigation und Interaktion

- **Minimale Interaktion**: Nutzer sind muede und im Bett
- **Ein-Tap-Start**: Hauptfunktion sofort erreichbar
- Tab-Bar mit max. 3--4 Bereichen
- **Kein helles Aufblinken** bei Interaktionen
- Sanfte, langsame Animationen

### Timer-Design

- Kreisfoermige/bogenfoermige Timer-Anzeige
- Grosse Ziffern fuer Restzeit
- Sanftes Fade-Out am Ende
- Voreingestellte Zeiten: 15, 30, 45, 60 Min.
- Option "Unbegrenzt"

### Schlaf-spezifische Patterns

- **Auto-Dimming**: Bildschirmhelligkeit automatisch reduzieren
- **Bildschirm aus**: Nach Start abdunkeln/sperren
- **Nachttisch-Modus**: Minimale Uhr-Anzeige
- **Sanfte Animationen**: Langsame, beruhigende Uebergaenge
- **Kein erzwungenes Login**: Sofort nutzbar

---

## 9. Sprachausgabe: Vorgerenderte Audiodateien statt Echtzeit-TTS

### Grundsatzentscheidung: Vorrendern statt Echtzeit

Statt Echtzeit-TTS auf dem Geraet (wo Qualitaet je nach Android-Version und Geraet
stark schwankt) rendern wir **alle ~500 Woerter einmalig vorab** mit einem hochwertigen
TTS-Dienst und buendeln die Audiodateien in der App.

**Vorteile:**
- Konsistente, hoechste Qualitaet auf allen Geraeten
- Kein Internet noetig zur Laufzeit
- Kein TTS-Engine-Setup auf dem Geraet
- Keine Aussprache-Probleme mit zusammengesetzten deutschen Woertern
- Keine Lautstaerke-Schwankungen (Hauptkritikpunkt an mySleepButton!)

**Kosten:** ~500 Woerter = ~3.200 Zeichen. Bei fast allen Anbietern im Free-Tier oder
fuer unter 5 EUR einmalig machbar.

**Dateigroesse:** Minimal -- kein Problem fuer eine App.

| Format | Pro Wort (ca.) | 500 Woerter gesamt |
|---|---|---|
| **Opus in .ogg (empfohlen)** | 5--10 KB | **2,5 -- 5 MB** |
| MP3 128kbps | 10--20 KB | 5 -- 10 MB |
| OGG Vorbis 96kbps | 8--15 KB | 4 -- 7,5 MB |
| WAV 44.1kHz 16bit | 70--130 KB | 35 -- 65 MB |

**Empfohlenes Format:** Opus in .ogg-Container. Ab Android 5.0 (minSdk 21) voll
unterstuetzt. Beste Kompression bei hoechster Qualitaet.

---

### 9.1 Kommerzielle TTS-Dienste

#### ElevenLabs (Marktfuehrer)

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Exzellent. Multilingual v2 mit natuerlicher Intonation. Gute Komposita-Aussprache. |
| **Beruhigende Stimmen** | Eigene "Soothing"-Kategorie in der Voice Library. Ideal fuer Schlaf-Apps. |
| **Free-Tier** | 10.000 Zeichen/Monat -- reicht fuer 3.200 Zeichen, aber KEINE kommerzielle Nutzung. |
| **Starter-Plan** | 5 USD/Monat, 30.000 Zeichen, kommerzielle Rechte inklusive. |
| **Kosten fuer 500 Woerter** | 5 USD einmalig (1 Monat Starter buchen, rendern, kuendigen). |
| **Voice Cloning** | Ja, ab Starter-Plan. |
| **Lizenz** | Vorgerenderte Audio-Dateien in App buendeln erlaubt ab bezahltem Plan. |

#### Fish Audio S1 (Platz 1 TTS-Arena)

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Sehr gut. Korrekter Sprachrhythmus fuer Deutsch, nicht nur englisches Timing mit deutschen Phonemen. |
| **Beruhigende Stimmen** | Voice Library mit verschiedenen Stilen. 60+ Emotionsmarker. |
| **Free-Tier** | 8.000 Credits/Monat (~16.000 Zeichen) -- reicht fuer uns, aber KEINE kommerzielle Nutzung. |
| **Plus-Plan** | 5,50 USD/Monat, kommerzielle Rechte. |
| **Kosten fuer 500 Woerter** | 5,50 USD einmalig. |
| **Besonderheit** | #1 auf TTS-Arena-Rangliste. 70% guenstiger als ElevenLabs bei gleicher/besserer Qualitaet. |

#### Cartesia Sonic 3

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Sehr gut. Dedizierte deutsche Stimmen (maennlich warm, weiblich warm, maennlich casual). |
| **Beruhigende Stimmen** | Speziell fuer Audiobooks getuned -- warm und ausdrueckend. In 36/50 Blindvergleichen gegenueber ElevenLabs bevorzugt. |
| **Pro-Plan** | 5 USD/Monat, 100.000 Credits, kommerzielle Nutzung. |
| **Kosten fuer 500 Woerter** | 5 USD einmalig. |

#### Google Cloud TTS Neural2

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Gut bis sehr gut. Mehrere Neural2-Stimmen (de-DE-Neural2-B maennlich, de-DE-Neural2-C weiblich). |
| **Free-Tier** | 1 Million Zeichen/Monat fuer Neural2 -- unsere 3.200 Zeichen sind **komplett kostenlos**. |
| **Kosten fuer 500 Woerter** | **0 USD** -- vollstaendig im Free-Tier. Kommerzielle Nutzung erlaubt. |
| **Einschraenkung** | Weniger "lebendig" als ElevenLabs/Fish Audio. Keine Soothing-Kategorie. |

#### OpenAI TTS HD

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Gut, aber primaer auf Englisch optimiert. Gelegentlich leichter englischer Akzent. |
| **Stimmen** | 11 Stimmen. "Shimmer" und "Nova" am weichsten/ruhigsten. |
| **Kosten fuer 500 Woerter** | ~0,10 USD (TTS HD: 30 USD/Mio. Zeichen). |
| **Einschraenkung** | Fuer Deutsch nicht die natuerlichste Option. |

#### Murf.ai

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Gut. 20+ Sprachen, diverse deutsche Stimmen. |
| **Beruhigende Stimmen** | Eigene "Soothing Voice"-Kategorie. 15+ Sprechstile inkl. "warm storytelling". |
| **Kosten** | Ab 19 USD/Monat (Creator Lite). Fuer unseren Bedarf Overkill. |

---

### 9.2 Open-Source-Optionen (kostenlos, lokal ausfuehrbar)

#### CosyVoice2-EU (Apache 2.0) -- Deutsch-Spezialist

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | **Exzellent.** Speziell fuer Deutsch und Franzoesisch optimiert. 83--91% WER-Reduktion ggue. Basismodell. |
| **Blindtests** | Von deutschen Muttersprachlern **gegenueber ElevenLabs bevorzugt**. |
| **Voice Cloning** | Zero-Shot Voice Cloning moeglich. |
| **Lizenz** | Apache 2.0 -- uneingeschraenkt kommerziell nutzbar. |
| **Hardware** | GPU empfohlen, aber CPU moeglich. |
| **Links** | [GitHub](https://github.com/hi-paris/CosyVoice2-EU), [Demo](https://horstmann.tech/cosyvoice2-demo/) |

#### Chatterbox Multilingual (MIT) -- Bester Allrounder

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Sehr gut. 23 Sprachen inkl. Deutsch. |
| **Blindtests** | 63,8% Praeferenz gegenueber ElevenLabs (Englisch-Tests). |
| **Emotionssteuerung** | Ja -- "emotion exaggeration control" eingebaut. Ideal fuer ruhigen Ton. |
| **Voice Cloning** | Ja, mit nur 3 Sekunden Referenzaudio. |
| **Lizenz** | MIT -- uneingeschraenkt kommerziell nutzbar. |
| **Hardware** | GPU empfohlen (500M Parameter). |
| **Links** | [GitHub](https://github.com/resemble-ai/chatterbox), [Resemble AI](https://www.resemble.ai/) |

#### Piper + Thorsten Voice (Apache 2.0 / CC0) -- Leichtgewicht

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Mittel bis gut. Dedizierte deutsche Muttersprachler-Stimmen. |
| **Verfuegbare deutsche Stimmen** | **thorsten** (low/medium/high), **thorsten_emotional** (medium), **eva_k** (x_low), **karlsson** (low), **kerstin** (low), **ramona** (low) |
| **Lizenz** | CC0 (Public Domain) fuer Thorsten-Stimmdaten, Apache 2.0/MIT fuer Piper |
| **Hardware** | Laeuft auf CPU, sogar auf Raspberry Pi. Extrem schnell und leichtgewichtig. |
| **Einschraenkung** | Klingt bei Einzelwoertern akzeptabel, aber deutlich weniger natuerlich als KI-basierte Alternativen. Keine Emotionssteuerung. Eher fuer Home-Automation als Premium-Schlaf-App. |
| **Links** | [Piper GitHub](https://github.com/rhasspy/piper), [Thorsten Voice](https://www.thorsten-voice.de/en/), [Voice Samples](https://rhasspy.github.io/piper-samples/) |

#### Qwen3-TTS (Apache 2.0) -- Voice Design per Text

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Gut bis sehr gut. 10 Sprachen inkl. Deutsch. |
| **Besonderheit** | Stimme per natuerlichsprachlicher Beschreibung erstellen: "ruhig, weiblich, warm, langsam". |
| **Voice Cloning** | Ja (3 Sek. Audio). |
| **Modellgroessen** | 0.6B und 1.7B Parameter. |
| **Links** | [GitHub](https://github.com/QwenLM/Qwen3-TTS) |

#### Kokoro (Apache 2.0) -- Schnellster, aber Deutsch experimentell

| Eigenschaft | Details |
|---|---|
| **Deutsche Qualitaet** | Experimentell. Deutsch nur ueber Community-Fine-Tunes, noch nicht ausgereift. |
| **Staerke** | 82M Parameter, extrem schnell (96x Echtzeit auf GPU). Platz 1 HuggingFace Arena fuer Englisch. |
| **Einschraenkung** | Fuer Deutsch aktuell **nicht empfehlenswert**. |
| **Links** | [kokorottsai.com](https://kokorottsai.com/) |

---

### 9.3 Gesamtvergleich und Ranking

| Rang | Dienst | Deutsch | Kosten (500 Woerter) | Lizenz | Beruhigende Stimme |
|---|---|---|---|---|---|
| 1 | **ElevenLabs** | Exzellent | 5 USD (Starter, 1 Monat) | Kommerziell ab Starter | Ja (Soothing-Library) |
| 2 | **CosyVoice2-EU** | Exzellent (optimiert!) | **0 USD** (Open Source) | Apache 2.0 | Per Voice Cloning |
| 3 | **Chatterbox** | Sehr gut | **0 USD** (Open Source) | MIT | Ja (Emotionssteuerung) |
| 4 | **Cartesia Sonic 3** | Sehr gut, warm | 5 USD (Pro, 1 Monat) | Kommerziell ab Pro | Ja (Audiobook-Stimmen) |
| 5 | **Fish Audio S1** | Sehr gut | 5,50 USD (Plus, 1 Monat) | Kommerziell ab Plus | Ja (Emotionsmarker) |
| 6 | **Google Cloud Neural2** | Gut--sehr gut | **0 USD** (Free-Tier) | Kommerziell erlaubt | Eingeschraenkt |
| 7 | **Qwen3-TTS** | Gut--sehr gut | **0 USD** (Open Source) | Apache 2.0 | Ja (Voice Design) |
| 8 | **Piper + Thorsten** | Mittel--gut | **0 USD** (Open Source) | CC0 / Apache 2.0 | Nein |
| 9 | **OpenAI TTS HD** | Gut | ~0,10 USD | Kommerziell erlaubt | Bedingt |
| 10 | **Kokoro** | Experimentell | **0 USD** (Open Source) | Apache 2.0 | Nein |

---

### 9.4 Empfohlene Strategie

**Schritt 1 -- Kostenlose Tests (0 EUR):**
1. **CosyVoice2-EU** lokal testen -- speziell fuer Deutsch optimiert, in Blindtests
   von Muttersprachlern ggue. ElevenLabs bevorzugt
2. **Chatterbox Multilingual** lokal testen -- MIT-Lizenz, Emotionssteuerung
3. **Google Cloud TTS Neural2** per Free-Tier testen -- 1 Mio. Zeichen kostenlos

**Schritt 2 -- Falls Open-Source nicht genuegt (5 EUR):**
4. **ElevenLabs Starter** fuer 5 USD buchen, Soothing-Stimme waehlen, alle 500
   Woerter rendern, Abo kuendigen

**Schritt 3 -- Mehrere Stimmen anbieten:**
Bei nur 2,5--5 MB pro Stimm-Set koennten wir sogar mehrere Stimmen (maennlich/weiblich)
in die App packen -- die Gesamtgroesse bleibt unter 15 MB.

### 9.5 Hinweis: Kein OpenRouter

OpenRouter ist ein **LLM-Router** (routet Textanfragen an GPT/Claude/Llama etc.), kein
TTS-Dienst. Es hat Audio-Input-Faehigkeiten (Transkription), aber kein dediziertes
TTS-Output. Fuer vorgerenderte Audiodateien geht man direkt zum TTS-Anbieter.

### 9.6 Fallback: Android-TTS zur Laufzeit

Falls Nutzer eigene Woerter hinzufuegen (Luxus-Feature), brauchen wir fuer diese einen
Laufzeit-TTS-Fallback. Dafuer eignet sich die eingebaute Android-TTS:

```kotlin
val tts = TextToSpeech(context) { status ->
    if (status == TextToSpeech.SUCCESS) {
        tts.setLanguage(Locale.GERMAN)
        tts.setSpeechRate(0.8f)   // Langsamer fuer Schlaf
        tts.setPitch(0.92f)       // Leicht tiefer, beruhigend
    }
}
```

Dieses Fallback sollte aber nur fuer benutzerdefinierte Woerter genutzt werden, nicht
fuer die Standardwortliste.

---

## 10. Wortlisten-Generierung

### Kategorien fuer deutsche Woerter

| Kategorie | Beispiele | Anzahl (Ziel) |
|---|---|---|
| Natur | Baum, Berg, See, Wolke, Stein, Blume | 30+ |
| Tiere | Katze, Delfin, Eule, Schmetterling, Igel | 30+ |
| Lebensmittel | Apfel, Brot, Kaese, Kirsche, Honig | 30+ |
| Haushalt | Kissen, Lampe, Tasse, Decke, Kerze | 30+ |
| Kleidung | Schal, Muetze, Handschuh, Stiefel | 20+ |
| Wetter | Regenbogen, Schnee, Nebel, Tau | 15+ |
| Pflanzen | Sonnenblume, Kaktus, Efeu, Moos | 20+ |
| Gewaesser | Teich, Bach, Wasserfall, Quelle | 15+ |
| Landschaft | Wiese, Huegel, Tal, Lichtung, Pfad | 20+ |
| Gebaeude | Leuchtturm, Muehle, Bruecke, Turm | 20+ |
| Musik | Floete, Trommel, Harfe, Geige | 15+ |
| Himmel | Stern, Mond, Komet, Wolke | 15+ |
| Handwerk | Pinsel, Nadel, Hammer, Schere | 15+ |
| Material | Seide, Wolle, Holz, Glas, Ton | 15+ |
| Garten | Schaukel, Zaun, Brunnen, Laterne | 15+ |

**Ziel: Mindestens 300--500 Woerter** in 15+ Kategorien, um keine merkbare Wiederholung
in einer 30-Minuten-Sitzung zu haben. (mySleepButton wird kritisiert fuer Wiederholungen
nach nur 5 Minuten!)

### Algorithmus

```
Eingabe: Wortlisten nach Kategorien, Historie der letzten 50 Woerter

1. WAEHLE zufaellige Kategorie K (unterschiedlich zu den letzten 3 Kategorien)
2. WAEHLE zufaelliges Wort W aus K, das:
   a. NICHT in den letzten 50 gesprochenen Woertern vorkommt
   b. NICHT mit dem gleichen Buchstaben beginnt wie das vorherige Wort
   c. NICHT in der gleichen Unterkategorie wie das vorherige Wort
3. SPRECHE Wort W ueber TTS
4. WARTE [konfigurierbares Intervall, Standard: 8 Sekunden]
5. SPEICHERE W in Historie
6. WIEDERHOLE bis Timer abgelaufen oder Nutzer stoppt
```

### Erweiterter Algorithmus (DIY-Modus)

```
1. GENERIERE zufaelliges deutsches Startwort (5--8 Buchstaben, neutral)
2. FUER JEDEN Buchstaben B im Startwort:
   a. FINDE 3--5 Woerter die mit B beginnen (verschiedene Kategorien)
   b. SPRECHE jedes Wort mit konfigurierbarer Pause
3. WIEDERHOLE mit neuem Startwort
```

---

## 11. Namensvorschlaege

### Bewertungskriterien
- Kurz und einpraegsam (1--2 Woerter ideal)
- Leicht auszusprechen und zu buchstabieren
- Evoziert Schlaf, Ruhe, Traum oder Gedanken-Verwirbelung
- Funktioniert als App-Name, Domain und Social-Media-Handle

### Alle Vorschlaege

| Nr | Name | Erklaerung | Stil |
|----|------|-----------|------|
| 1 | **Schlafi** | Liebevoll-verspielt, Koseform von "Schlaf". Maskottchen-Potenzial. Projektname! | Verspielt, deutsch |
| 2 | **Wirbelwort** | Kern der App: Woerter werden "verwirbelt". Bildhaft. | Beschreibend, deutsch |
| 3 | **Traumwirbel** | "Traum" + "Wirbel" -- Gedanken wirbeln in den Traum. Poetisch. | Poetisch, deutsch |
| 4 | **Denkflocke** | Wie Schneeflocken fallen Gedanken-Bilder leicht herab. | Poetisch, deutsch |
| 5 | **Wortmond** | "Wort" + "Mond" -- starkes Logo-Potenzial. | Poetisch, deutsch |
| 6 | **Schlummershuffle** | Direkte Verbindung zum "Cognitive Shuffle". | Beschreibend, hybrid |
| 7 | **Einbild** | Wortspiel: "Ein Bild" + "Einbilden". Kurz, clever. | Clever, deutsch |
| 8 | **Sanftdenk** | "Sanftes Denken" -- beschreibt den Zielzustand. | Ruhig, deutsch |
| 9 | **Bildfall** | Bilder "fallen" wie Blaetter -- eins nach dem anderen. | Minimalistisch, deutsch |
| 10 | **Nachtmix** | "Nacht" + "Mix" -- modern, international verstaendlich. | Modern, hybrid |
| 11 | **Drift** | "In den Schlaf driften." Minimalistisch. Starkes Branding. | Minimalistisch, international |
| 12 | **Worttraum** | "Wort" + "Traum" -- durch Woerter in den Traum gleiten. | Klar, deutsch |
| 13 | **Murmeli** | Von "Murmeltier" (schlaeft den Winter). Niedlich. | Verspielt, deutsch |
| 14 | **Sternstaub** | Naechtlicher Himmel und Magie. Sehr bildhaft. | Poetisch, deutsch |
| 15 | **Wiegewort** | "Wiegen" + "Wort" -- Woerter wiegen in den Schlaf. | Poetisch, deutsch |
| 16 | **Nebelsinn** | "Nebel" + "Sinn" -- Gedanken werden vernebelt. Mystisch. | Mystisch, deutsch |
| 17 | **Kopfkino** | Umgangssprachlich bekannt. Trifft den Kern. | Umgangssprachlich |
| 18 | **Gedankenfeder** | Leichte Gedanken die sanft schweben. | Poetisch, deutsch |
| 19 | **Wortwiese** | "Wiese voller Woerter" -- friedlich. Alliteration W-W. | Friedlich, deutsch |
| 20 | **Schlafmischer** | Direkte Uebersetzung des Konzepts. | Beschreibend, deutsch |

### Top-Empfehlungen

1. **Schlafi** -- Verspielt, sympathisch, bereits Projektname. Maskottchen-faehig.
2. **Kopfkino** -- Sofort verstaendlich, bekannter Begriff, trifft den Kern.
3. **Wirbelwort** -- Beschreibend, einpraegsam, deutsch.
4. **Drift** -- Minimalistisch, international, starkes Branding.

---

## 12. Feature-Kategorien: Minimal / Gut / Luxus

### MVP -- Minimal Viable Product

Das absolute Minimum fuer eine funktionale App:

| Feature | Details |
|---|---|
| **Deutsche Sprachausgabe** | Vorgerenderte Audiodateien (Opus/.ogg), ~500 Woerter gebuendelt |
| **Einstellbarer Sleep-Timer** | 15, 30, 45, 60 Min. + unbegrenzt |
| **Einstellbare Pause** | Intervall zwischen Woertern: 5, 8, 10, 15, 20 Sek. |
| **Wortliste** | 300+ deutsche Woerter in 15+ Kategorien |
| **Diversitaets-Algorithmus** | Keine Wiederholungen, Kategorie-Wechsel, Anfangsbuchstaben-Wechsel |
| **Dunkles Theme** | Immer dunkel, schlaffreundliche Farben |
| **Ein-Tap-Start** | Sofort starten ohne Umwege |
| **Hintergrund-Wiedergabe** | Foreground Service, funktioniert bei Bildschirm aus |
| **Fade-Out** | Sanftes Leiserwerden vor Timer-Ende |
| **Lautstaerke-Regler** | In-App-Lautstaerke anpassbar |

### Gute Features (Version 2)

Sinnvolle Erweiterungen, die die App deutlich besser machen:

| Feature | Details |
|---|---|
| **Verschiedene Modi** | "Einfache Dinge", "Szenen", "DIY-Buchstaben-Methode" |
| **Szenen-Modus** | Kurze Phrasen statt einzelner Woerter ("Ein Hund der im Park spielt") |
| **Stimmen-Auswahl** | Maennlich/weiblich, verschiedene System-TTS-Stimmen |
| **Sprechgeschwindigkeit** | Langsamer/schneller Regler |
| **Tonhoehe** | Hoeher/tiefer Regler |
| **Wort-Blacklist** | Bestimmte Woerter ausschliessen |
| **Kategorie-Filter** | Nur bestimmte Kategorien aktivieren/deaktivieren |
| **Sleeptimer mit Uhrzeit** | "Stoppe um 23:30" statt nur Dauer |
| **Statistiken** | Nutzungshaeufigkeit, durchschnittliche Einschlafzeit |
| **Onboarding** | 3--4 Screens mit Erklaerung der Methode |
| **Hintergrundklaenge** | Optionale leise Naturklaenge (Regen, Meer, Wind) |
| **Notification-Steuerung** | Pause/Stop ueber Benachrichtigung |
| **Sperrbildschirm-Controls** | MediaSession-Integration |
| **Widget** | Schnellstart-Widget fuer Homescreen |

### Luxus-Features (Version 3+)

Differenzierende Features fuer eine Premium-Erfahrung:

| Feature | Details |
|---|---|
| **Zusaetzliche Stimmen** | Weitere vorgerenderte Stimm-Sets (maennlich/weiblich, verschiedene Anbieter) |
| **KI-generierte Szenen** | LLM generiert einzigartige, bildhaft-neutrale Szenen |
| **Koerperscan-Modus** | Affective Body Scan (wie mySleepButton) |
| **Kinderversion** | Altersgerechte Woerter, freundlichere Stimme, Eltern-Timer |
| **SDKI-Modus** | Motorische Vorstellung ("Stell dir vor, du zeichnest...") |
| **Eigene Wortlisten** | Nutzer koennen eigene Woerter hinzufuegen |
| **Import/Export** | Wortlisten teilen |
| **Schlaf-Tagebuch** | Subjektive Schlafqualitaet pro Nacht bewerten |
| **Smart-Alarm** | Wecker der zum optimalen Zeitpunkt weckt |
| **Wear OS** | Steuerung ueber Smartwatch |
| **Automatische Erkennung** | Einschlaferkennung ueber Bewegungssensor und Auto-Stop |
| **Mehrsprachig** | Englisch, Franzoesisch, etc. |
| **Kombinierbare Sitzungen** | Erst 5 Min. Atemuebung, dann Cognitive Shuffle |
| **Favoriten-Woerter** | Woerter markieren, die besonders gut funktionieren |
| **A/B-Tracking** | Welche Einstellungen fuehren zur besten Schlafqualitaet? |
| **Integration** | Google Fit / Samsung Health |
| **Offline Cloud Neural2** | Vorgerenderte Premium-Stimmen als Download-Pack |
| **Adaptives Timing** | Pausen werden laenger je laenger die Sitzung dauert |
| **Sanfter Lautstaerke-Verlauf** | Lautstaerke nimmt ueber die Sitzung graduell ab |

---

## 13. Plan der Plaene

### Phase 0: Vorbereitung (diese Phase)
- [x] Recherche: Cognitive Shuffle / SDI verstehen
- [x] Recherche: mySleepButton analysieren
- [x] Recherche: Konkurrierende Apps
- [x] Recherche: UI/UX Best Practices
- [x] Recherche: Android TTS fuer Deutsch
- [x] Recherche: Wortlisten-Generierung
- [x] Feature-Kategorien definieren
- [x] Namensvorschlaege
- [x] Dokumentation

### Phase 1: MVP-Planung
- [ ] Technische Architektur definieren (Kotlin, Jetpack Compose, MVVM)
- [ ] Projektstruktur aufsetzen (Gradle, Dependencies)
- [ ] Datenbankschema fuer Wortlisten entwerfen
- [ ] UI-Wireframes / Mockups erstellen
- [ ] Wortliste kuratieren (300+ deutsche Woerter)
- [ ] TTS-Anbieter evaluieren (CosyVoice2-EU, Chatterbox, ElevenLabs testen)
- [ ] Audiodateien vorrendern (500 Woerter, Opus/.ogg)
- [ ] Timer-/Service-Architektur planen

### Phase 2: MVP-Entwicklung
- [ ] Projekt-Setup (Android Studio, Gradle, Compose)
- [ ] Datenbank + Wortlisten (Room DB, Seed-Daten)
- [ ] Audio-Playback-Engine (vorgerenderte Opus/.ogg Dateien abspielen)
- [ ] Wort-Generierungs-Algorithmus implementieren
- [ ] Timer-Service (Foreground Service, WakeLock)
- [ ] Haupt-UI: Startbildschirm mit Ein-Tap-Start
- [ ] Einstellungen: Timer-Dauer, Pause-Intervall, Lautstaerke
- [ ] Fade-Out implementieren
- [ ] Dunkles Theme
- [ ] Notification-Controls (Pause/Stop)
- [ ] Grundlegendes Testing

### Phase 3: Polieren & Version 2 Features
- [ ] Onboarding erstellen
- [ ] Szenen-Modus implementieren
- [ ] Stimmen-Auswahl
- [ ] Hintergrundklaenge (optional)
- [ ] Kategorie-Filter
- [ ] Wort-Blacklist
- [ ] Statistiken
- [ ] Widget
- [ ] Sperrbildschirm-Controls
- [ ] Ausfuehrliches Testing & Bug-Fixing
- [ ] Play Store Listing vorbereiten

### Phase 4: Launch
- [ ] Beta-Testing (intern)
- [ ] Play Store Assets (Screenshots, Beschreibung, Icon)
- [ ] Veroeffentlichung im Google Play Store
- [ ] Feedback sammeln

### Phase 5: Luxus-Features (post-launch)
- [ ] Zusaetzliche Stimm-Sets (maennlich/weiblich, verschiedene TTS-Anbieter)
- [ ] KI-generierte Szenen
- [ ] Kinderversion
- [ ] Koerperscan-Modus
- [ ] SDKI-Modus
- [ ] Wear OS
- [ ] Weitere Sprachen
- [ ] Schlaf-Tagebuch + Tracking

---

## 14. Quellen

### Wissenschaftliche Quellen

- Beaudoin, L.P. (2014). A design-based approach to sleep-onset and insomnia:
  super-somnolent mentation, the cognitive shuffle and serial diverse imagining.
  SFU Summit. [ResearchGate](https://www.researchgate.net/publication/267337398)

- Beaudoin, L.P., Digdon, N., O'Neill, K., & Rachor, J. (2016). Serial Diverse
  Imagining Task: A New Remedy for Bedtime Complaints of Worrying and Other
  Sleep-Disruptive Mental Activity. SLEEP 2016, Denver.
  [ResearchGate](https://www.researchgate.net/publication/300004607)

- Beaudoin, L.P. (2019). Serial Diverse Kinesthetic Imagining (SDKI).
  [SFU Summit](https://summit.sfu.ca/item/18922)

### App-Quellen

- [mySleepButton Official Website](https://mysleepbutton.com/en/home/)
- [mySleepButton iOS App Store](https://apps.apple.com/us/app/mysleepbutton/id740251957)
- [mySleepButton DIY Instructions](https://mysleepbutton.com/en/support/do-it-yourself-cognitive-shuffle-sdi/)
- [mySleepButton Reviews (JustUseApp)](https://justuseapp.com/en/app/740251957/mysleepbutton/reviews)
- [mySleepButton Reviews (AppRecs)](https://apprecs.com/ios/740251957/mysleepbutton)
- [Sleep Words: Cognitive Shuffle (Google Play)](https://play.google.com/store/apps/details?id=com.karyzan.sleepwordz)
- [mySleepButton Google Play Removal](https://mysleepbutton.com/en/blog/mysleepbutton-still-not-on-google-play/)

### Medien & Erklaerungen

- [Wikipedia: Cognitive Shuffle](https://en.wikipedia.org/wiki/Cognitive_shuffle)
- [SFU: Reprogramming Rest](https://www.sfu.ca/main/dashboard/faculty-staff/news/2025/04/reprogramming-rest--sfu-researcher-s-science-of-falling-asleep.html)
- [CNN: Cognitive Shuffling (2025)](https://www.cnn.com/2025/04/08/health/cognitive-shuffling-sleep-technique-benefits-wellness)
- [The Conversation: What is cognitive shuffling?](https://theconversation.com/what-is-cognitive-shuffling-and-does-it-really-help-you-get-to-sleep-two-sleep-scientists-explain-256444)
- [Calm Blog: Cognitive Shuffling](https://www.calm.com/blog/cognitive-shuffling)
- [ScienceAlert: Cognitive Shuffling](https://www.sciencealert.com/cognitive-shuffling-really-could-help-insomniacs-get-to-sleep)
- [Bulletproof Musician: Serial Diverse Imaging](https://bulletproofmusician.com/difficulty-getting-to-sleep-try-serial-diverse-imaging/)
- [Cool Tools: My Sleep Button](https://kk.org/cooltools/my-sleep-button/)

### TTS-Anbieter & Open-Source-Modelle

- [ElevenLabs Pricing](https://elevenlabs.io/pricing)
- [ElevenLabs Soothing Voices](https://elevenlabs.io/voice-library/soothing)
- [ElevenLabs Terms of Service](https://elevenlabs.io/terms-of-use)
- [Fish Audio](https://fish.audio/)
- [Fish Audio vs. ElevenLabs Pricing](https://fish.audio/vs/pricing/elevenlabs/)
- [Cartesia Pricing](https://cartesia.ai/pricing)
- [Cartesia German TTS](https://cartesia.ai/languages/german)
- [Google Cloud TTS](https://cloud.google.com/text-to-speech)
- [Google Cloud TTS Pricing](https://cloud.google.com/text-to-speech/pricing)
- [OpenAI TTS Guide](https://developers.openai.com/api/docs/guides/text-to-speech/)
- [Murf.ai Pricing](https://murf.ai/pricing)
- [CosyVoice2-EU GitHub](https://github.com/hi-paris/CosyVoice2-EU)
- [CosyVoice2-EU Demo](https://horstmann.tech/cosyvoice2-demo/)
- [Chatterbox GitHub](https://github.com/resemble-ai/chatterbox)
- [Chatterbox Multilingual](https://www.resemble.ai/introducing-chatterbox-multilingual-open-source-tts-for-23-languages/)
- [Piper TTS GitHub](https://github.com/rhasspy/piper)
- [Thorsten Voice](https://www.thorsten-voice.de/en/)
- [Piper Voice Samples](https://rhasspy.github.io/piper-samples/)
- [Qwen3-TTS GitHub](https://github.com/QwenLM/Qwen3-TTS)
- [Kokoro TTS](https://kokorottsai.com/)
- [BentoML: Open-Source TTS Models 2026](https://www.bentoml.com/blog/exploring-the-world-of-open-source-text-to-speech-models)
- [Best ElevenLabs Alternatives 2026](https://ocdevel.com/blog/20250720-tts)

### Technische Quellen

- [Android TextToSpeech API](https://developer.android.com/reference/android/speech/tts/TextToSpeech)
- [Google Cloud TTS Voices](https://cloud.google.com/text-to-speech/docs/voices)
- [Sleep Foundation: Best Sleep Apps 2026](https://www.sleepfoundation.org/best-sleep-apps)
