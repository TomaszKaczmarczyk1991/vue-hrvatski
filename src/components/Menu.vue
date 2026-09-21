<template>
  <div
    class="menu"
    :class="{ 'skip-intro': skipIntro }"
    @click="skipIntro = true"
  >
    <MainImage />

    <div class="content">
      <Welcome />

      <div class="category-tabs">
        <button
          class="tab-button"
          :class="{ active: category === 'flashcards' }"
          @click="category = 'flashcards'"
        >
          Fiszki
        </button>

        <button
          class="tab-button"
          :class="{ active: category === 'sentences' }"
          @click="category = 'sentences'"
        >
          Zdania
        </button>

        <button
          class="tab-button"
          :class="{ active: category === 'dictionary' }"
          @click="category = 'dictionary'"
        >
          Słownik
        </button>
      </div>

      <div
        v-if="category === 'sentences'"
        class="exercise-type-tabs"
      >
        <button
          class="exercise-type-button"
          :class="{ active: exerciseType === 'gaps' }"
          @click="exerciseType = 'gaps'"
        >
          Uzupełnij lukę
        </button>

        <button
          class="exercise-type-button"
          :class="{ active: exerciseType === 'full' }"
          @click="exerciseType = 'full'"
        >
          Całe zdanie
        </button>
      </div>

      <div
        v-if="category === 'dictionary'"
        class="options"
      >
        <button
          class="option-button"
          aria-label="Otwórz słownik"
          @click="choose()"
        >
          <span>📖</span>
          <span>Otwórz słownik</span>
        </button>
      </div>

      <div
        v-else
        class="options"
      >
        <button
          class="option-button"
          :aria-label="ariaLabel('hr-pl')"
          @click="choose('hr-pl')"
        >
          <span>🇭🇷</span>
          <span>HR → PL</span>
          <span>🇵🇱</span>
        </button>

        <button
          class="option-button"
          :aria-label="ariaLabel('pl-hr')"
          @click="choose('pl-hr')"
        >
          <span>🇵🇱</span>
          <span>PL → HR</span>
          <span>🇭🇷</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

import Welcome from './Welcome.vue'
import MainImage from './MainImage.vue'

const emit = defineEmits(['select'])

const category = ref('flashcards')
const exerciseType = ref('gaps')
const skipIntro = ref(false)

function choose(direction) {
  if (category.value === 'dictionary') {
    emit('select', { type: 'dictionary' })
    return
  }

  if (category.value === 'sentences') {
    emit('select', {
      type: 'sentences',
      direction,
      exerciseType: exerciseType.value
    })
    return
  }

  emit('select', { type: 'flashcards', direction })
}

function ariaLabel(direction) {
  let action = 'Tłumacz'

  if (category.value === 'sentences') {
    action = exerciseType.value === 'full' ? 'Napisz zdanie' : 'Uzupełnij lukę'
  }

  return direction === 'hr-pl'
    ? `${action} z chorwackiego na polski`
    : `${action} z polskiego na chorwacki`
}

function handleKeydown(event) {
  if (event.key === 'Enter') {
    skipIntro.value = true
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
.menu {
  position: relative;
  width: min(680px, calc(100vw - 32px));
  min-height: 560px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 24px;

  cursor: pointer;
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

  cursor: default;
}

.category-tabs {
  display: flex;
  gap: 8px;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 2.9s;
}

.tab-button {
  padding: 8px 18px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;

  background: transparent;
  color: #aaaab4;

  font-family: Inter, system-ui, sans-serif;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.tab-button.active {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
}

.tab-button:hover {
  border-color: rgba(255, 255, 255, 0.3);
}

.exercise-type-tabs {
  display: flex;
  gap: 6px;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 3.05s;
}

.exercise-type-button {
  padding: 5px 14px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;

  background: transparent;
  color: #83838d;

  font-family: Inter, system-ui, sans-serif;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.exercise-type-button.active {
  background: rgba(184, 184, 255, 0.12);
  border-color: rgba(184, 184, 255, 0.4);
  color: #d4d4ff;
}

.exercise-type-button:hover {
  border-color: rgba(255, 255, 255, 0.25);
}

.options {
  display: flex;
  flex-direction: column;
  gap: 12px;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 3.2s;
}

.option-button {
  width: 240px;
  height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;

  background: rgba(20, 20, 24, 0.45);
  backdrop-filter: blur(8px);

  color: #fff;

  font-family: Inter, system-ui, sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.4px;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.option-button:hover {
  background: rgba(30, 30, 36, 0.65);
  border-color: rgba(255, 255, 255, 0.3);

  transform: translateY(-2px);
}

.option-button:active {
  transform: scale(0.98);
}

@keyframes options-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Pomiń intro — pokaż wszystko od razu, bez animacji */
.menu.skip-intro :deep(.welcome),
.menu.skip-intro :deep(.intro),
.menu.skip-intro :deep(h1),
.menu.skip-intro :deep(.version),
.menu.skip-intro :deep(.description),
.menu.skip-intro .category-tabs,
.menu.skip-intro .exercise-type-tabs,
.menu.skip-intro .options {
  opacity: 1 !important;
  animation: none !important;
  transform: none !important;
}

.menu.skip-intro :deep(.main-image) {
  opacity: 1 !important;
  animation: none !important;
}

@media (max-width: 500px) {
  .menu {
    width: calc(100vw - 24px);
    min-height: 540px;
    border-radius: 20px;
  }

  .content {
    min-height: 540px;
    padding: 40px 20px;
  }

  .tab-button {
    padding: 7px 14px;
    font-size: 12px;
  }

  .option-button {
    width: 230px;
    height: 50px;
    font-size: 14px;
  }
}
</style>