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
          HR → PL
        </button>

        <button
          class="option-button"
          @click="$emit('select', 'pl-hr')"
        >
          PL → HR
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

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  background: rgba(20, 20, 24, 0.72);
  backdrop-filter: blur(8px);

  color: #ffffff;

  font-family: inherit;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.option-button:hover {
  background: rgba(30, 30, 36, 0.86);
  border-color: rgba(255, 255, 255, 0.4);

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
}
</style>