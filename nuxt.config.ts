// https://nuxt.com/docs/api/configuration/nuxt-config

// macOS: avoid EBADF from chokidar/vite watcher instability (nuxt/nuxt#33300)
if (process.platform === 'darwin' && !process.env.CHOKIDAR_USEPOLLING) {
  process.env.CHOKIDAR_USEPOLLING = '1'
}

/** Suppress benign Rollup warnings from dependencies and Nuxt plugins (Vercel build logs). */
function ignoreBenignRollupWarnings(
  warning: { code?: string; plugin?: string; message?: string },
  warn: (warning: unknown) => void,
) {
  const message = warning.message ?? ''

  if (warning.plugin === 'nuxt:module-preload-polyfill' && message.includes('Sourcemap')) {
    return
  }
  if (warning.plugin === 'unwasm' || message.includes('onig.wasm')) {
    return
  }
  if (message.includes('contains an annotation that Rollup cannot interpret')) {
    return
  }
  if (
    warning.code === 'CIRCULAR_DEPENDENCY' &&
    (message.includes('node_modules/nitropack/dist/runtime') ||
      message.includes('node_modules/@nuxt/content/dist/runtime'))
  ) {
    return
  }

  warn(warning)
}

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // SSR in production for SEO; SPA in dev for fast local iteration.
  ssr: true,

  $development: {
    ssr: false,
    // DevTools spawns esbuild workers that trigger EBADF on macOS (nuxt/nuxt#33300)
    devtools: {
      enabled: false,
    },
  },

  devServer: {
    host: '127.0.0.1',
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
        },
        {
          rel: 'alternate',
          type: 'text/plain',
          href: '/llms.txt',
          title: 'LLMs',
        },
        {
          rel: 'alternate',
          type: 'text/markdown',
          href: '/pricing.md',
          title: 'Pricing',
        },
        {
          rel: 'alternate',
          type: 'text/markdown',
          href: '/AGENTS.md',
          title: 'Agents',
        },
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
  devtools: { enabled: false },
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
    build: {
      markdown: {
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
    sources: ['/api/__sitemap__/urls'],
  },

  robots: {
    disallow: ['/playground'],
  },

  // Static og-landinuxt.jpg is used everywhere; disable dynamic OG image generation.
  ogImage: {
    enabled: false,
  },

  routeRules: {
    '/playground': { index: false },
    // Agent .txt exports for LLMs (dynamic server routes)
    '/components/**/*.txt': { headers: { 'cache-control': 'public, max-age=3600' } },
    // Component hub — SSR for SEO; ISR for fast repeat visits
    '/components/**': { isr: 3600 },
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

  compatibilityDate: "2024-10-03",

  sourcemap: false,

  vite: {
    build: {
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        onwarn: ignoreBenignRollupWarnings,
      },
    },
  },

  nitro: {
    rollupConfig: {
      onwarn: ignoreBenignRollupWarnings,
    },
    externals: {
      inline: ['shiki'],
    },
  },
})
