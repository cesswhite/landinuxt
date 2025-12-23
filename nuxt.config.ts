// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.landinuxt.com',
    name: 'LandiNuxt',
    description: 'Pre-built Nuxt landing page components and templates. Build beautiful, responsive landing pages faster with copy-paste components fully integrated with Nuxt UI v4.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        }
      ],
      script: [
        {
          //
          src: 'https://api.stage.codewithbeto.dev/script.js',
          defer: true,
          'data-website-id': process.env.UMAMI_KEY
        }
      ],
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0",
        },
        {
          charset: "utf-8",
        },
      ]
    },
  },

  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui", 
    "@nuxt/content", 
    "@nuxt/image", 
    "@pinia/nuxt", 
    '@vueuse/motion/nuxt',
    "@nuxtjs/seo"
  ],
  
  image: {
    format: ['webp']
  },
  
  content: {
    highlight: {
      langs: [
        'json',
        'js',
        'javascript',
        'ts',
        'typescript',
        'html',
        'css',
        'vue',
      ],
      theme: {
        default: 'github-dark'
      }
    }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.landinuxt.com',
    },
  },

  routeRules: {
    // Landing pages - ISR for better performance
    '/landings/**': { isr: 3600 },
    '/nuxt-landing-components': { isr: 3600 },
    '/nuxt-landing-comparison': { isr: 3600 },
    '/how-to-build-nuxt-landing-page': { isr: 3600 },
    '/nuxt-landing-performance': { isr: 3600 },
    // Spanish pages - ISR
    '/es/**': { isr: 3600 },
    // Component pages - ISR
    '/components/**': { isr: 3600 },
    // Static pages
    '/': { prerender: true },
    '/instructions': { prerender: true },
    '/contribution': { prerender: true },
  },

  compatibilityDate: "2024-10-03"
})
