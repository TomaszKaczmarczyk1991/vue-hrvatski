<template>
  <div
    ref="rootEl"
    class="char-keys"
    :class="{ open, disabled }"
  >
    <button
      type="button"
      class="toggle"
      :disabled="disabled"
      :aria-expanded="open"
      aria-label="Znaki chorwackie"
      title="Znaki chorwackie"
      tabindex="-1"
      @mousedown.prevent
      @click="toggle"
    >
      <X
        v-if="open"
        :size="16"
        :stroke-width="2.2"
      />
      <span
        v-else
        class="toggle-glyph"
      >č</span>
    </button>

    <Transition name="keys">
      <div
        v-if="open"
        class="keys"
        role="group"
        aria-label="Znaki chorwackie"
      >
        <span class="divider"></span>

        <button
          v-for="char in chars"
          :key="char"
          type="button"
          class="key"
          :aria-label="`Wstaw znak ${char}`"
          tabindex="-1"
          @mousedown.prevent
          @click="pick(char)"
        >
          {{ char }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  // true: po wstawieniu znaku pasek sam się zamyka
  closeOnInsert: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['insert'])

const chars = ['č', 'ć', 'đ', 'š', 'ž']

const open = ref(false)
const rootEl = ref(null)

function toggle() {
  if (props.disabled) return

  open.value = !open.value
}

function pick(char) {
  emit('insert', char)

  if (props.closeOnInsert) {
    open.value = false
  }
}

// Klik poza paskiem zamyka go
function handleOutsidePointer(event) {
  if (!open.value) return

  if (rootEl.value && !rootEl.value.contains(event.target)) {
    open.value = false
  }
}

// Esc zamyka sam pasek (zamiast wychodzić z ćwiczenia do menu).
// Nasłuch w fazie przechwytywania, żeby zadziałał przed obsługą klawiszy
// w komponencie ćwiczenia.
function handleKeydown(event) {
  if (event.key === 'Escape' && open.value) {
    event.preventDefault()
    event.stopPropagation()
    open.value = false
  }
}

// Po sprawdzeniu odpowiedzi (disabled) pasek się zwija
watch(
  () => props.disabled,
  (value) => {
    if (value) open.value = false
  }
)

onMounted(() => {
  document.addEventListener('pointerdown', handleOutsidePointer)
  window.addEventListener('keydown', handleKeydown, true)
})

onUnmounted(() => {
  document.removeEventListener('pointerdown', handleOutsidePointer)
  window.removeEventListener('keydown', handleKeydown, true)
})
</script>

<style scoped>
.char-keys {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 20;

  display: flex;
  align-items: center;

  border: 1px solid #383842;
  border-radius: 12px;

  background: #24242c;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
}

.char-keys:hover {
  border-color: #55555f;
}

.char-keys.open {
  background: #2c2c34;
  border-color: #55555f;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

.char-keys.disabled {
  opacity: 0.35;
  pointer-events: none;
}

.toggle {
  width: 32px;
  height: 32px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border: none;
  border-radius: 11px;

  background: transparent;
  color: #d4d4ff;

  font-family: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  transition: background 0.15s ease;
}

.toggle:hover {
  background: rgba(255, 255, 255, 0.06);
}

.keys {
  display: flex;
  align-items: center;
  gap: 2px;

  max-width: 260px;
  overflow: hidden;
}

.divider {
  width: 1px;
  height: 18px;
  margin: 0 5px 0 3px;

  flex-shrink: 0;

  background: #44444f;
}

.key {
  width: 30px;
  height: 30px;
  padding: 0;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  border: none;
  border-radius: 9px;

  background: transparent;
  color: #f5f5f7;

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;

  transition:
    background 0.15s ease,
    color 0.15s ease,
    transform 0.1s ease;
}

.key:last-child {
  margin-right: 3px;
}

.key:hover {
  background: rgba(184, 184, 255, 0.15);
  color: #d4d4ff;
}

.key:active {
  transform: scale(0.92);
}

/* Rozwijanie paska: wysuwa się w prawo z ikonki */
.keys-enter-active,
.keys-leave-active {
  transition:
    max-width 0.2s ease,
    opacity 0.2s ease;
}

.keys-enter-from,
.keys-leave-to {
  max-width: 0;
  opacity: 0;
}

@media (max-width: 500px) {
  .toggle {
    width: 36px;
    height: 36px;
  }

  .key {
    width: 36px;
    height: 36px;

    font-size: 18px;
  }

  .divider {
    height: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .char-keys,
  .toggle,
  .key,
  .keys-enter-active,
  .keys-leave-active {
    transition: none;
  }
}
</style>