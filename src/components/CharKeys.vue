<template>
  <div
    class="char-keys"
    role="group"
    aria-label="Znaki chorwackie"
  >
    <button
      v-for="char in chars"
      :key="char"
      type="button"
      class="char-key"
      :disabled="disabled"
      :aria-label="`Wstaw znak ${char}`"
      tabindex="-1"
      @mousedown.prevent
      @click="emit('insert', char)"
    >
      {{ char }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['insert'])

const chars = ['č', 'ć', 'đ', 'š', 'ž']
</script>

<style scoped>
.char-keys {
  margin-top: 18px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.char-key {
  width: 38px;
  height: 38px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #383842;
  border-radius: 10px;

  background: #24242c;
  box-shadow: 0 2px 0 #15151a;

  color: #d4d4ff;

  font-family: inherit;
  font-size: 17px;
  font-weight: 700;
  line-height: 1;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.char-key:hover:not(:disabled) {
  background: #2c2c34;
  border-color: #55555f;
}

.char-key:active:not(:disabled) {
  transform: translateY(2px);
  box-shadow: none;
}

.char-key:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

@media (max-width: 500px) {
  .char-keys {
    margin-top: 16px;
  }

  .char-key {
    width: 42px;
    height: 42px;

    font-size: 19px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .char-key {
    transition: none;
  }
}
</style>