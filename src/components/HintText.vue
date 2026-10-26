<template>
  <span class="hint-text">
    <span
      v-if="ok"
      :class="{ 'flash-ok': phase === 'flash-ok' }"
      :style="flashStyle"
    >{{ ok }}</span>

    <span
      v-if="bad"
      :class="{ 'flash-bad': phase === 'flash-bad' }"
      :style="flashStyle"
    >{{ bad }}</span>

    <span
      v-if="added"
      class="added"
      :style="fadeStyle"
    >{{ added }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 'flash-ok' | 'flash-bad' | 'removed' | 'fade-new'
  phase: {
    type: String,
    default: ''
  },
  // poprawny początek wpisanego tekstu (zostaje nietknięty)
  ok: {
    type: String,
    default: ''
  },
  // błędne litery (mrugają na czerwono i znikają)
  bad: {
    type: String,
    default: ''
  },
  // podpowiedziana litera (pojawia się efektem fade-in)
  added: {
    type: String,
    default: ''
  },
  // czas dwóch mignięć łącznie (ms)
  flashMs: {
    type: Number,
    default: 400
  },
  // czas pojawiania się litery (ms)
  fadeMs: {
    type: Number,
    default: 520
  }
})

// Jedno mignięcie to połowa całkowitego czasu (animacja leci dwa razy)
const flashStyle = computed(() => ({
  animationDuration: `${props.flashMs / 2}ms`
}))

const fadeStyle = computed(() => ({
  animationDuration: `${props.fadeMs}ms`
}))
</script>

<style scoped>
/* Sposób zawijania i spacje dziedziczy po nakładce (pre albo pre-wrap) */
.hint-text {
  white-space: inherit;
}

.flash-ok {
  animation-name: hint-flash-ok;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
}

.flash-bad {
  animation-name: hint-flash-bad;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 2;
}

.added {
  display: inline-block;

  animation-name: hint-letter-in;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  animation-fill-mode: both;
}

@keyframes hint-flash-ok {
  0%,
  100% {
    color: #f5f5f7;
    text-shadow: none;
  }

  45% {
    color: #4ade80;
    text-shadow: 0 0 12px rgba(74, 222, 128, 0.55);
  }
}

@keyframes hint-flash-bad {
  0%,
  100% {
    color: #f5f5f7;
    text-shadow: none;
  }

  45% {
    color: #f87171;
    text-shadow: 0 0 12px rgba(248, 113, 113, 0.55);
  }
}

/* Litera wyłania się ze złotawej poświaty i przechodzi w zwykły kolor */
@keyframes hint-letter-in {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.6);
    filter: blur(3px);
    color: #e0c88a;
    text-shadow: 0 0 14px rgba(224, 200, 138, 0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
    color: #f5f5f7;
    text-shadow: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .added {
    animation-name: hint-letter-fade;
  }

  @keyframes hint-letter-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>