<script setup lang="ts">
import { startFloatingBubble } from '~/utils/floatingBubble.js'

const canvasRef = ref<HTMLCanvasElement | null>(null)

let cleanup: (() => void) | undefined

onMounted(async () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    return
  }

  await nextTick()
  if (!canvasRef.value) {
    return
  }

  cleanup = startFloatingBubble(canvasRef.value)
})

onBeforeUnmount(() => {
  cleanup?.()
})
</script>

<template>
  <div
    class="bubble-wrap"
    aria-hidden="true"
  >
    <canvas
      id="bubble"
      ref="canvasRef"
    />
  </div>
</template>
