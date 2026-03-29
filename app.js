const ARTICLE = { m: 'ein', f: 'eine', n: 'ein' };
const CIRCUMFERENCE = 2 * Math.PI * 64; // matches r="64" in SVG

// Pre-rendered voices probed on startup (best first).
// generate_audio.py supports all 30 Chirp 3: HD voices — to add one here,
// generate it with --voice <Name>, then add its lowercase name to this array.
const PRERENDERED_VOICES = ['enceladus', 'sadachbia', 'sadaltager', 'charon'];

// ── State ──
let running = false;
let timerMinutes = parseInt(document.querySelector('#timerChips .chip.active').dataset.value);
let intervalSeconds = parseInt(document.querySelector('#intervalChips .chip.active').dataset.value);
let volume = document.getElementById('volumeSlider').value / 100;
let speechRate = document.getElementById('rateSlider').value / 100;
let speechPitch = document.getElementById('pitchSlider').value / 100;
let timerRemaining = 0;
let timerTotal = 0;
let timerDeadline = 0;
let timerInterval = null;
let nextWordTime = 0;
let recentWords = [];
let selectedVoice = null;
let availablePrerendered = []; // voices confirmed to have audio files
const activeAudio = new Audio(); // reused for all pre-rendered playback

// ── DOM ──
const app = document.getElementById('app');
const btnStart = document.getElementById('btnStart');
const btnStartLabel = btnStart.querySelector('span');
const currentWordEl = document.getElementById('currentWord');
const timerRing = document.getElementById('timerRing');
timerRing.setAttribute('stroke-dasharray', CIRCUMFERENCE);
const timerText = document.getElementById('timerText');
const intervalBar = document.getElementById('intervalBar');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');
const rateSlider = document.getElementById('rateSlider');
const rateLabel = document.getElementById('rateLabel');
const pitchSlider = document.getElementById('pitchSlider');
const pitchLabel = document.getElementById('pitchLabel');

// ── Voice system (pre-rendered audio + TTS fallback) ──
const ttsAvailable = 'speechSynthesis' in window;
let synth = ttsAvailable ? window.speechSynthesis : null;
let ttsUnlocked = false;
let chromePauseWorkaround = null;
let germanVoices = [];
const voiceSelect = document.getElementById('voiceSelect');
const noVoicesHint = document.getElementById('noVoicesHint');
const ttsSettings = document.querySelectorAll('.tts-only');

function isPrerenderedVoice() {
  return voiceSelect.value.startsWith('pre:');
}

function getPrerenderedName() {
  return voiceSelect.value.slice(4); // strip 'pre:' prefix
}

// Keep in sync with scripts/generate_audio.py:make_filename()
function audioFilename(genus, noun) {
  const article = ARTICLE[genus];
  return (article + '_' + noun).toLowerCase().replace(/ /g, '_')
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    + '.opus';
}

function audioUrl(voice, genus, noun) {
  return 'audio/' + voice + '/' + audioFilename(genus, noun);
}

// Probe which pre-rendered voices have audio files by trying to load one
function probeVoice(voice) {
  return new Promise(resolve => {
    const url = audioUrl(voice, words[0][0], words[0][1]);
    const audio = new Audio();
    const cleanup = () => { audio.src = ''; };
    audio.addEventListener('canplaythrough', () => { cleanup(); resolve(voice); }, { once: true });
    audio.addEventListener('error', () => { cleanup(); resolve(null); }, { once: true });
    audio.src = url;
    audio.load();
  });
}

async function detectPrerenderedVoices() {
  const results = await Promise.all(PRERENDERED_VOICES.map(probeVoice));
  availablePrerendered = results.filter(Boolean);
}

function updateTTSSettingsVisibility() {
  const show = !isPrerenderedVoice();
  ttsSettings.forEach(el => { el.style.display = show ? '' : 'none'; });
}

async function loadVoices() {
  await detectPrerenderedVoices();

  voiceSelect.innerHTML = '';

  // Add pre-rendered voices first
  availablePrerendered.forEach(name => {
    const opt = document.createElement('option');
    opt.value = 'pre:' + name;
    opt.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    voiceSelect.appendChild(opt);
  });

  // Add browser TTS voices
  if (ttsAvailable) {
    const voices = synth.getVoices();
    germanVoices = voices.filter(v => v.lang.replace('_', '-').startsWith('de'));
    germanVoices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = 'tts:' + i;
      let label = v.name.replace('Google ', '').replace('Android ', '');
      if (v.localService) label += ' (lokal)';
      opt.textContent = label;
      voiceSelect.appendChild(opt);
    });
  }

  if (voiceSelect.options.length === 0) {
    voiceSelect.innerHTML = '<option value="">Keine Stimme verf\u00fcgbar</option>';
    noVoicesHint.style.display = 'block';
    btnStart.disabled = true;
    return;
  }

  noVoicesHint.style.display = 'none';
  btnStart.disabled = false;

  // Select first pre-rendered voice, or first TTS voice
  voiceSelect.selectedIndex = 0;
  applyVoiceSelection();
}

function applyVoiceSelection() {
  if (isPrerenderedVoice()) {
    selectedVoice = null;
  } else {
    const idx = parseInt(voiceSelect.value.slice(4)); // strip 'tts:'
    selectedVoice = germanVoices[idx] || null;
  }
  updateTTSSettingsVisibility();
}

voiceSelect.addEventListener('change', applyVoiceSelection);

// Load voices: pre-rendered immediately, TTS may arrive async
loadVoices();
if (ttsAvailable && synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = loadVoices;
}

document.getElementById('btnTest').addEventListener('click', () => {
  if (isPrerenderedVoice()) {
    const word = words[Math.floor(Math.random() * Math.min(20, words.length))];
    playPrerendered(word[0], word[1], volume);
  } else if (ttsAvailable) {
    unlockTTS();
    speakTTS('Schlummershuffle', volume);
  }
});

function unlockTTS() {
  if (!ttsAvailable || ttsUnlocked) return;
  const utter = new SpeechSynthesisUtterance('');
  utter.volume = 0;
  utter.lang = 'de-DE';
  if (selectedVoice) utter.voice = selectedVoice;
  synth.speak(utter);
  ttsUnlocked = true;
}

function playPrerendered(genus, noun, vol) {
  activeAudio.pause();
  activeAudio.src = audioUrl(getPrerenderedName(), genus, noun);
  activeAudio.volume = vol;
  activeAudio.play().catch(e => console.error('Audio error:', e));
}

function speakTTS(text, vol) {
  if (!ttsAvailable) return;
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'de-DE';
  if (selectedVoice) utter.voice = selectedVoice;
  utter.rate = speechRate;
  utter.pitch = speechPitch;
  utter.volume = vol;
  utter.onerror = (e) => { console.error('TTS error:', e.error); };
  synth.cancel();
  setTimeout(() => { synth.speak(utter); }, 50);
}

function speak(genus, noun, vol) {
  if (isPrerenderedVoice()) {
    playPrerendered(genus, noun, vol);
  } else {
    const text = ARTICLE[genus] + ' ' + noun;
    speakTTS(text, vol);
  }
}

function startChromePauseWorkaround() {
  stopChromePauseWorkaround();
  if (!ttsAvailable || isPrerenderedVoice()) return;
  chromePauseWorkaround = setInterval(() => {
    if (running && synth.speaking) synth.resume();
  }, 5000);
}
function stopChromePauseWorkaround() {
  if (chromePauseWorkaround) { clearInterval(chromePauseWorkaround); chromePauseWorkaround = null; }
}

// ── Chips ──
function setupChips(containerId, callback) {
  const container = document.getElementById(containerId);
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      container.querySelectorAll('.chip').forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-pressed', 'false');
      });
      chip.classList.add('active');
      chip.setAttribute('aria-pressed', 'true');
      callback(parseInt(chip.dataset.value));
    });
  });
}
setupChips('timerChips', v => { timerMinutes = v; });
setupChips('intervalChips', v => { intervalSeconds = v; });

// ── Sliders ──
function setupSlider(slider, label, callback) {
  slider.addEventListener('input', () => {
    callback(slider.value / 100);
    label.textContent = slider.value + '%';
  });
}
setupSlider(volumeSlider, volumeLabel, v => { volume = v; });
setupSlider(rateSlider, rateLabel, v => { speechRate = v; });
setupSlider(pitchSlider, pitchLabel, v => { speechPitch = v; });

// ── Word selection ──
function pickWord() {
  const last = recentWords.length > 0 ? recentWords[recentWords.length - 1] : null;
  const lastLetter = last ? last[1][0].toLowerCase() : '';
  let pool = words.filter(w => !recentWords.includes(w) && w[1][0].toLowerCase() !== lastLetter);
  if (pool.length === 0) pool = words.filter(w => !recentWords.includes(w));
  if (pool.length === 0) { pool = words; recentWords = []; }
  const entry = pool[Math.floor(Math.random() * pool.length)];
  recentWords.push(entry);
  if (recentWords.length > 50) recentWords.shift();
  return entry;
}

// ── Timer ──
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

function updateTimerDisplay() {
  timerText.textContent = formatTime(timerRemaining);
  const progress = timerTotal > 0 ? timerRemaining / timerTotal : 1;
  timerRing.style.strokeDashoffset = CIRCUMFERENCE * (1 - progress);
}

function getEffectiveVolume() {
  if (timerRemaining <= 60 && timerTotal > 60) return volume * (timerRemaining / 60);
  return volume;
}

// ── Session ──
function showWord() {
  if (!running) return;

  const [genus, noun] = pickWord();
  const article = ARTICLE[genus];
  const display = article + ' ' + noun;
  const effVol = getEffectiveVolume();
  if (effVol > 0.02) speak(genus, noun, effVol);

  currentWordEl.classList.remove('visible');
  currentWordEl.classList.add('fading');

  setTimeout(() => {
    currentWordEl.textContent = display;
    currentWordEl.classList.remove('fading');
    requestAnimationFrame(() => {
      currentWordEl.classList.add('visible');
    });
  }, 300);

  intervalBar.style.transition = 'none';
  intervalBar.style.width = '100%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      intervalBar.style.transition = 'width ' + intervalSeconds + 's linear';
      intervalBar.style.width = '0%';
    });
  });

}

function startSession() {
  running = true;
  app.classList.add('running');
  btnStartLabel.textContent = 'Stoppen';
  btnStart.classList.add('running');

  recentWords = [];

  timerTotal = timerMinutes * 60;
  timerDeadline = Date.now() + timerTotal * 1000;
  timerRemaining = timerTotal;
  updateTimerDisplay();

  startChromePauseWorkaround();

  nextWordTime = Date.now() + 500;
  timerInterval = setInterval(() => {
    const now = Date.now();
    timerRemaining = Math.max(0, Math.round((timerDeadline - now) / 1000));
    updateTimerDisplay();
    if (timerRemaining <= 0) { stopSession(); return; }
    if (now >= nextWordTime) {
      showWord();
      const intervalMs = intervalSeconds * 1000;
      nextWordTime += intervalMs;
      if (nextWordTime <= now) nextWordTime = now + intervalMs;
    }
  }, 1000);

  requestWakeLock();
}

function stopSession() {
  running = false;
  app.classList.remove('running');
  btnStartLabel.textContent = 'Einschlafen';
  btnStart.classList.remove('running');

  activeAudio.pause();
  activeAudio.src = '';
  if (ttsAvailable) synth.cancel();
  stopChromePauseWorkaround();
  clearInterval(timerInterval);
  timerInterval = null;
  nextWordTime = 0;

  currentWordEl.classList.remove('visible');

  releaseWakeLock();
}

function toggleSession() {
  unlockTTS();
  if (running) stopSession();
  else startSession();
}

btnStart.addEventListener('click', toggleSession);

// ── Wake Lock ──
let wakeLock = null;
async function requestWakeLock() {
  if ('wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    } catch (e) { /* ignore */ }
  }
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}
