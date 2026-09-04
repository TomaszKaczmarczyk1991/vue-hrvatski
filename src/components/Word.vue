<template>
  <div
    class="word-wrapper"
    @pointerdown="handlePointerDown"
    @pointerup="handlePointerUp"
  >
    <div
      class="card"
      @click="handleCardClick"
    >
      <div class="category">
        {{ randomWord.category }}
      </div>

      <div class="word">
        {{ props.mode === 'hr-pl' ? randomWord.hr : randomWord.pl }}
      </div>

      <div class="divider"></div>

      <div class="translation-area">
        <div
          class="translation"
          :class="{ visible: showTranslation }"
        >
          <span v-if="showTranslation">
            {{ props.mode === 'hr-pl' ? randomWord.pl : randomWord.hr }}
          </span>

          <span v-else>
            Kliknij, aby zobaczyć tłumaczenie
          </span>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="interaction-hints">
      <div class="hint">
        <ArrowUp
          :size="15"
          :stroke-width="1.8"
        />
        <span>Swipe up — następne słowo</span>
      </div>

      <div class="hint">
        <MousePointerClick
          :size="15"
          :stroke-width="1.8"
        />
        <span>Kliknij kartę — pokaż tłumaczenie</span>
      </div>
    </div>

    <!-- Desktop -->
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
          <kbd>→</kbd>
          <span>Następne</span>
        </div>

        <div class="shortcut">
          <kbd>Enter</kbd>
          <span>Tłumaczenie</span>
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
import { onMounted, onUnmounted, ref } from 'vue'
import {
  ArrowUp,
  Keyboard,
  MousePointerClick
} from 'lucide-vue-next'
import { words } from '../data/words.js'

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

let deck = shuffle(words)
let currentIndex = 0

const randomWord = ref(deck[currentIndex])
const showTranslation = ref(false)

let pointerStartY = 0
let pointerStartX = 0
let pointerMoved = false

function getNextWord() {
  currentIndex++

  if (currentIndex >= deck.length) {
    const lastWord = randomWord.value

    do {
      deck = shuffle(words)
    } while (
      deck.length > 1 &&
      deck[0].id === lastWord.id
    )

    currentIndex = 0
  }

  randomWord.value = deck[currentIndex]
  showTranslation.value = false
}

function handlePointerDown(event) {
  pointerStartY = event.clientY
  pointerStartX = event.clientX
  pointerMoved = false
}

function handlePointerUp(event) {
  const deltaY = pointerStartY - event.clientY
  const deltaX = Math.abs(pointerStartX - event.clientX)

  if (Math.abs(deltaY) > 10 || deltaX > 10) {
    pointerMoved = true
  }

  // Swipe up
  if (deltaY > 70 && deltaY > deltaX) {
    getNextWord()
  }
}

function handleCardClick() {
  // Nie pokazuj tłumaczenia po wykonaniu swipe
  if (pointerMoved) {
    pointerMoved = false
    return
  }

  showTranslation.value = true
}

function handleKeydown(event) {
  // Następne słowo
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    getNextWord()
  }

  // Tłumaczenie
  if (event.key === 'Enter') {
    event.preventDefault()
    showTranslation.value = true
  }

  // Powrót do menu
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('back')
  }
}

onMounted(() => {
  window.addEventListener('pointerdown', handlePointerDown)
  window.addEventListener('pointerup', handlePointerUp)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('pointerdown', handlePointerDown)
  window.removeEventListener('pointerup', handlePointerUp)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.word-wrapper {
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
  width: 380px;
  min-height: 240px;
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
  user-select: none;
  cursor: pointer;

  opacity: 0;
  animation: card-in 0.8s ease-out forwards;
  animation-delay: 0.15s;
}

.category {
  margin-bottom: 24px;

  font-size: 12px;
  font-weight: 600;
  color: #8f8f9d;

  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.word {
  font-size: 40px;
  font-weight: 700;
  color: #f5f5f7;
  letter-spacing: -0.5px;
}

.divider {
  width: 45px;
  height: 2px;
  margin: 20px 0;

  background: #44444f;
}

.translation-area {
  width: 280px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.translation {
  font-size: 14px;
  color: #666672;

  opacity: 0.7;
  transform: translateY(3px);

  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.translation.visible {
  font-size: 20px;
  color: #b8b8c2;

  opacity: 1;
  transform: translateY(0);
}

.translation span {
  display: block;
}

/* Mobile hints */
.interaction-hints {
  display: none;
}

/* Desktop keyboard hints */
.keyboard-hints {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin-top: -8px;

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
  .word-wrapper {
    min-height: 100dvh;
    padding: 16px;
  }

  .card {
    width: calc(100vw - 32px);
    min-height: 220px;
    padding: 30px 20px;
  }

  .word {
    font-size: 34px;
  }

  .translation-area {
    width: 260px;
  }

  /* Ukryj legendę klawiatury na mobile */
  .keyboard-hints {
    display: none;
  }

  /* Mobilne podpowiedzi */
  .interaction-hints {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    margin-top: -8px;

    color: #666672;
  }

  .hint {
    display: flex;
    align-items: center;
    gap: 7px;

    font-size: 11px;
    white-space: nowrap;

    opacity: 0.75;
  }
}
</style>