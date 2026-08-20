<script setup lang="ts">
import { experienceGroups } from '~/data/experience'
import { projects } from '~/data/projects'
import { site } from '~/data/site'
import { skillGroups } from '~/data/skills'

useSeoMeta({
  title: "Yi-En Tsai's Portfolio",
  description: site.aboutBody
})
</script>

<template>
  <div>
    <section id="home">
      <div class="hero-copy">
        <h1>
          hey there,<br>
          i'm Yi-En
        </h1>
        <p>{{ site.heroSubtitle }}</p>
        <a
          class="btn-primary"
          href="#contact"
        >
          contact me
          <span aria-hidden="true">→</span>
        </a>
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
      <p>{{ site.aboutBody }}</p>
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

      <ProjectsCarousel :projects="projects" />
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
