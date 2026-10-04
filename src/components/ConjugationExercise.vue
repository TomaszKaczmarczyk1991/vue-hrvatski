<template>
  <div
    class="conj-wrapper"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <div class="card">
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
      </div>

      <div class="hint">
        {{ current.pl }}
      </div>

      <div class="divider"></div>

      <div class="prompt">
        <span v-if="current.before">{{ current.before }}</span>

        <input
          ref="inputEl"
          v-model="userAnswer"
          class="blank-input"
          :class="{
            correct: gradeState === 'correct',
            incorrect: gradeState === 'incorrect'
          }"
          :style="{ width: inputWidth }"
          :disabled="checked"
          type="text"
          autocomplete="off"
          spellcheck="false"
          @focus="handleInputFocus"
        />

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
          :disabled="allLettersRevealed"
          @click="revealLetter"
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

      <div
        v-if="checked"
        class="swipe-hint"
      >
        <ArrowUp
          :size="13"
          :stroke-width="2"
        />
        <span>Swipe up — następne zdanie</span>
      </div>
    </div>

    <WordCounter
      :count="pool.length"
      label="form czasownika"
    />

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
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { ArrowUp, Keyboard } from 'lucide-vue-next'

import { conjugationExercises } from '../data/conjugation.js'

import WordCounter from './WordCounter.vue'

const emit = defineEmits(['back'])

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
const revealedCount = ref(0)

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

const allLettersRevealed = computed(() =>
  revealedCount.value >= current.value.answer.length
)

const gradeState = computed(() => {
  if (!checked.value) return null
  return isCorrect.value ? 'correct' : 'incorrect'
})

const inputWidth = computed(() => {
  const length = Math.max(userAnswer.value.length, 4)
  return `${length + 2}ch`
})

function revealLetter() {
  if (checked.value || allLettersRevealed.value) return

  revealedCount.value++
  userAnswer.value = current.value.answer.slice(0, revealedCount.value)

  if (allLettersRevealed.value) {
    checked.value = true
    return
  }

  focusInput()
}

function focusInput() {
  nextTick(() => {
    inputEl.value?.focus()

    const len = inputEl.value?.value?.length ?? 0
    inputEl.value?.setSelectionRange?.(len, len)

    inputEl.value?.scrollIntoView?.({ block: 'center', behavior: 'smooth' })
  })
}

function handleInputFocus(event) {
  setTimeout(() => {
    event.target.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, 300)
}

function checkAnswer() {
  if (checked.value) return
  checked.value = true
}

function resetDeck() {
  deck = shuffle(pool.value)
  currentIndex = 0
  current.value = deck[currentIndex]
  userAnswer.value = ''
  checked.value = false
  revealedCount.value = 0
  focusInput()
}

function selectTense(value) {
  selectedTense.value = value
  resetDeck()
}

function nextExercise() {
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
  revealedCount.value = 0

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

  if (event.key === 'Meta' || event.key === 'Control') {
    event.preventDefault()
    revealLetter()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  focusInput()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
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
  width: 460px;
  min-height: 260px;
  padding: 36px;

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

  font-size: 12px;
  font-weight: 600;
  color: #8f8f9d;

  text-transform: uppercase;
  letter-spacing: 1.5px;
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
  margin: 0 2px;

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
  margin-top: 16px;

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
  .card {
    width: calc(100% - 32px);
    padding: 28px 20px;
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
}
</style>