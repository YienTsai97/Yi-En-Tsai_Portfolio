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
          <a href="/#projects">
            Work
          </a>
        </li>
        <li>
          <a href="/#about">
            About
          </a>
        </li>
        <li>
          <a href="/#work_experiences">
            Experience
          </a>
        </li>
        <li>
          <a href="/#skills">
            Skills
          </a>
        </li>
        <li>
          <a href="/#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
