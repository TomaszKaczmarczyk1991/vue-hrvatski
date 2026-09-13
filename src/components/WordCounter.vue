<template>
  <div class="word-counter">
    <span class="count">
      [ {{ displayCount }}
    </span>

    <span class="count">
      {{ label }} ]
    </span>
  </div>
</template>

<script setup>
import { words } from '../data/words.js'

const props = defineProps({
  count: {
    type: Number,
    default: null
  },
  label: {
    type: String,
    default: 'słówek w bazie danych'
  }
})

const displayCount = props.count ?? words.length
</script>

<style scoped>
.word-counter {
  position: fixed;
  left: 50%;
  bottom: 20px;

  transform: translateX(-50%);

  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;

  color: #eeeeee;

  font-size: 13px;
  font-weight: 500;

  opacity: 0.7;

  white-space: nowrap;
  pointer-events: none;
}

.count {
  font-weight: 500;
}

@media (max-width: 500px) {
  .word-counter {
    bottom: 18px;

    font-size: 11px;
  }
}
</style>