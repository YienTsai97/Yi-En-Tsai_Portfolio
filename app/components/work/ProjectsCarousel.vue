<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { ProjectSummary } from '~/types/project'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps<{
  projects: ProjectSummary[]
}>()

const modules = [Navigation, Pagination]
</script>

<template>
  <ClientOnly>
    <Swiper
      class="projects-swiper"
      :modules="modules"
      :loop="projects.length > 1"
      :slides-per-view="1"
      :space-between="24"
      :auto-height="false"
      :pagination="{ clickable: true }"
      :navigation="true"
    >
      <SwiperSlide
        v-for="project in projects"
        :key="project.slug"
      >
        <article class="project-slide">
          <a
            class="project-slide__media"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="project.previewImage"
              :alt="`${project.title} preview`"
            >
          </a>

          <div class="project-slide__body">
            <h3>{{ project.title }}</h3>
            <p class="project-slide__category">
              {{ project.category }}
            </p>
            <p class="project-slide__summary">
              {{ project.summary }}
            </p>
            <p
              v-if="project.role"
              class="project-slide__role"
            >
              {{ project.role }}
            </p>
            <ul
              class="tag-list tag-list--compact"
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
      </SwiperSlide>
    </Swiper>

    <template #fallback>
      <div class="project-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </template>
  </ClientOnly>
</template>
