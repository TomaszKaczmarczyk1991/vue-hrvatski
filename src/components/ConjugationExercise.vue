<template>
  <div
    class="conj-wrapper"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <div class="card">
      <CharKeys
        :disabled="checked"
        @insert="insertChar"
      />

      <div class="tense-tabs">
        <button
          v-for="t in tenseOptions"
          :key="t.value"
          class="tense-tab"
          :class="{ active: selectedTense === t.value }"
          @click="selectTense(t.value)"
        >
          {{ t.label }}
        </button>
      </div>

      <div class="category">
        {{ current.infinitive }}

        <span
          class="streak"
          :class="{ active: streak > 0 }"
          title="Seria poprawnych odpowiedzi"
        >
          <span class="streak-icon">🔥</span>
          <span
            :key="streak"
            class="streak-count"
            :class="{ pop: streak > 0 }"
          >{{ streak }}</span>
        </span>
      </div>

      <div class="hint">
        {{ current.pl }}
      </div>

      <div class="divider"></div>

      <div class="prompt">
        <span v-if="current.before">{{ current.before }}</span>

        <span class="blank-wrap">
          <input
            ref="inputEl"
            v-model="userAnswer"
            class="blank-input"
            :class="{
              correct: gradeState === 'correct',
              incorrect: gradeState === 'incorrect',
              hinting: hint
            }"
            :style="{ width: inputWidth }"
            :disabled="checked"
            :readonly="hintBusy"
            type="text"
            autocomplete="off"
            spellcheck="false"
            @focus="handleInputFocus"
          />

          <span
            v-if="hint"
            class="blank-input blank-overlay"
            aria-hidden="true"
          >
            <HintText v-bind="hint" />
          </span>
        </span>

        <span v-if="current.after">{{ current.after }}</span>
      </div>

      <div
        v-if="gradeState"
        class="feedback"
        :class="gradeState"
      >
        <span v-if="gradeState === 'correct'">✓ Poprawnie!</span>
        <span v-else>✗ Poprawna odpowiedź: {{ current.answer }}</span>
      </div>

      <div class="actions">
        <button
          v-if="!checked"
          class="action-button secondary"
          @click="skipExercise"
        >
          Pomiń
        </button>

        <button
          v-if="!checked"
          class="action-button hint-button"
          :disabled="!canHint"
          @click="revealHint"
        >
          💡 Podpowiedz literę
        </button>

        <button
          class="action-button"
          @click="checked ? nextExercise() : checkAnswer()"
        >
          {{ checked ? 'Dalej →' : 'Sprawdź' }}
        </button>
      </div>
    </div>

    <WordCounter
      :count="pool.length"
      label="form czasownika"
    />

    <div class="swipe-hint">
      <ArrowUp
        :size="13"
        :stroke-width="2"
      />
      <span>Swipe up — następne zdanie</span>
    </div>

    <div class="keyboard-hints">
      <div class="keyboard-title">
        <Keyboard
          :size="14"
          :stroke-width="1.8"
        />
        <span>Skróty klawiszowe</span>
      </div>

      <div class="keyboard-shortcuts">
        <div class="shortcut">
          <div class="shortcut-keys">
            <kbd>Enter</kbd>
          </div>
          <span class="shortcut-label">Sprawdź / Dalej</span>
        </div>

        <div class="shortcut">
          <div class="shortcut-keys">
            <kbd>⌘</kbd>
            <span class="key-sep">/</span>
            <kbd>Ctrl</kbd>
          </div>
          <span class="shortcut-label">Podpowiedz literę</span>
        </div>

        <div class="shortcut">
          <div class="shortcut-keys">
            <kbd>Esc</kbd>
          </div>
          <span class="shortcut-label">Menu</span>
        </div>
      </div>
    </div>

    <div
      v-if="comboValue"
      :key="comboKey"
      class="combo-banner"
      aria-live="polite"
    >
      <div class="combo-title">{{ comboTitle }}</div>
      <div class="combo-subtitle">{{ comboValue }} točnih odgovora zaredom!</div>
    </div>

    <Confetti ref="confettiRef" />
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { ArrowUp, Keyboard } from 'lucide-vue-next'

import { conjugationExercises } from '../data/conjugation.js'

import WordCounter from './WordCounter.vue'
import Confetti from './Confetti.vue'
import CharKeys from './CharKeys.vue'
import HintText from './HintText.vue'
import { useHintLetter } from '../composables/useHintLetter.js'

const emit = defineEmits(['back'])

// Co ile poprawnych odpowiedzi z rzędu pokazujemy gratulacje i konfetti
const STREAK_MILESTONE = 5
const COMBO_VISIBLE_MS = 1800

// Napisy gratulacyjne, od najniższego poziomu. Seria 5 -> pierwszy napis,
// 10 -> drugi itd. Powyżej ostatniego poziomu zostaje ostatni napis.
const COMBO_TITLES = [
  'Svaka čast!', // 5
  'Tako se to radi!', // 10
  'Fenomenalno!', // 15
  'Majstorski!' // 20 i więcej
]

function comboTitleFor(streakValue) {
  const level = Math.floor(streakValue / STREAK_MILESTONE) - 1
  return COMBO_TITLES[Math.min(level, COMBO_TITLES.length - 1)]
}

const tenseOptions = [
  { value: 'all', label: 'Wszystkie' },
  { value: 'prezent', label: 'Prezent' },
  { value: 'perfekt', label: 'Perfekt' },
  { value: 'futur', label: 'Futur I' }
]

const selectedTense = ref('all')

function shuffle(array) {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

const pool = computed(() => {
  const filtered = selectedTense.value === 'all'
    ? conjugationExercises
    : conjugationExercises.filter((e) => e.tense === selectedTense.value)

  return filtered.length ? filtered : conjugationExercises
})

let deck = shuffle(pool.value)
let currentIndex = 0

const current = ref(deck[currentIndex])
const userAnswer = ref('')
const checked = ref(false)
const inputEl = ref(null)

const streak = ref(0)
const confettiRef = ref(null)

// Baner gratulacji: wartość serii (5, 10, 15...) albo null, gdy ukryty.
// comboKey wymusza ponowne odtworzenie animacji przy kolejnym osiągnięciu.
const comboValue = ref(null)
const comboTitle = ref('')
const comboKey = ref(0)
let comboTimer = null

let pointerStartY = 0
let pointerStartX = 0

function normalize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/^[.,!?;:„”"']+/, '')
    .replace(/[.,!?;:„”"']+$/, '')
}

const isCorrect = computed(() =>
  normalize(userAnswer.value) === normalize(current.value.answer)
)

const gradeState = computed(() => {
  if (!checked.value) return null
  return isCorrect.value ? 'correct' : 'incorrect'
})

const correctAnswer = computed(() => current.value.answer)

// Podpowiedź litery: zachowuje poprawny początek wpisanego tekstu, błędne
// litery pokazuje na czerwono i usuwa, a następną literę ujawnia efektem
// fade-in (szczegóły w composables/useHintLetter.js)
const {
  hint,
  busy: hintBusy,
  canHint,
  revealHint,
  finishHint
} = useHintLetter({
  userAnswer,
  correctAnswer,
  locked: checked,
  // Podpowiedź dokończyła całą formę: sprawdzamy ją automatycznie,
  // ale taka odpowiedź nie liczy się do serii
  onComplete: () => {
    checked.value = true
    streak.value = 0
  },
  onSettled: () => focusInput()
})

const inputWidth = computed(() => {
  const length = Math.max(userAnswer.value.length, 4)
  return `${length + 2}ch`
})

function showCombo(value) {
  if (comboTimer) clearTimeout(comboTimer)

  comboValue.value = value
  comboTitle.value = comboTitleFor(value)
  comboKey.value++

  comboTimer = setTimeout(() => {
    comboValue.value = null
    comboTimer = null
  }, COMBO_VISIBLE_MS)
}

// Zlicza serię poprawnych odpowiedzi. Na pełnych wielokrotnościach
// STREAK_MILESTONE (5, 10, 15...) pokazuje baner i odpala konfetti.
function registerResult(correct) {
  if (!correct) {
    streak.value = 0
    return
  }

  streak.value++

  if (streak.value % STREAK_MILESTONE === 0) {
    showCombo(streak.value)
    confettiRef.value?.fire()
  }
}

// Wstawia znak (č ć đ š ž) w miejscu kursora w polu odpowiedzi
function insertChar(char) {
  if (checked.value || hintBusy.value) return

  const el = inputEl.value
  if (!el) return

  const value = userAnswer.value
  const start = el.selectionStart ?? value.length
  const end = el.selectionEnd ?? start

  userAnswer.value = value.slice(0, start) + char + value.slice(end)

  // Po aktualizacji pola przywracamy fokus i ustawiamy kursor tuż za
  // wstawionym znakiem, żeby można było pisać dalej bez klikania
  nextTick(() => {
    el.focus()

    const position = start + char.length
    el.setSelectionRange?.(position, position)
  })
}

function focusInput() {
  nextTick(() => {
    inputEl.value?.focus()

    const len = inputEl.value?.value?.length ?? 0
    inputEl.value?.setSelectionRange?.(len, len)

    // Na mobile klawiatura ekranowa potrafi przysłonić input —
    // wymuszamy przewinięcie tak, by pole zostało widoczne nad nią
    inputEl.value?.scrollIntoView?.({ block: 'center', behavior: 'smooth' })
  })
}

function handleInputFocus(event) {
  setTimeout(() => {
    event.target.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, 300)
}

function checkAnswer() {
  // Trwający efekt podpowiedzi kończymy od razu
  finishHint()

  if (checked.value) return

  checked.value = true
  registerResult(isCorrect.value)
}

function resetDeck() {
  finishHint()

  deck = shuffle(pool.value)
  currentIndex = 0
  current.value = deck[currentIndex]
  userAnswer.value = ''
  checked.value = false
  focusInput()
}

function selectTense(value) {
  selectedTense.value = value
  resetDeck()
}

function nextExercise() {
  finishHint()

  currentIndex++

  if (currentIndex >= deck.length) {
    const last = current.value

    do {
      deck = shuffle(pool.value)
    } while (
      deck.length > 1 &&
      deck[0].id === last.id
    )

    currentIndex = 0
  }

  current.value = deck[currentIndex]
  userAnswer.value = ''
  checked.value = false

  focusInput()
}

function skipExercise() {
  nextExercise()
}

function handlePointerDown(event) {
  pointerStartY = event.clientY
  pointerStartX = event.clientX
}

function handlePointerUp(event) {
  // Swipe działa zawsze — przed sprawdzeniem odpowiedzi
  // działa jak przycisk "Pomiń"
  const deltaY = pointerStartY - event.clientY
  const deltaX = Math.abs(pointerStartX - event.clientX)

  if (deltaY > 70 && deltaY > deltaX) {
    nextExercise()
  }
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    event.preventDefault()

    if (checked.value) {
      nextExercise()
    } else {
      checkAnswer()
    }
    return
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    emit('back')
    return
  }

  // Cmd (Mac) / Ctrl (Windows) — Podpowiedz literę
  if (event.key === 'Meta' || event.key === 'Control') {
    event.preventDefault()
    revealHint()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  focusInput()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)

  if (comboTimer) {
    clearTimeout(comboTimer)
    comboTimer = null
  }
})
</script>

<style scoped>
.conj-wrapper {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;

  touch-action: none;
  overflow-x: hidden;
}

.card {
  position: relative;

  width: 460px;
  min-height: 260px;
  padding: 44px 36px 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #1e1e24;
  border: 1px solid #2f2f38;
  border-radius: 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);

  text-align: center;

  opacity: 0;
  animation: card-in 0.8s ease-out forwards;
  animation-delay: 0.15s;
}

.tense-tabs {
  display: flex;
  gap: 6px;
  margin-bottom: 18px;
}

.tense-tab {
  padding: 5px 12px;

  border: 1px solid #383842;
  border-radius: 14px;

  background: #24242c;
  color: #83838d;

  font-family: inherit;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.tense-tab.active {
  background: rgba(184, 184, 255, 0.15);
  border-color: rgba(184, 184, 255, 0.5);
  color: #d4d4ff;
}

.tense-tab:hover {
  border-color: #55555f;
}

.category {
  margin-bottom: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 12px;
  font-weight: 600;
  color: #8f8f9d;

  text-transform: uppercase;
  letter-spacing: 1.5px;
}

/* Licznik serii: sama ikonka + cyfra, bez ramki i podpisu */
.streak {
  display: inline-flex;
  align-items: center;
  gap: 3px;

  color: #55555f;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0;
  text-transform: none;

  transition: color 0.3s ease;
}

.streak-icon {
  font-size: 12px;

  opacity: 0.45;
  filter: grayscale(1);

  transition: opacity 0.3s ease, filter 0.3s ease;
}

.streak.active {
  color: #e0c88a;
}

.streak.active .streak-icon {
  opacity: 1;
  filter: none;
}

.streak-count {
  min-width: 8px;

  display: inline-block;
}

.streak-count.pop {
  animation: streak-pop 0.35s ease-out;
}

@keyframes streak-pop {
  0% {
    transform: scale(0.6);
    opacity: 0.4;
  }

  60% {
    transform: scale(1.35);
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Baner gratulacji — wyskakuje na środku ekranu i znika */
.combo-banner {
  position: fixed;
  top: 22%;
  left: 50%;

  transform: translateX(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  text-align: center;
  white-space: nowrap;

  pointer-events: none;
  z-index: 999;

  animation: combo-pop 1.8s ease-out forwards;
}

.combo-title {
  color: #fcd34d;

  font-size: 46px;
  font-weight: 900;
  font-style: italic;
  letter-spacing: 1px;

  text-shadow:
    0 0 18px rgba(252, 211, 77, 0.55),
    0 4px 0 rgba(0, 0, 0, 0.35);
}

.combo-subtitle {
  color: #f5f5f7;

  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;

  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

@keyframes combo-pop {
  0% {
    transform: translateX(-50%) scale(0.4) rotate(-6deg);
    opacity: 0;
  }

  12% {
    transform: translateX(-50%) scale(1.25) rotate(-3deg);
    opacity: 1;
  }

  22% {
    transform: translateX(-50%) scale(1) rotate(-3deg);
  }

  75% {
    transform: translateX(-50%) scale(1) rotate(-3deg);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-24px) scale(1) rotate(-3deg);
    opacity: 0;
  }
}

.hint {
  font-size: 15px;
  color: #8f8f9d;
  line-height: 1.5;
}

.divider {
  width: 45px;
  height: 2px;
  margin: 20px 0;

  background: #44444f;
}

.prompt {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px;

  font-size: 20px;
  font-weight: 600;
  color: #f5f5f7;
  line-height: 1.6;
}

.blank-input {
  min-width: 70px;
  max-width: 100%;
  padding: 4px 10px;
  margin: 0;

  background: #24242c;
  border: none;
  border-bottom: 2px solid #44444f;

  color: #f5f5f7;

  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  text-align: center;

  outline: none;

  transition: border-color 0.2s ease, width 0.15s ease;
}

.blank-input:focus {
  border-bottom-color: #8f8f9d;
}

.blank-input.correct {
  border-bottom-color: #4ade80;
  color: #4ade80;
}

.blank-input.incorrect {
  border-bottom-color: #f87171;
  color: #f87171;
}

/* Podpowiedź litery: nakładka z kolorowymi fragmentami tekstu leży dokładnie
   na polu (ta sama czcionka i marginesy), a tekst pola jest na ten czas
   przezroczysty */
.blank-wrap {
  position: relative;

  display: inline-flex;

  max-width: 100%;
  margin: 0 2px;
}

.blank-input.hinting {
  color: transparent;
  caret-color: transparent;
}

.blank-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 0;
  margin: 0;

  overflow: hidden;
  pointer-events: none;
  white-space: pre;

  background: transparent;
  border-bottom-color: transparent;
}

.feedback {
  margin-top: 18px;

  font-size: 14px;
  font-weight: 600;
}

.feedback.correct {
  color: #4ade80;
}

.feedback.incorrect {
  color: #f87171;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.action-button {
  padding: 10px 24px;

  border: 1px solid #2f2f38;
  border-radius: 12px;

  background: #24242c;
  color: #f5f5f7;

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.action-button:hover {
  background: #2c2c34;
  border-color: #44444f;
}

.action-button:active {
  transform: scale(0.98);
}

.action-button.secondary {
  background: transparent;
  color: #8f8f9d;
}

.action-button.hint-button {
  background: transparent;
  border-color: #3a3a44;
  color: #c9a84c;
}

.action-button.hint-button:hover {
  background: rgba(201, 168, 76, 0.08);
  border-color: #c9a84c;
}

.action-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.action-button:disabled:hover {
  background: transparent;
  border-color: #3a3a44;
}

.swipe-hint {
  display: flex;
  align-items: center;
  gap: 6px;

  color: #666672;

  font-size: 11px;

  opacity: 0.75;
}

.keyboard-hints {
  display: none;

  flex-direction: column;
  align-items: center;
  gap: 12px;

  color: #666672;
}

.keyboard-title {
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 11px;
  font-weight: 500;

  text-transform: uppercase;
  letter-spacing: 0.8px;

  opacity: 0.7;
}

.keyboard-shortcuts {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 14px;
  row-gap: 8px;

  align-items: center;
}

.shortcut {
  display: contents;
}

.shortcut-keys {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
}

.shortcut-label {
  font-size: 12px;
  color: #8f8f9d;
  text-align: left;
  white-space: nowrap;
}

.key-sep {
  color: #4a4a54;
  font-size: 11px;
}

kbd {
  min-width: 26px;
  height: 24px;
  padding: 0 7px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: #24242c;
  border: 1px solid #383842;
  border-bottom-color: #454550;
  border-radius: 6px;

  box-shadow: 0 2px 0 #15151a;

  color: #b8b8c2;

  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
}

@media (hover: hover) and (pointer: fine) {
  .keyboard-hints {
    display: flex;
  }

  .swipe-hint {
    display: none;
  }
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 500px) {
  .conj-wrapper {
    min-height: 100dvh;
    justify-content: flex-start;
    padding-top: 40px;
  }

  .card {
    width: calc(100% - 32px);
    padding: 52px 20px 28px;
  }

  .prompt {
    font-size: 17px;
  }

  .blank-input {
    min-width: 60px;
    font-size: 17px;
  }

  .action-button {
    padding: 9px 18px;
    font-size: 13px;
  }

  .combo-banner {
    top: 18%;
  }

  .combo-title {
    font-size: 30px;
  }

  .combo-subtitle {
    font-size: 15px;
  }
}
</style>