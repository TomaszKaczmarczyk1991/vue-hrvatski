<template>
  <canvas
    ref="canvasEl"
    class="confetti-canvas"
    aria-hidden="true"
  ></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const COLORS = ['#4ade80', '#b8b8ff', '#f9a8d4', '#fcd34d', '#60a5fa', '#fb923c']
const PARTICLES_PER_CANNON = 70
const GRAVITY = 0.25
const DRAG = 0.97
const LIFE_FRAMES = 200
const FADE_FRAMES = 50

const canvasEl = ref(null)

let ctx = null
let particles = []
let rafId = null
let lastTime = 0
let width = 0
let height = 0

function resize() {
  const canvas = canvasEl.value
  if (!canvas) return

  const dpr = window.devicePixelRatio || 1

  width = window.innerWidth
  height = window.innerHeight

  canvas.width = Math.round(width * dpr)
  canvas.height = Math.round(height * dpr)

  ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function spawnCannon(side) {
  const originX = side === 'left' ? -10 : width + 10
  const originY = height + 10
  const direction = side === 'left' ? 1 : -1

  for (let i = 0; i < PARTICLES_PER_CANNON; i++) {
    // kąt strzału 50–80° od poziomu, w stronę środka ekranu
    const angle = (50 + Math.random() * 30) * (Math.PI / 180)
    const speed = 13 + Math.random() * 13

    particles.push({
      x: originX,
      y: originY,
      vx: Math.cos(angle) * speed * direction,
      vy: -Math.sin(angle) * speed,
      size: 6 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.35,
      wobble: Math.random() * Math.PI * 2,
      vw: 0.1 + Math.random() * 0.15,
      round: Math.random() < 0.25,
      life: LIFE_FRAMES + Math.random() * 40
    })
  }
}

function frame(now) {
  // krok czasowy, żeby animacja działała tak samo na 60 Hz i 120 Hz
  const step = Math.min((now - lastTime) / 16.667, 2)
  lastTime = now

  ctx.clearRect(0, 0, width, height)

  for (const p of particles) {
    p.vx *= Math.pow(DRAG, step)
    p.vy = p.vy * Math.pow(DRAG, step) + GRAVITY * step

    p.x += p.vx * step
    p.y += p.vy * step

    p.rotation += p.vr * step
    p.wobble += p.vw * step
    p.life -= step

    const alpha = Math.max(0, Math.min(1, p.life / FADE_FRAMES))

    ctx.save()
    ctx.globalAlpha = alpha
    ctx.translate(p.x, p.y)
    ctx.rotate(p.rotation)
    ctx.scale(1, Math.cos(p.wobble))
    ctx.fillStyle = p.color

    if (p.round) {
      ctx.beginPath()
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
      ctx.fill()
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
    }

    ctx.restore()
  }

  particles = particles.filter((p) => p.life > 0 && p.y < height + 40)

  if (particles.length > 0) {
    rafId = requestAnimationFrame(frame)
  } else {
    rafId = null
    ctx.clearRect(0, 0, width, height)
  }
}

function fire() {
  // szanujemy systemowe ustawienie "ogranicz animacje"
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

  resize()

  spawnCannon('left')
  spawnCannon('right')

  if (rafId === null) {
    lastTime = performance.now()
    rafId = requestAnimationFrame(frame)
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)

  if (rafId !== null) {
    cancelAnimationFrame(rafId)
    rafId = null
  }
})

defineExpose({ fire })
</script>

<style scoped>
.confetti-canvas {
  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;
  z-index: 1000;
}
</style>