<template>
  <main class="app">
    <Menu
      v-if="!selectedMode"
      @select="selectMode"
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
import { ref } from 'vue'

import Menu from './components/Menu.vue'
import Word from './components/Word.vue'
import BackButton from './components/BackButton.vue'

const selectedMode = ref(null)

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