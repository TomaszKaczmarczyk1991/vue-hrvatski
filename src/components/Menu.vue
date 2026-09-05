<template>
  <div class="menu">
    <MainImage />

<div class="content">
  <Welcome />

  <div class="options">
    <button
      class="option-button"
      @click="$emit('select', 'hr-pl')"
    >
      <span>🇭🇷</span>
      <span>HR → PL</span>
      <span>🇵🇱</span>
    </button>

    <button
      class="option-button"
      @click="$emit('select', 'pl-hr')"
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
import Welcome from './Welcome.vue'
import MainImage from './MainImage.vue'

defineEmits(['select'])
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

  gap: 28px;
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

  .option-button {
    width: 230px;
    height: 50px;
    font-size: 14px;
  }
}
</style>