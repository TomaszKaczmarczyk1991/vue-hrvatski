<template>
  <div class="grammar-wrapper">
    <div class="card">
      <div class="section-tabs">
        <button
          v-for="sec in grammarSections"
          :key="sec.id"
          class="section-tab"
          :class="{ active: activeSectionId === sec.id }"
          @click="selectSection(sec.id)"
        >
          {{ sec.title }}
        </button>
      </div>

      <div
        v-if="activeSection.topics.length > 1"
        class="topic-tabs"
      >
        <button
          v-for="t in activeSection.topics"
          :key="t.id"
          class="topic-tab"
          :class="{ active: activeTopicId === t.id }"
          @click="activeTopicId = t.id"
        >
          {{ t.title }}
        </button>
      </div>

      <div class="content-scroll">
        <h2 class="topic-title">{{ activeTopic.title }}</h2>

        <template
          v-for="(block, i) in activeTopic.blocks"
          :key="i"
        >
          <p
            v-if="block.type === 'text'"
            class="block-text"
          >
            {{ block.text }}
          </p>

          <div
            v-else-if="block.type === 'warning'"
            class="block-warning"
          >
            <span class="warning-icon">⚠️</span>
            <span>{{ block.text }}</span>
          </div>

          <ul
            v-else-if="block.type === 'list'"
            class="block-list"
          >
            <li
              v-for="(item, j) in block.items"
              :key="j"
            >
              {{ item }}
            </li>
          </ul>

          <div
            v-else-if="block.type === 'table'"
            class="block-table-wrap"
          >
            <table class="block-table">
              <thead>
                <tr>
                  <th
                    v-for="(h, j) in block.headers"
                    :key="j"
                  >
                    {{ h }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(row, j) in block.rows"
                  :key="j"
                >
                  <td
                    v-for="(cell, k) in row"
                    :key="k"
                  >
                    {{ cell }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            v-else-if="block.type === 'pairs'"
            class="block-pairs"
          >
            <div
              v-for="(item, j) in block.items"
              :key="j"
              class="pair-row"
            >
              <div class="pair-hr">{{ item.hr }}</div>
              <div class="pair-pl">{{ item.pl }}</div>
              <div
                v-if="item.desc"
                class="pair-desc"
              >
                {{ item.desc }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

import { grammarSections } from '../data/grammar.js'

const emit = defineEmits(['back'])

const activeSectionId = ref(grammarSections[0].id)
const activeTopicId = ref(grammarSections[0].topics[0].id)

const activeSection = computed(() =>
  grammarSections.find((s) => s.id === activeSectionId.value)
)

const activeTopic = computed(() =>
  activeSection.value.topics.find((t) => t.id === activeTopicId.value)
  ?? activeSection.value.topics[0]
)

function selectSection(id) {
  activeSectionId.value = id
  const section = grammarSections.find((s) => s.id === id)
  activeTopicId.value = section.topics[0].id
}

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
.grammar-wrapper {
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 0;
}

.card {
  width: 560px;
  max-width: calc(100vw - 32px);
  height: 78vh;
  max-height: 700px;
  padding: 28px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  background: #1e1e24;
  border: 1px solid #2f2f38;
  border-radius: 24px;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);

  opacity: 0;
  animation: card-in 0.5s ease-out forwards;
}

.section-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.section-tab {
  padding: 7px 16px;

  border: 1px solid #383842;
  border-radius: 16px;

  background: #24242c;
  color: #83838d;

  font-family: inherit;
  font-size: 12px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.section-tab.active {
  background: rgba(184, 184, 255, 0.15);
  border-color: rgba(184, 184, 255, 0.5);
  color: #d4d4ff;
}

.section-tab:hover {
  border-color: #55555f;
}

.topic-tabs {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.topic-tab {
  padding: 5px 12px;

  border: 1px solid #2f2f38;
  border-radius: 12px;

  background: transparent;
  color: #6f6f7b;

  font-family: inherit;
  font-size: 11px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.topic-tab.active {
  background: rgba(74, 222, 128, 0.12);
  border-color: rgba(74, 222, 128, 0.4);
  color: #a8f0c0;
}

.topic-tab:hover {
  border-color: #44444f;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;

  padding-right: 6px;
}

.content-scroll::-webkit-scrollbar {
  width: 6px;
}

.content-scroll::-webkit-scrollbar-thumb {
  background: #383842;
  border-radius: 3px;
}

.topic-title {
  margin: 0 0 14px;

  color: #f5f5f7;

  font-size: 18px;
  font-weight: 700;
}

.block-text {
  margin: 0 0 14px;

  color: #c8c8d0;

  font-size: 14px;
  line-height: 1.6;
}

.block-warning {
  display: flex;
  gap: 8px;

  margin: 0 0 14px;
  padding: 10px 14px;

  background: rgba(201, 168, 76, 0.1);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 10px;

  color: #e0c88a;

  font-size: 13px;
  line-height: 1.5;
}

.warning-icon {
  flex-shrink: 0;
}

.block-list {
  margin: 0 0 14px;
  padding-left: 20px;

  color: #c8c8d0;

  font-size: 14px;
  line-height: 1.7;
}

.block-table-wrap {
  margin: 0 0 14px;
  overflow-x: auto;
}

.block-table {
  width: 100%;
  border-collapse: collapse;

  font-size: 13px;
}

.block-table th {
  padding: 8px 10px;

  background: #24242c;
  color: #8f8f9d;

  text-align: left;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  border-bottom: 1px solid #383842;
  white-space: nowrap;
}

.block-table td {
  padding: 8px 10px;

  color: #e0e0e4;
  border-bottom: 1px solid #2a2a30;
}

.block-table tr:last-child td {
  border-bottom: none;
}

.block-pairs {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.pair-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 12px;

  padding: 10px 12px;

  border-radius: 10px;
}

.pair-row:nth-child(odd) {
  background: rgba(255, 255, 255, 0.02);
}

.pair-hr {
  font-size: 14px;
  font-weight: 700;
  color: #f5f5f7;
}

.pair-pl {
  font-size: 14px;
  color: #b8b8c2;
}

.pair-desc {
  grid-column: 1 / -1;

  margin-top: 2px;

  font-size: 12px;
  color: #6f6f7b;
  font-style: italic;
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
    padding: 20px;
    height: 80vh;
  }

  .pair-row {
    grid-template-columns: 1fr;
  }

  .topic-title {
    font-size: 16px;
  }
}
</style>