<template>
  <div
    class="menu"
    :class="{ 'skip-intro': skipIntro }"
    @click="skipIntro = true"
  >
    <MainImage />

    <div class="content">
      <Welcome />

      <div class="tabs-frame">
        <div class="category-tabs">
          <button
            class="tab-button"
            :class="{ active: category === 'flashcards' }"
            @click="category = 'flashcards'"
          >
            Słówka
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
            :class="{ active: category === 'grammar' }"
            @click="category = 'grammar'"
          >
            Gramatyka
          </button>

          <button
            class="tab-button"
            :class="{ active: category === 'dictionary' }"
            @click="category = 'dictionary'"
          >
            Słownik
          </button>
        </div>
      </div>

      <!-- Slot o stałej wysokości: w Zdaniach przełącznik trybu,
           w pozostałych zakładkach krótki podpis -->
      <div class="mode-slot">
        <Transition
          name="swap"
          mode="out-in"
        >
          <div
            v-if="category === 'sentences'"
            key="sentences"
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

          <p
            v-else
            :key="category"
            class="mode-caption"
          >
            {{ caption }}
          </p>
        </Transition>
      </div>

      <!-- Slot na przyciski o stałej wysokości (miejsce na dwa przyciski) -->
      <div class="options">
        <Transition
          name="swap"
          mode="out-in"
        >
          <div
            :key="optionsKey"
            class="options-inner"
          >
            <template v-if="category === 'dictionary'">
              <button
                class="option-button"
                aria-label="Otwórz słownik"
                @click="choose()"
              >
                <span>📖</span>
                <span>Otwórz słownik</span>
              </button>
            </template>

            <template v-else-if="category === 'grammar'">
              <button
                class="option-button"
                aria-label="Otwórz zasady gramatyczne"
                @click="chooseGrammar()"
              >
                <span>📚</span>
                <span>Zasady</span>
              </button>

              <button
                class="option-button"
                aria-label="Ćwicz odmianę czasowników"
                @click="chooseConjugation()"
              >
                <span>✍️</span>
                <span>Odmiana czasowników</span>
              </button>
            </template>

            <template v-else>
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
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import Welcome from './Welcome.vue'
import MainImage from './MainImage.vue'

const emit = defineEmits(['select'])

// Wewnętrzna nazwa 'flashcards' zostaje, zmieniła się tylko etykieta w UI
const category = ref('flashcards')
const exerciseType = ref('gaps')
const skipIntro = ref(false)

// Podpisy pod zakładkami (w Zdaniach w tym miejscu jest przełącznik trybu)
const captions = {
  flashcards: 'Wybierz kierunek tłumaczenia',
  grammar: 'Zasady i ćwiczenia z odmiany',
  dictionary: 'Wyszukaj słówko po HR lub PL'
}

const caption = computed(() => captions[category.value] ?? '')

// Słówka i Zdania mają te same przyciski kierunku, więc przy przełączaniu
// między nimi nie odtwarzamy animacji — zmienia się tylko etykieta
const optionsKey = computed(() => {
  if (category.value === 'dictionary') return 'dictionary'
  if (category.value === 'grammar') return 'grammar'
  return 'direction'
})

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

function chooseGrammar() {
  emit('select', { type: 'grammar' })
}

function chooseConjugation() {
  emit('select', { type: 'conjugation' })
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
  max-width: 100%;
  min-width: 0;
  min-height: 560px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 24px;

  cursor: pointer;
}

/* Widoczne "pole" to zdjęcie z MainImage.vue (na desktopie zajmuje 80%
   karty, margines 10% z każdej strony; na telefonie 92%, margines 4%).
   Zawartość ma poziomy padding równy marginesowi zdjęcia plus zapas,
   więc zawsze mieści się w obrębie zdjęcia.
   Odstępy pionowe i między sekcjami skalują się z szerokością ekranu. */
.content {
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 560px;
  padding: clamp(28px, 8vw, 50px) calc(10% + 16px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: clamp(12px, 3.5vw, 20px);

  cursor: default;
}

/* Ramka zakładek jest kontenerem: rozmiary czcionki, paddingi i odstępy
   zakładek liczone są względem jej szerokości (jednostki cqw), więc
   cały rząd skaluje się płynnie i zawsze mieści się w zdjęciu */
.tabs-frame {
  width: 100%;
  min-width: 0;

  container-type: inline-size;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 2.9s;
}

.category-tabs {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;

  gap: 8px;
  gap: clamp(3px, 1.4cqw, 8px);
}

.tab-button {
  flex: 0 1 auto;
  min-width: 0;
  padding: 8px 16px;
  padding: 8px clamp(4px, 2.6cqw, 16px);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 20px;

  background: transparent;
  color: #aaaab4;

  font-family: Inter, system-ui, sans-serif;
  font-size: 12px;
  font-size: clamp(9px, 4.2cqw, 13px);
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

/* Slot trybu: stała wysokość niezależnie od zawartości */
.mode-slot {
  width: 100%;
  min-width: 0;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 3.05s;
}

.exercise-type-tabs {
  max-width: 100%;

  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 6px;
}

.exercise-type-button {
  padding: 5px clamp(8px, 3.4vw, 14px);

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;

  background: transparent;
  color: #83838d;

  font-family: Inter, system-ui, sans-serif;
  font-size: clamp(9.5px, 3vw, 11px);
  font-weight: 600;
  white-space: nowrap;

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

/* Podpis pod zakładkami: biały, z cieniem, żeby był czytelny na zdjęciu */
.mode-caption {
  max-width: 100%;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: #ffffff;

  font-size: clamp(10px, 3.2vw, 12px);
  font-weight: 500;
  text-align: center;

  text-shadow: 0 1px 8px rgba(0, 0, 0, 0.75);
}

/* Slot na przyciski: zawsze miejsce na dwa przyciski, przyciski
   przyklejone do góry, więc pierwszy z nich nigdy się nie przesuwa.
   Wysokość przycisku skaluje się z szerokością ekranu. */
.options {
  --btn-h: clamp(42px, 12vw, 52px);
  --btn-gap: 12px;

  width: 100%;
  min-width: 0;
  min-height: calc(var(--btn-h) * 2 + var(--btn-gap));

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  opacity: 0;
  animation: options-in 0.7s ease forwards;
  animation-delay: 3.2s;
}

.options-inner {
  width: min(240px, 100%);

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--btn-gap);
}

.option-button {
  width: 100%;
  min-width: 0;
  height: var(--btn-h);

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(8px, 3vw, 14px);

  overflow: hidden;
  white-space: nowrap;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 14px;

  background: rgba(20, 20, 24, 0.45);
  backdrop-filter: blur(8px);

  color: #fff;

  font-family: Inter, system-ui, sans-serif;
  font-size: clamp(12px, 3.8vw, 15px);
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

/* Krótkie zanikanie przy zmianie zakładki, bez żadnego przesuwania */
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.14s ease;
}

.swap-enter-from,
.swap-leave-to {
  opacity: 0;
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
.menu.skip-intro .tabs-frame,
.menu.skip-intro .mode-slot,
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

  /* Na telefonie zdjęcie jest większe (margines 4%), więc padding
     poziomy zawartości też jest mniejszy */
  .content {
    min-height: 540px;
    padding-inline: calc(4% + 14px);
  }

  .mode-slot {
    height: 28px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .swap-enter-active,
  .swap-leave-active {
    transition: none;
  }
}
</style>