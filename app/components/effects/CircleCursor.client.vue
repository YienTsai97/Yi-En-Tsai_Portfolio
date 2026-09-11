<script setup lang="ts">
import { startCircleCursor } from '~/utils/circleCursor.js'

const CIRCLE_COUNT = 24
const rootRef = ref<HTMLElement | null>(null)

let cleanup: (() => void) | undefined

onMounted(async () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion) {
    return
  }

  await nextTick()
  if (!rootRef.value) {
    return
  }

  cleanup = startCircleCursor(rootRef.value)
})

onBeforeUnmount(() => {
  cleanup?.()
})
</script>

<template>
  <div
    ref="rootRef"
    class="cursor"
    aria-hidden="true"
  >
    <div
      v-for="index in CIRCLE_COUNT"
      :key="index"
      class="circle"
    />
  </div>
</template>
