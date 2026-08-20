<script setup lang="ts">
import type { ProjectSummary } from '~/types/project'

defineProps<{
  project: ProjectSummary
}>()
</script>

<template>
  <article class="project-card">
    <div class="project-card__preview">
      <img
        :src="project.previewImage"
        :alt="`${project.title} preview`"
      >
    </div>
    <div class="project-card__body">
      <p class="eyebrow">
        {{ project.category }}
      </p>
      <h3>{{ project.title }}</h3>
      <p class="project-card__summary">
        {{ project.summary }}
      </p>
      <p
        v-if="project.role"
        class="project-card__role"
      >
        {{ project.role }}
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
      <div class="project-card__actions">
        <a
          class="text-link"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live demo
          <span aria-hidden="true">↗</span>
        </a>
        <NuxtLink
          class="text-link"
          :to="`/work/${project.slug}`"
        >
          Details
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
