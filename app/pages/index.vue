<script setup lang="ts">
import { experienceGroups } from '~/data/experience'
import { projects } from '~/data/projects'
import { site } from '~/data/site'
import { skillGroups } from '~/data/skills'

const pageDescription = `${site.heroRole} ${site.heroTagline}`

useSeoMeta({
  title: `${site.name} — ${site.roleLabel}`,
  description: pageDescription
})
</script>

<template>
  <div>
    <section id="home">
      <div class="hero-copy">
        <div class="hero-title">
          <h1>{{ site.heroTitle }}</h1>
          <p class="hero-role">
            {{ site.heroRole }}
          </p>
          <p class="hero-tagline">
            {{ site.heroTagline }}
          </p>
        </div>
        <div class="button-row">
          <a
            class="btn-primary"
            :href="site.resumeUrl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>
          <a
            class="btn-primary"
            href="#contact"
          >
            Contact me
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="profile">
        <div
          class="profile-img"
          role="img"
          :aria-label="`${site.name} portrait`"
        />
      </div>
    </section>

    <section
      id="projects"
      aria-labelledby="projects-title"
    >
      <div class="sectionTop">
        <h2 id="projects-title">
          {{ site.projectsTitle }}
        </h2>
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

    <section
      id="about"
      aria-labelledby="about-title"
    >
      <div class="sectionTop">
        <h2 id="about-title">
          {{ site.aboutTitle }}
        </h2>
        <p class="section-kicker">
          {{ site.aboutEyebrow }}
        </p>
      </div>
      <div class="about-copy">
        <p
          v-for="paragraph in site.aboutParagraphs"
          :key="paragraph"
        >
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section
      id="work_experiences"
      aria-labelledby="experience-title"
    >
      <div class="sectionTop">
        <h2 id="experience-title">
          {{ site.experienceTitle }}
        </h2>
        <p class="section-kicker">
          {{ site.experienceSubtitle }}
        </p>
      </div>

      <ExperienceTabs :groups="experienceGroups" />
    </section>

    <section
      id="skills"
      aria-labelledby="skills-title"
    >
      <div class="sectionTop">
        <h2 id="skills-title">
          {{ site.skillsTitle }}
        </h2>
        <p class="section-kicker">
          {{ site.skillsSubtitle }}
        </p>
      </div>

      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="skillGroup"
      >
        <h3>{{ group.title }}</h3>
        <ul class="tag-list">
          <li
            v-for="item in group.items"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <section
      id="contact"
      aria-labelledby="contact-title"
    >
      <div class="sectionTop">
        <h2 id="contact-title">
          {{ site.contactTitle }}
        </h2>
        <p class="section-kicker">
          {{ site.contactSubtitle }}
        </p>
      </div>
      <div class="button-row">
        <a
          class="btn-primary"
          :href="site.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          class="btn-primary"
          :href="site.social.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          class="btn-primary"
          :href="site.social.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  </div>
</template>
