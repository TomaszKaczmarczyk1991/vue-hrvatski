<template>
  <main class="app">
    <Menu
      v-if="!selectedMode"
      @select="selectMode"
    />

    <Dictionary
      v-else-if="selectedMode === 'dictionary'"
      @back="goBack"
    />

    <SentenceExercise
      v-else-if="isSentenceMode"
      :mode="direction"
      @back="goBack"
    />

    <Word
      v-else
      :mode="selectedMode"
      @back="goBack"
    />

    <BackButton
      v-if="selectedMode"
      @back="goBack"
    />
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

import Menu from './components/Menu.vue'
import Word from './components/Word.vue'
import SentenceExercise from './components/SentenceExercise.vue'
import Dictionary from './components/Dictionary.vue'
import BackButton from './components/BackButton.vue'

const selectedMode = ref(null)

const isSentenceMode = computed(() => selectedMode.value?.startsWith('sentence-'))
const direction = computed(() => selectedMode.value?.replace('sentence-', ''))

function selectMode(mode) {
  selectedMode.value = mode
}

function goBack() {
  selectedMode.value = null
}
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  min-height: 100%;
}

body {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #121216;
  color: #f5f5f7;
}

.app {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
}
</style>