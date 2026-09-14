<template>
  <main class="app">
    <Menu
      v-if="!selection"
      @select="selectMode"
    />

    <Dictionary
      v-else-if="selection.type === 'dictionary'"
      @back="goBack"
    />

    <SentenceExercise
      v-else-if="selection.type === 'sentences'"
      :mode="selection.direction"
      :exercise-type="selection.exerciseType"
      @back="goBack"
    />

    <Word
      v-else
      :mode="selection.direction"
      @back="goBack"
    />

    <BackButton
      v-if="selection"
      @back="goBack"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue'

import Menu from './components/Menu.vue'
import Word from './components/Word.vue'
import SentenceExercise from './components/SentenceExercise.vue'
import Dictionary from './components/Dictionary.vue'
import BackButton from './components/BackButton.vue'

const selection = ref(null)

function selectMode(payload) {
  selection.value = payload
}

function goBack() {
  selection.value = null
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