<template>
  <div class="word-wrapper">
    <div
      class="card"
      @pointerdown="handlePointerDown"
      @pointerup="handlePointerUp"
    >
      <div class="category">
        {{ randomWord.category }}
      </div>

      <div class="word">
        {{ randomWord.hr }}
      </div>

      <div class="divider"></div>

      <div
        class="translation-area"
        @click="showTranslation = true"
      >
        <div
          class="translation"
          :class="{ visible: showTranslation }"
        >
          <span v-if="showTranslation">
            {{ randomWord.pl }}
          </span>

          <span v-else>
            Kliknij, aby zobaczyć tłumaczenie
          </span>
        </div>
      </div>
    </div>

    <button
      class="next-button"
      @click="getNextWord"
    >
      Następne
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { words } from '../data/words.js'

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

function getNextWord() {
  currentIndex++

  // Koniec talii → tasujemy ponownie
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
}

function handlePointerUp(event) {
  const pointerEndY = event.clientY
  const pointerEndX = event.clientX

  const deltaY = pointerStartY - pointerEndY
  const deltaX = Math.abs(pointerStartX - pointerEndX)

  if (deltaY > 70 && deltaY > deltaX) {
    getNextWord()
  }
}
</script>

<style scoped>
.word-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
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
  touch-action: none;
  cursor: grab;
}

.card:active {
  cursor: grabbing;
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

  cursor: pointer;
}

.translation {
  font-size: 20px;
  color: #b8b8c2;

  opacity: 0.25;
  transform: translateY(3px);

  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.translation.visible {
  opacity: 1;
  transform: translateY(0);
}

.translation:not(.visible) {
  font-size: 14px;
  color: #666672;
}

.translation span {
  display: block;
}

.next-button {
  padding: 12px 28px;

  border: 1px solid #34343e;
  border-radius: 12px;

  background: #24242c;
  color: #f5f5f7;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.15s ease;
}

.next-button:hover {
  background: #2d2d37;
}

.next-button:active {
  transform: scale(0.96);
}

@media (max-width: 500px) {
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
}
</style>