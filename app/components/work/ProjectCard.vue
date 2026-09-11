<script setup lang="ts">
import type { ProjectSummary } from '~/types/project'

defineProps<{
  project: ProjectSummary
}>()
</script>

<template>
  <article class="project-card">
    <a
      class="project-card__preview-link"
      :href="project.liveUrl"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="project-card__preview">
        <img
          :src="project.previewImage"
          :alt="`${project.title} preview`"
        >
      </div>
    </a>
    <div class="project-card__body">
      <div class="project-card__header">
        <p class="eyebrow">
          {{ project.category }}
        </p>
        <h3>{{ project.title }}</h3>
      </div>
      <p class="project-card__summary">
        {{ project.summary }}
      </p>
      <p
        v-if="project.role"
        class="project-card__role"
      >
        {{ project.role }}
      </p>
      <dl
        v-if="project.highlights?.length"
        class="project-card__highlights"
      >
        <div
          v-for="item in project.highlights"
          :key="item.label"
          class="project-card__highlight"
        >
          <dt>{{ item.label }}</dt>
          <dd>{{ item.text }}</dd>
        </div>
      </dl>
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
        <a
          v-if="project.githubUrl"
          class="text-link"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </article>
</template>
