<script setup lang="ts">
import { projects } from '~/data/projects'

const route = useRoute()
const slug = String(route.params.slug)
const project = projects.find(item => item.slug === slug)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found'
  })
}

useSeoMeta({
  title: `${project.title} — Yi-En Tsai`,
  description: project.summary
})
</script>

<template>
  <article class="case-study">
    <NuxtLink
      class="text-link"
      to="/work"
    >
      <span aria-hidden="true">←</span>
      All work
    </NuxtLink>

    <header class="case-study__header">
      <div class="project-card__preview">
        <img
          :src="project.previewImage"
          :alt="`${project.title} preview`"
        >
      </div>
      <p class="eyebrow">
        {{ project.category }}
      </p>
      <h1>{{ project.title }}</h1>
      <p>{{ project.summary }}</p>
      <p v-if="project.role">
        <strong>Role:</strong> {{ project.role }}
      </p>
      <ul
        class="tag-list"
        :aria-label="`${project.title} technologies`"
      >
        <li
          v-for="item in project.stack"
          :key="item"
        >
          {{ item }}
        </li>
      </ul>
      <a
        class="btn-primary"
        :href="project.liveUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live demo
      </a>
    </header>
  </article>
</template>
