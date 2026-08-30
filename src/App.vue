<template>
  <main class="app">
    <Word />
  </main>
</template>

<script setup>
import Word from './components/Word.vue'
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #121216;
  color: #f5f5f7;
}

.app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>