<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <footer class="site-footer">
    <div>
      <h2 class="site-footer__name">
        {{ site.name }}
      </h2>
      <p>{{ site.roleLabel }}</p>
    </div>

    <ul class="site-footer__links">
      <li>
        <NuxtLink to="/#home">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#projects">
          Project
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/#contact">
          Contact
        </NuxtLink>
      </li>
    </ul>

    <div class="site-footer__social">
      <a
        :href="site.social.linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        :href="site.social.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>
