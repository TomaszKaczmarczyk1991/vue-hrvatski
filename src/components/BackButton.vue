<template>
  <button class="back-button" @click="$emit('back')">
    ← Powrót do menu
  </button>
</template>

<script setup>
defineEmits(['back'])
</script>

<style scoped>
.back-button {
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);

  width: 180px;
  height: 42px;

  border: 1px solid #2f2f38;
  border-radius: 12px;

  background: #1e1e24;
  color: #aaaab4;

  font-family: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease;
}

.back-button:hover {
  background: #24242c;
  border-color: #44444f;
  color: #f5f5f7;
}

.back-button:active {
  transform: translateX(-50%) scale(0.98);
}
</style>