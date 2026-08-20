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
        '/work/taskpicker',
        '/work/shoppy',
        '/work/filmbuff',
        '/work/ddsgnr'
      ]
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: "Yi-En Tsai's Portfolio",
      meta: [
        {
          name: 'description',
          content:
            'Since 2024, I have been studying Web Development at Cornerstone International Community College of Canada, gaining technical expertise with a strong sense of design.'
        }
      ],
      link: [
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
