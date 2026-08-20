<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <header class="site-header">
    <NuxtLink
      class="site-header__brand"
      to="/"
    >
      {{ site.name }}
    </NuxtLink>

    <nav aria-label="Primary navigation">
      <ul class="site-header__links">
        <li>
          <NuxtLink to="/#home">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#about">
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#skills">
            Skills
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#work_experiences">
            Work Experiences
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#projects">
            Projects
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#contact">
            Get in touch!
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
