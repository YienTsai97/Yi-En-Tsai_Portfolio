<template>
  <div class="site-shell">
    <FloatingBubbleBackground />
    <CircleCursor />
    <SiteHeader />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
