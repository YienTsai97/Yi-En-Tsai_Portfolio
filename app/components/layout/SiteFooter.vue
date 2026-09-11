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
        <a href="/#contact">
          Contact
        </a>
      </li>
    </ul>

    <div class="site-footer__social">
      <a
        :href="site.resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
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
