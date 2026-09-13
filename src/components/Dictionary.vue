<template>
  <div class="dictionary-wrapper">
    <div class="card">
      <div class="category">
        Słownik
      </div>

      <input
        v-model="query"
        class="search-input"
        :class="{ 'not-found': notFound }"
        type="text"
        placeholder="Wpisz słówko po polsku lub chorwacku..."
        autocomplete="off"
        spellcheck="false"
        autofocus
      />

      <div
        ref="listEl"
        class="word-list"
      >
        <div
          v-for="word in words"
          :key="word.id"
          :ref="(el) => setItemRef(el, word.id)"
          class="word-row"
          :class="{ highlighted: matchedWord && matchedWord.id === word.id }"
        >
          <span class="word-hr">{{ word.hr }}</span>
          <span class="word-arrow">→</span>
          <span class="word-pl">{{ word.pl }}</span>
          <span class="word-category">{{ word.category }}</span>
        </div>
      </div>
    </div>

    <WordCounter
      :count="words.length"
      label="słówek w słowniku"
    />
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

import { words } from '../data/words.js'

import WordCounter from './WordCounter.vue'

const emit = defineEmits(['back'])

const query = ref('')
const listEl = ref(null)
const itemRefs = {}

const normalizedQuery = computed(() => query.value.trim().toLowerCase())

const matchedWord = computed(() => {
  const q = normalizedQuery.value
  if (!q) return null

  const matchesLang = (word) =>
    word.hr.toLowerCase().includes(q) || word.pl.toLowerCase().includes(q)

  // 1. dokładne trafienie
  let found = words.find(
    (w) => w.hr.toLowerCase() === q || w.pl.toLowerCase() === q
  )
  if (found) return found

  // 2. zaczyna się od wpisanego tekstu
  found = words.find(
    (w) => w.hr.toLowerCase().startsWith(q) || w.pl.toLowerCase().startsWith(q)
  )
  if (found) return found

  // 3. zawiera wpisany tekst gdziekolwiek
  found = words.find(matchesLang)
  return found || null
})

const notFound = computed(() => normalizedQuery.value.length > 0 && !matchedWord.value)

function setItemRef(el, id) {
  if (el) {
    itemRefs[id] = el
  }
}

watch(matchedWord, (word) => {
  if (!word) return

  nextTick(() => {
    itemRefs[word.id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  })
})

function handleKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    emit('back')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.dictionary-wrapper {
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 24px;

  padding: 24px 0;
}

.card {
  width: 460px;
  max-width: calc(100vw - 32px);
  height: 70vh;
  max-height: 640px;
  padding: 32px;

  display: flex;
  flex-direction: column;

  background: #1e1e24;
  border: 1px solid #2f2f38;
  border-radius: 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);

  opacity: 0;
  animation: card-in 0.5s ease-out forwards;
}

.category {
  margin-bottom: 16px;

  font-size: 12px;
  font-weight: 600;
  color: #8f8f9d;

  text-transform: uppercase;
  letter-spacing: 1.5px;

  text-align: center;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 16px;

  background: #24242c;
  border: 2px solid #383842;
  border-radius: 12px;

  color: #f5f5f7;

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;

  outline: none;

  transition: border-color 0.2s ease;
}

.search-input:focus {
  border-color: #8f8f9d;
}

.search-input.not-found {
  border-color: #f87171;
}

.word-list {
  flex: 1;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-right: 4px;
}

.word-list::-webkit-scrollbar {
  width: 6px;
}

.word-list::-webkit-scrollbar-thumb {
  background: #383842;
  border-radius: 3px;
}

.word-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 12px;

  border-radius: 10px;

  transition: background 0.4s ease, box-shadow 0.4s ease;
}

.word-row:nth-child(odd) {
  background: rgba(255, 255, 255, 0.02);
}

.word-row.highlighted {
  background: rgba(74, 222, 128, 0.15);
  box-shadow: 0 0 0 1px rgba(74, 222, 128, 0.4) inset;
}

.word-hr {
  font-size: 15px;
  font-weight: 700;
  color: #f5f5f7;
}

.word-arrow {
  color: #55555f;
  font-size: 13px;
}

.word-pl {
  font-size: 15px;
  color: #b8b8c2;
}

.word-category {
  margin-left: auto;

  font-size: 10px;
  font-weight: 600;
  color: #6f6f7b;

  text-transform: uppercase;
  letter-spacing: 0.6px;

  white-space: nowrap;
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 500px) {
  .card {
    padding: 24px 20px;
    height: 75vh;
  }

  .word-hr,
  .word-pl {
    font-size: 13px;
  }

  .word-category {
    display: none;
  }
}
</style>