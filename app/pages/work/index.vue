<script setup lang="ts">
import { projects } from '~/data/projects'
import { site } from '~/data/site'

useSeoMeta({
  title: `Projects — ${site.name}`,
  description: site.projectsSubtitle
})
</script>

<template>
  <section class="work-index">
    <div class="sectionTop">
      <h1>{{ site.projectsTitle }}</h1>
      <p class="section-kicker">
        {{ site.projectsSubtitle }}
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
