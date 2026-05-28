// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // SSR globally; component hub stays client-rendered for interactivity.
  ssr: true,
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
          content: "width=device-width, initial-scale=1",
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

  sitemap: {
    exclude: ['/playground'],
  },

  robots: {
    disallow: ['/playground'],
  },

  routeRules: {
    '/playground': { index: false },
    // Component hub — client-only for search/sidebar interactivity
    '/components/**': { ssr: false, isr: 3600 },
    // Marketing & content pages
    '/landings/**': { isr: 3600 },
    '/nuxt-landing-components': { prerender: true },
    '/nuxt-landing-comparison': { prerender: true },
    '/how-to-build-nuxt-landing-page': { prerender: true },
    '/es/**': { prerender: true },
    '/': { prerender: true },
    '/instructions': { prerender: true },
    '/contribution': { prerender: true },
    '/repositories': { prerender: true },
    '/landings': { prerender: true },
  },

  compatibilityDate: "2024-10-03"
})
