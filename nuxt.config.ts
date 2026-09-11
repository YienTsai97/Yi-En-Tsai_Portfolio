// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  typescript: {
    strict: true,
    typeCheck: true
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/work',
        '/work/vancastro',
        '/work/plurk-styler'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Yi-En Tsai — Full-Stack Web Developer',
      meta: [
        {
          name: 'description',
          content:
            'Full-Stack Web Developer with a background in digital design. I build practical, user-focused web applications with Vue, React, and TypeScript.'
        }
      ],
      link: [
        {
          rel: 'icon',
          href: 'data:,'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  }
})
