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
          :key="blockKey(i)"
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

          <div
            v-else-if="block.type === 'examples'"
            class="block-examples"
          >
            <button
              class="examples-toggle"
              @click="toggleExamples(blockKey(i))"
            >
              <span class="examples-icon">{{ isOpen(blockKey(i)) ? '▾' : '▸' }}</span>
              <span>
                {{ isOpen(blockKey(i)) ? 'Ukryj przykłady' : `Pokaż przykłady (${block.items.length})` }}
              </span>
            </button>

            <div
              v-if="isOpen(blockKey(i))"
              class="examples-list"
            >
              <div
                v-for="(ex, j) in block.items"
                :key="j"
                class="example-row"
              >
                <span class="example-hr">{{ ex.hr }}</span>
                <span class="example-pl">{{ ex.pl }}</span>
              </div>
            </div>
          </div>

          <div
            v-else-if="block.type === 'verb-groups'"
            class="block-verb-groups"
          >
            <div class="vg-tabs">
              <button
                v-for="group in block.groups"
                :key="group.id"
                class="vg-tab"
                :class="{ active: selectedGroup(blockKey(i), block) === group.id }"
                @click="setGroup(blockKey(i), group.id)"
              >
                <span class="vg-tab-label">{{ group.label }}</span>
                <span class="vg-tab-subtitle">{{ group.subtitle }}</span>
              </button>
            </div>

            <template
              v-for="group in block.groups"
              :key="group.id"
            >
              <div
                v-if="selectedGroup(blockKey(i), block) === group.id"
                class="vg-content"
              >
                <p class="vg-description">{{ group.description }}</p>

                <div class="vg-table-wrap">
                  <table class="vg-table">
                    <thead>
                      <tr>
                        <th>Osoba</th>
                        <th>Końcówka</th>
                        <th>{{ group.example.infinitive }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(end, j) in group.endings"
                        :key="j"
                      >
                        <td>{{ end.person }}</td>
                        <td class="vg-ending">{{ end.ending }}</td>
                        <td class="vg-form">{{ group.example.forms[j] }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div class="vg-sentences">
                  <div
                    v-for="(s, j) in group.sentences"
                    :key="j"
                    class="example-row"
                  >
                    <span class="example-hr">{{ s.hr }}</span>
                    <span class="example-pl">{{ s.pl }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

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

// Stan rozwinięcia bloków "examples", osobny dla każdej kombinacji
// sekcja+temat+index bloku, żeby przełączanie tematów nie mieszało stanów
const openExamples = reactive({})

// Stan wybranej grupy czasowników dla bloków "verb-groups",
// również osobny per blok
const selectedGroups = reactive({})

function blockKey(index) {
  return `${activeSectionId.value}:${activeTopicId.value}:${index}`
}

function isOpen(key) {
  return !!openExamples[key]
}

function toggleExamples(key) {
  openExamples[key] = !openExamples[key]
}

function selectedGroup(key, block) {
  return selectedGroups[key] ?? block.groups[0].id
}

function setGroup(key, groupId) {
  selectedGroups[key] = groupId
}

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
  width: 580px;
  max-width: calc(100vw - 32px);
  height: 78vh;
  max-height: 720px;
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

  margin-bottom: 14px;
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

.block-examples {
  margin: 0 0 14px;
}

.examples-toggle {
  width: 100%;
  padding: 10px 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  border: 1px solid #383842;
  border-radius: 10px;

  background: #24242c;
  color: #b8b8ff;

  font-family: inherit;
  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition: background 0.15s ease, border-color 0.15s ease;
}

.examples-toggle:hover {
  background: #2a2a32;
  border-color: #44444f;
}

.examples-icon {
  font-size: 11px;
  color: #8f8f9d;
}

.examples-list {
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  animation: examples-in 0.2s ease-out;
}

.example-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 12px;

  padding: 8px 12px;

  border-radius: 8px;
}

.example-row:nth-child(odd) {
  background: rgba(255, 255, 255, 0.02);
}

.example-hr {
  font-size: 13px;
  font-weight: 600;
  color: #f5f5f7;
}

.example-pl {
  font-size: 13px;
  color: #9a9aa5;
}

.block-verb-groups {
  margin: 0 0 14px;

  display: flex;
  flex-direction: column;
  gap: 14px;
}

.vg-tabs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.vg-tab {
  padding: 10px 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;

  border: 1px solid #383842;
  border-radius: 12px;

  background: #24242c;
  color: #83838d;

  font-family: inherit;
  cursor: pointer;

  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
}

.vg-tab.active {
  background: rgba(184, 184, 255, 0.15);
  border-color: rgba(184, 184, 255, 0.5);
  color: #fff;
}

.vg-tab:hover {
  border-color: #55555f;
}

.vg-tab-label {
  font-size: 13px;
  font-weight: 700;
}

.vg-tab-subtitle {
  font-size: 10px;
  font-weight: 500;
  opacity: 0.75;
}

.vg-content {
  display: flex;
  flex-direction: column;
  gap: 12px;

  animation: examples-in 0.2s ease-out;
}

.vg-description {
  margin: 0;

  color: #c8c8d0;

  font-size: 13px;
  line-height: 1.6;
}

.vg-table-wrap {
  overflow-x: auto;
}

.vg-table {
  width: 100%;
  border-collapse: collapse;

  font-size: 13px;
}

.vg-table th {
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

.vg-table td {
  padding: 8px 10px;

  color: #e0e0e4;
  border-bottom: 1px solid #2a2a30;
}

.vg-table tr:last-child td {
  border-bottom: none;
}

.vg-ending {
  color: #a8f0c0;
  font-weight: 700;
}

.vg-form {
  color: #b8b8ff;
  font-weight: 600;
}

.vg-sentences {
  display: flex;
  flex-direction: column;
  gap: 2px;

  padding-top: 4px;
  border-top: 1px solid #2a2a30;
}

@keyframes examples-in {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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

  .pair-row,
  .example-row {
    grid-template-columns: 1fr;
  }

  .topic-title {
    font-size: 16px;
  }

  .vg-tabs {
    grid-template-columns: 1fr;
  }

  .vg-tab {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>