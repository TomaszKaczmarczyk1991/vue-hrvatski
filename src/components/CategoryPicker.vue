<template>
  <div
    class="picker"
    @click="closeOnBackgroundClick"
  >
    <MainImage />

    <div
      class="content"
      @click.stop
    >
      <div class="title">
        {{ kind === 'sentences' ? 'Wybierz kategorie zdań' : 'Wybierz kategorie słówek' }}
      </div>

      <div class="subtitle">
        Zaznaczone kategorie trafią do sesji ćwiczenia
      </div>

      <div class="picker-actions-row">
        <button
          class="link-button"
          @click="selectAll"
        >
          Zaznacz wszystkie
        </button>
        <span class="sep">·</span>
        <button
          class="link-button"
          @click="clearAll"
        >
          Wyczyść
        </button>
      </div>

      <div class="chips">
        <button
          v-for="cat in categoryList"
          :key="cat"
          class="chip"
          :class="{ active: state[cat] }"
          @click="toggle(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <div
        v-if="!anySelected"
        class="warning"
      >
        Wybierz co najmniej jedną kategorię
      </div>

      <button
        class="start-button"
        :disabled="!anySelected"
        @click="start"
      >
        Start →
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive } from 'vue'

import MainImage from './MainImage.vue'

import { words } from '../data/words.js'
import { sentences } from '../data/sentences.js'

const props = defineProps({
  kind: {
    type: String,
    required: true // 'flashcards' | 'sentences'
  }
})

const emit = defineEmits(['start', 'back'])

const categoryList = props.kind === 'sentences'
  ? [...new Set(sentences.map((s) => s.category))]
  : [...new Set(words.map((w) => w.category))]

// Domyślnie wszystko odznaczone — użytkownik świadomie wybiera
const state = reactive(
  Object.fromEntries(categoryList.map((c) => [c, false]))
)

const anySelected = computed(() => categoryList.some((c) => state[c]))

function toggle(cat) {
  state[cat] = !state[cat]
}

function selectAll() {
  categoryList.forEach((c) => { state[c] = true })
}

function clearAll() {
  categoryList.forEach((c) => { state[c] = false })
}

function start() {
  if (!anySelected.value) return
  emit('start', categoryList.filter((c) => state[c]))
}

function closeOnBackgroundClick() {
  // Klik w tło (poza kartą) nic nie robi — zapobiega przypadkowemu
  // zamknięciu przy próbie kliknięcia obok checkboxów
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('back')
  }

  if (event.key === 'Enter') {
    event.preventDefault()
    start()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.picker {
  position: relative;
  width: min(680px, calc(100vw - 32px));
  min-height: 560px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 24px;
}

.content {
  position: relative;
  z-index: 1;

  width: 100%;
  min-height: 560px;
  padding: 50px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 16px;
}

.title {
  color: #fff;

  font-family: Inter, system-ui, sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-align: center;

  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
}

.subtitle {
  margin-top: -8px;

  color: #c8c8d4;

  font-size: 13px;
  text-align: center;

  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

.picker-actions-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.link-button {
  padding: 0;

  border: none;
  background: transparent;

  color: #ffffff;

  font-family: inherit;
  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.6);
}

.link-button:hover {
  text-decoration: underline;
}

.sep {
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;

  max-width: 480px;
  max-height: 220px;
  overflow-y: auto;

  padding: 4px;
}

.chip {
  padding: 7px 16px;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;

  background: rgba(20, 20, 24, 0.45);
  backdrop-filter: blur(6px);

  color: #c8c8d0;

  font-family: inherit;
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.chip.active {
  background: rgba(74, 222, 128, 0.18);
  border-color: rgba(74, 222, 128, 0.5);
  color: #a8f0c0;
}

.chip:hover {
  border-color: rgba(255, 255, 255, 0.4);
}

.warning {
  font-size: 12px;
  color: #f87171;
  text-align: center;
}

.start-button {
  margin-top: 8px;
  padding: 12px 36px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  background: rgba(184, 184, 255, 0.15);
  backdrop-filter: blur(8px);

  color: #fff;

  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.4px;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;
}

.start-button:hover {
  background: rgba(184, 184, 255, 0.28);
  border-color: rgba(255, 255, 255, 0.4);

  transform: translateY(-2px);
}

.start-button:disabled {
  opacity: 0.35;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 500px) {
  .picker {
    width: calc(100vw - 24px);
    min-height: 540px;
    border-radius: 20px;
  }

  .content {
    min-height: 540px;
    padding: 40px 20px;
  }

  .chips {
    max-height: 180px;
  }
}
</style>