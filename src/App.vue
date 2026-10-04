<template>
  <main class="app">
    <Menu
      v-if="stage === 'menu'"
      @select="selectMode"
    />

    <Dictionary
      v-else-if="stage === 'dictionary'"
      @back="goBackToMenu"
    />

    <Grammar
      v-else-if="stage === 'grammar'"
      @back="goBackToMenu"
    />

    <ConjugationExercise
      v-else-if="stage === 'conjugation'"
      @back="goBackToMenu"
    />

    <CategoryPicker
      v-else-if="stage === 'categories'"
      :kind="directionInfo.type"
      @start="startExercise"
      @back="goBackToMenu"
    />

    <SentenceExercise
      v-else-if="stage === 'exercise' && directionInfo.type === 'sentences'"
      :mode="directionInfo.direction"
      :exercise-type="directionInfo.exerciseType"
      :categories="categories"
      @back="goBackToMenu"
    />

    <Word
      v-else-if="stage === 'exercise'"
      :mode="directionInfo.direction"
      :categories="categories"
      @back="goBackToMenu"
    />

    <BackButton
      v-if="stage !== 'menu'"
      @back="goBackToMenu"
    />
  </main>
</template>

<script setup>
import { ref } from 'vue'

import Menu from './components/Menu.vue'
import Word from './components/Word.vue'
import SentenceExercise from './components/SentenceExercise.vue'
import Dictionary from './components/Dictionary.vue'
import Grammar from './components/Grammar.vue'
import ConjugationExercise from './components/ConjugationExercise.vue'
import CategoryPicker from './components/CategoryPicker.vue'
import BackButton from './components/BackButton.vue'

const stage = ref('menu') // 'menu' | 'dictionary' | 'grammar' | 'conjugation' | 'categories' | 'exercise'
const directionInfo = ref(null) // { type: 'flashcards'|'sentences', direction, exerciseType? }
const categories = ref(null)

function selectMode(payload) {
  if (payload.type === 'dictionary') {
    stage.value = 'dictionary'
    return
  }

  if (payload.type === 'grammar') {
    stage.value = 'grammar'
    return
  }

  if (payload.type === 'conjugation') {
    stage.value = 'conjugation'
    return
  }

  directionInfo.value = payload
  stage.value = 'categories'
}

function startExercise(selectedCategories) {
  categories.value = selectedCategories
  stage.value = 'exercise'
}

function goBackToMenu() {
  stage.value = 'menu'
  directionInfo.value = null
  categories.value = null
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