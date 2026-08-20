<script setup lang="ts">
import { projects } from '~/data/projects'

useSeoMeta({
  title: 'Projects — Yi-En Tsai',
  description: "what i've built — recent works"
})
</script>

<template>
  <section class="work-index">
    <div class="sectionTop">
      <h1>what i've built</h1>
      <p class="section-kicker">
        recent works
      </p>
    </div>

    <div class="project-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </section>
</template>
