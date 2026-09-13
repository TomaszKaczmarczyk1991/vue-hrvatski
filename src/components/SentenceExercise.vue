<template>
  <div
    class="sentence-wrapper"
    @click="closeTooltip"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <div class="card">
      <div class="category">
        {{ current.category }}
      </div>

      <div class="hint">
        {{ hintText }}
      </div>

      <div class="divider"></div>

      <div class="prompt">
        <template v-for="(item, i) in promptItems" :key="i">
          <span
            v-if="item.type === 'space'"
          >&nbsp;</span>

          <input
            v-else-if="item.type === 'blank'"
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
          />

          <span
            v-else
            class="word"
            :class="{ 'tooltip-active': activeTooltip === i }"
            @click.stop="toggleTooltip(i, item.token[hintLang])"
          >
            {{ item.token[promptLang] }}

            <span
              v-if="activeTooltip === i"
              class="word-tooltip"
            >
              {{ item.token[hintLang] }}
            </span>
          </span>
        </template>
      </div>

      <div
        v-if="gradeState"
        class="feedback"
        :class="gradeState"
      >
        <span v-if="gradeState === 'correct'">✓ Poprawnie!</span>
        <span v-else>✗ Poprawna odpowiedź: {{ correctAnswer }}</span>
      </div>

      <div class="actions">
        <button
          v-if="!checked"
          class="action-button secondary"
          @click="skipSentence"
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
          @click="checked ? nextSentence() : checkAnswer()"
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
      :count="sentences.length"
      label="zdań w bazie danych"
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
          <kbd>Enter</kbd>
          <span>Sprawdź / Dalej</span>
        </div>

        <div class="shortcut">
          <kbd>Esc</kbd>
          <span>Menu</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import { ArrowUp, Keyboard } from 'lucide-vue-next'

import { sentences } from '../data/sentences.js'

import WordCounter from './WordCounter.vue'

const emit = defineEmits(['back'])

const props = defineProps({
  mode: {
    type: String,
    required: true
  }
})

function shuffle(array) {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

// mode 'hr-pl' -> pokazujemy zdanie HR z luką, hint po PL
// mode 'pl-hr' -> pokazujemy zdanie PL z luką, hint po HR
const promptLang = computed(() => (props.mode === 'hr-pl' ? 'hr' : 'pl'))
const hintLang = computed(() => (props.mode === 'hr-pl' ? 'pl' : 'hr'))

let deck = shuffle(sentences)
let currentIndex = 0

const current = ref(deck[currentIndex])
const userAnswer = ref('')
const checked = ref(false)
const inputEl = ref(null)
const revealedCount = ref(0)
const activeTooltip = ref(null)

let pointerStartY = 0
let pointerStartX = 0

function joinTokens(tokens, lang) {
  return tokens.reduce((acc, token, i) => {
    const text = token[lang]
    if (i === 0) return text
    return token.punct ? acc + text : `${acc} ${text}`
  }, '')
}

function normalize(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/^[.,!?;:„”"']+/, '')
    .replace(/[.,!?;:„”"']+$/, '')
}

const blankToken = computed(() =>
  current.value.tokens.find((t) => t.blank)
)

const correctAnswer = computed(() => blankToken.value[promptLang.value])

const hintText = computed(() =>
  joinTokens(current.value.tokens, hintLang.value)
)

// buduje listę elementów do renderu z odpowiednim odstępem
// (bez spacji przed tokenami interpunkcyjnymi)
const promptItems = computed(() => {
  const items = []

  current.value.tokens.forEach((token, i) => {
    if (i > 0 && !token.punct) {
      items.push({ type: 'space' })
    }

    if (token.blank) {
      items.push({ type: 'blank', token })
    } else {
      items.push({ type: 'word', token })
    }
  })

  return items
})

const isCorrect = computed(() =>
  normalize(userAnswer.value) === normalize(correctAnswer.value)
)

const allLettersRevealed = computed(() =>
  revealedCount.value >= correctAnswer.value.length
)

const gradeState = computed(() => {
  if (!checked.value) return null
  return isCorrect.value ? 'correct' : 'incorrect'
})

// Szerokość pola rośnie wraz z wpisywanym tekstem (w jednostkach ch),
// więc dłuższe słowa nie są ucinane
const inputWidth = computed(() => {
  const length = Math.max(userAnswer.value.length, 4)
  return `${length + 2}ch`
})

function toggleTooltip(index) {
  activeTooltip.value = activeTooltip.value === index ? null : index
}

function closeTooltip() {
  activeTooltip.value = null
}

function revealLetter() {
  if (allLettersRevealed.value) return

  revealedCount.value++
  userAnswer.value = correctAnswer.value.slice(0, revealedCount.value)

  // Jeśli właśnie odsłoniliśmy ostatnią literę, słowo jest już
  // ze 100% pewnością poprawne — nie ma sensu prosić o "Sprawdź",
  // od razu zaliczamy i pokazujemy "Dalej"
  if (allLettersRevealed.value) {
    checked.value = true
    return
  }

  focusInput()
}

function focusInput() {
  nextTick(() => {
    const el = Array.isArray(inputEl.value) ? inputEl.value[0] : inputEl.value
    el?.focus()

    // kursor na koniec wpisanego tekstu, a nie na początek
    const len = el?.value?.length ?? 0
    el?.setSelectionRange?.(len, len)
  })
}

function checkAnswer() {
  if (checked.value) return
  checked.value = true
}

function nextSentence() {
  currentIndex++

  if (currentIndex >= deck.length) {
    const last = current.value

    do {
      deck = shuffle(sentences)
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
  activeTooltip.value = null

  focusInput()
}

function skipSentence() {
  nextSentence()
}

function handlePointerDown(event) {
  pointerStartY = event.clientY
  pointerStartX = event.clientX
}

function handlePointerUp(event) {
  // Swipe działa tylko po sprawdzeniu odpowiedzi —
  // wcześniej użytkownik może dotykać ekranu, żeby edytować input
  if (!checked.value) return

  const deltaY = pointerStartY - event.clientY
  const deltaX = Math.abs(pointerStartX - event.clientX)

  // Swipe up
  if (deltaY > 70 && deltaY > deltaX) {
    nextSentence()
  }
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    event.preventDefault()

    if (checked.value) {
      nextSentence()
    } else {
      checkAnswer()
    }
  }

  if (event.key === 'Escape') {
    event.preventDefault()
    emit('back')
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
.sentence-wrapper {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;

  touch-action: none;
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

  font-size: 20px;
  font-weight: 600;
  color: #f5f5f7;
  line-height: 1.6;
}

.word {
  position: relative;

  border-bottom: 1px dotted #55555f;
  cursor: help;

  transition: color 0.15s ease, border-color 0.15s ease;
}

.word:hover,
.word.tooltip-active {
  color: #b8b8ff;
  border-color: #b8b8ff;
}

.word-tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);

  padding: 6px 12px;

  background: #2c2c34;
  border: 1px solid #44444f;
  border-radius: 8px;

  color: #f5f5f7;

  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);

  z-index: 10;

  animation: tooltip-in 0.15s ease-out;
}

.word-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  border: 5px solid transparent;
  border-top-color: #44444f;
}

@keyframes tooltip-in {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(4px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Na desktopie hover pokazuje tooltip bez potrzeby klikania */
@media (hover: hover) and (pointer: fine) {
  .word:hover .word-tooltip {
    display: block;
  }
}

.blank-input {
  min-width: 60px;
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
  gap: 8px;

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
  display: flex;
  align-items: center;
  gap: 16px;
}

.shortcut {
  display: flex;
  align-items: center;
  gap: 7px;

  font-size: 12px;
  color: #6f6f7b;
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

/* Legenda klawiszowa pokazuje się TYLKO, gdy jest prawdziwa mysz —
   nie zależy to od szerokości ekranu, więc działa poprawnie też
   na tabletach/telefonach w orientacji poziomej */
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
    width: calc(100vw - 32px);
    padding: 28px 20px;
  }

  .prompt {
    font-size: 17px;
  }

  .blank-input {
    min-width: 50px;
    font-size: 17px;
  }

  .action-button {
    padding: 9px 18px;
    font-size: 13px;
  }
}
</style>