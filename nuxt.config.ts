// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
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
  modules: ["@nuxt/ui", "@nuxt/content", "@nuxt/image", "@pinia/nuxt", "nuxt-marquee", '@vueuse/motion/nuxt'],

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

  compatibilityDate: "2024-10-03"
})
