const allCategories = Object.keys(words);

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
let wordTimeout = null;
let recentWords = [];
let recentCategories = [];
let selectedVoice = null;

// ── DOM ──
const app = document.getElementById('app');
const btnStart = document.getElementById('btnStart');
const currentWordEl = document.getElementById('currentWord');
const categoryLabelEl = document.getElementById('categoryLabel');
const timerRing = document.getElementById('timerRing');
const timerText = document.getElementById('timerText');
const intervalBar = document.getElementById('intervalBar');
const volumeSlider = document.getElementById('volumeSlider');
const volumeLabel = document.getElementById('volumeLabel');
const rateSlider = document.getElementById('rateSlider');
const rateLabel = document.getElementById('rateLabel');
const pitchSlider = document.getElementById('pitchSlider');
const pitchLabel = document.getElementById('pitchLabel');

// ── TTS ──
const ttsAvailable = 'speechSynthesis' in window;
let synth = ttsAvailable ? window.speechSynthesis : null;
let ttsUnlocked = false;
let chromePauseWorkaround = null;
let germanVoices = [];
const voiceSelect = document.getElementById('voiceSelect');
const noVoicesHint = document.getElementById('noVoicesHint');

if (!ttsAvailable) {
  btnStart.disabled = true;
  btnStart.style.opacity = '0.5';
  btnStart.style.cursor = 'not-allowed';
  const warning = document.createElement('div');
  warning.className = 'tts-warning';
  warning.textContent = 'Dein Browser unterst\u00fctzt keine Sprachausgabe (Text-to-Speech). Bitte verwende Chrome, Edge oder Safari.';
  btnStart.parentNode.insertBefore(warning, btnStart);
  voiceSelect.innerHTML = '<option value="">Nicht verf\u00fcgbar</option>';
  voiceSelect.disabled = true;
}

function loadVoices() {
  if (!ttsAvailable) return;
  const voices = synth.getVoices();
  germanVoices = voices.filter(v => v.lang.replace('_', '-').startsWith('de'));

  voiceSelect.innerHTML = '';
  if (germanVoices.length === 0) {
    voiceSelect.innerHTML = '<option value="">Keine Stimme gefunden</option>';
    noVoicesHint.style.display = 'block';
    selectedVoice = null;
    return;
  }
  noVoicesHint.style.display = 'none';
  germanVoices.forEach((v, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    let label = v.name.replace('Google ', '').replace('Android ', '');
    if (v.localService) label += ' (lokal)';
    opt.textContent = label;
    voiceSelect.appendChild(opt);
  });
  selectedVoice = germanVoices[0];
}

if (ttsAvailable) {
  if (synth.onvoiceschanged !== undefined) synth.onvoiceschanged = loadVoices;
  loadVoices();
}

voiceSelect.addEventListener('change', () => {
  const idx = parseInt(voiceSelect.value);
  if (!isNaN(idx) && germanVoices[idx]) selectedVoice = germanVoices[idx];
});

document.getElementById('btnTest').addEventListener('click', () => {
  if (!ttsAvailable) return;
  unlockTTS();
  speak('Schlummershuffle', volume);
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

function speak(text, vol) {
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

function startChromePauseWorkaround() {
  stopChromePauseWorkaround();
  if (!ttsAvailable) return;
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
volumeSlider.addEventListener('input', () => {
  volume = volumeSlider.value / 100;
  volumeLabel.textContent = volumeSlider.value + '%';
});
rateSlider.addEventListener('input', () => {
  speechRate = rateSlider.value / 100;
  rateLabel.textContent = rateSlider.value + '%';
});
pitchSlider.addEventListener('input', () => {
  speechPitch = pitchSlider.value / 100;
  pitchLabel.textContent = pitchSlider.value + '%';
});

// ── Word selection ──
function pickWord() {
  let availCats = allCategories.filter(c => !recentCategories.includes(c));
  if (availCats.length === 0) availCats = allCategories;
  const cat = availCats[Math.floor(Math.random() * availCats.length)];

  const lastWord = recentWords.length > 0 ? recentWords[recentWords.length - 1] : '';
  const lastLetter = lastWord ? lastWord[0].toLowerCase() : '';
  let pool = words[cat].filter(w => !recentWords.includes(w) && w[0].toLowerCase() !== lastLetter);
  if (pool.length === 0) pool = words[cat].filter(w => !recentWords.includes(w));
  if (pool.length === 0) { pool = words[cat]; recentWords = []; }
  const word = pool[Math.floor(Math.random() * pool.length)];

  recentWords.push(word);
  if (recentWords.length > 50) recentWords.shift();
  recentCategories.push(cat);
  if (recentCategories.length > 3) recentCategories.shift();

  return { word, category: cat };
}

// ── Timer ──
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return m + ':' + String(s).padStart(2, '0');
}

function updateTimerDisplay() {
  timerText.textContent = formatTime(timerRemaining);
  const circumference = 2 * Math.PI * 64; // 402.12
  const progress = timerTotal > 0 ? timerRemaining / timerTotal : 1;
  timerRing.style.strokeDashoffset = circumference * (1 - progress);
}

function getEffectiveVolume() {
  if (timerRemaining <= 60 && timerTotal > 60) return volume * (timerRemaining / 60);
  return volume;
}

// ── Session ──
function showWord() {
  if (!running) return;

  const { word, category } = pickWord();
  const effVol = getEffectiveVolume();
  if (effVol > 0.02) speak(word, effVol);

  currentWordEl.classList.remove('visible');
  currentWordEl.classList.add('fading');
  categoryLabelEl.classList.remove('visible');

  setTimeout(() => {
    currentWordEl.textContent = word;
    categoryLabelEl.textContent = category;
    currentWordEl.classList.remove('fading');
    requestAnimationFrame(() => {
      currentWordEl.classList.add('visible');
      categoryLabelEl.classList.add('visible');
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

  wordTimeout = setTimeout(showWord, intervalSeconds * 1000);
}

function startSession() {
  running = true;
  app.classList.add('running');
  btnStart.textContent = 'Stoppen';
  btnStart.classList.add('running');

  recentWords = [];
  recentCategories = [];

  timerTotal = timerMinutes * 60;
  timerDeadline = Date.now() + timerTotal * 1000;
  timerRemaining = timerTotal;
  updateTimerDisplay();

  startChromePauseWorkaround();

  timerInterval = setInterval(() => {
    timerRemaining = Math.max(0, Math.round((timerDeadline - Date.now()) / 1000));
    updateTimerDisplay();
    if (timerRemaining <= 0) stopSession();
  }, 1000);

  wordTimeout = setTimeout(showWord, 1500);

  requestWakeLock();
}

function stopSession() {
  running = false;
  app.classList.remove('running');
  btnStart.textContent = 'Einschlafen';
  btnStart.classList.remove('running');

  if (ttsAvailable) synth.cancel();
  stopChromePauseWorkaround();
  clearInterval(timerInterval);
  clearTimeout(wordTimeout);
  timerInterval = null;
  wordTimeout = null;

  currentWordEl.classList.remove('visible');
  categoryLabelEl.classList.remove('visible');

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
