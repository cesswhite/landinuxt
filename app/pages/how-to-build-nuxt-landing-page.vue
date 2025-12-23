<template>
  <NuxtLayout name="default">
    <UContainer>
      <!-- Breadcrumbs -->
      <div class="pt-8 pb-4">
        <UBreadcrumb :items="breadcrumbs" />
      </div>

      <!-- Hero Section -->
      <div class="mx-auto text-center pt-12 pb-16 flex flex-col gap-y-4">
        <h1 class="text-4xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-5xl 2xl:text-6xl">
          How to Build a Nuxt Landing Page: Step-by-Step Guide
        </h1>
        <p class="text-xl/7 text-dark-950/60 dark:text-dark-50/50 w-full md:w-2/3 mx-auto md:text-2xl/7">
          Learn how to build a high-converting landing page with Nuxt 3, Nuxt UI v4, and pre-built components. Follow
          this step-by-step guide to launch faster.
        </p>
      </div>

      <!-- Steps -->
      <div class="py-12 space-y-12">
        <div v-for="(step, index) in steps" :key="index" class="flex gap-6">
          <div class="shrink-0">
            <div class="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <span class="text-primary-600 dark:text-primary-400 font-bold text-lg">{{ index + 1 }}</span>
            </div>
          </div>
          <div class="flex-1">
            <UCard>
              <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
                {{ step.name }}
              </h2>
              <div class="prose prose-sm dark:prose-invert max-w-none text-dark-950/80 dark:text-dark-50/80">
                <p class="mb-4">{{ step.text }}</p>
                <div v-if="step.code" class="my-4">
                  <UCodeBlock :code="step.code" language="bash" />
                </div>
                <div v-if="step.codeVue" class="my-4">
                  <UCodeBlock :code="step.codeVue" language="vue" />
                </div>
                <div v-if="step.tips" class="mt-4 p-4 bg-primary-50 dark:bg-primary-950/20 rounded-lg">
                  <p class="font-semibold mb-2 text-dark-950 dark:text-dark-50">💡 Tip:</p>
                  <p class="text-sm text-dark-950/80 dark:text-dark-50/80">{{ step.tips }}</p>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </div>

      <!-- Additional Resources -->
      <div class="py-12 border-t border-dark-200 dark:border-dark-800">
        <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
          Additional Resources
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UCard to="/nuxt-landing-components" class="hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-start gap-4">
              <Icon name="i-lucide-layers" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">
                  Browse Components
                </h3>
                <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                  Explore our collection of pre-built landing page components ready to copy and paste.
                </p>
              </div>
            </div>
          </UCard>
          <UCard to="/nuxt-landing-comparison" class="hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-start gap-4">
              <Icon name="i-lucide-git-compare" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">
                  Compare Libraries
                </h3>
                <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                  Compare Nuxt UI, Shadcn, and free libraries to choose the best for your project.
                </p>
              </div>
            </div>
          </UCard>
          <UCard to="/landings" class="hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-start gap-4">
              <Icon name="i-lucide-layout-template" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">
                  View Templates
                </h3>
                <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                  See complete landing page templates for inspiration and quick starts.
                </p>
              </div>
            </div>
          </UCard>
          <UCard to="https://ui.nuxt.com" external class="hover:shadow-lg transition-shadow cursor-pointer">
            <div class="flex items-start gap-4">
              <Icon name="i-lucide-book-open" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">
                  Nuxt UI Docs
                </h3>
                <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                  Official Nuxt UI documentation for advanced customization and theming.
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>

      <!-- CTA -->
      <div class="py-12 border-t border-dark-200 dark:border-dark-800">
        <UCard class="bg-primary-50 dark:bg-primary-950/20">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
              Ready to Build Your Landing Page?
            </h2>
            <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-6">
              Start with our pre-built components and launch your landing page today.
            </p>
            <div class="flex gap-4 justify-center">
              <UButton to="/nuxt-landing-components" size="lg" color="primary">
                Browse Components
              </UButton>
              <UButton to="/landings" size="lg" variant="outline">
                View Templates
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateHowTo, addStructuredData } = useStructuredData()

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'How to Build Nuxt Landing Page', icon: 'i-lucide-book-open' },
])

// Steps for the guide
const steps = [
  {
    name: 'Create Nuxt 3 App',
    text: 'Start by creating a new Nuxt 3 project. Use the official Nuxt CLI to scaffold your application with the latest features and best practices.',
    code: 'npx nuxi@latest init my-landing-page\ncd my-landing-page\nnpm install',
    tips: 'Make sure you have Node.js 18+ installed. Consider using pnpm or bun for faster installs.',
  },
  {
    name: 'Install Nuxt UI v4',
    text: 'Install Nuxt UI v4, the official UI library for Nuxt. This provides the foundation for all our components and ensures compatibility.',
    code: 'npm install @nuxt/ui',
    codeVue: 'Add @nuxt/ui to your nuxt.config.ts modules array',
    tips: 'Nuxt UI includes Tailwind CSS, so you don\'t need to install it separately. The module handles all configuration automatically.',
  },
  {
    name: 'Add Hero, Features, Pricing Components',
    text: 'Copy and paste pre-built components from LandiNuxt. Start with a Hero section, add Features, and include a Pricing or CTA section. Each component is ready to use and fully customizable.',
    codeVue: 'Import and use pre-built components like ElementsHero1, ElementsFeatures1, and ElementsCTA1 in your page template',
    tips: 'Browse our component library at /components to find the perfect sections for your landing page. All components are copy-paste ready.',
  },
  {
    name: 'Configure SSR/ISR',
    text: 'Optimize your landing page for performance by configuring server-side rendering (SSR) or incremental static regeneration (ISR). This improves Core Web Vitals and SEO.',
    codeVue: 'Add routeRules to your nuxt.config.ts with prerender for static pages or isr for pages that need periodic updates',
    tips: 'Use prerender for static pages and ISR for pages that need periodic updates. This gives you the best of both worlds: speed and freshness.',
  },
  {
    name: 'Implement Metadata (Title, Description, OG/Twitter)',
    text: 'Add proper SEO metadata to your landing page. Include title, description, Open Graph tags, and Twitter cards for better social sharing and search engine visibility.',
    codeVue: 'Use useSeoMeta composable to add title, description, ogTitle, ogDescription, ogImage, and twitterCard metadata',
    tips: 'Use @nuxtjs/seo module for automatic sitemap, robots.txt, and enhanced metadata. It handles all the technical SEO for you.',
  },
  {
    name: 'Measure and Iterate with Lighthouse',
    text: 'Test your landing page performance using Google Lighthouse. Aim for LCP < 2.0s, INP < 200ms, and CLS < 0.1. Optimize images, lazy-load below-the-fold content, and minimize JavaScript.',
    code: 'npm run build\nnpm run preview\n# Then open Chrome DevTools > Lighthouse',
    tips: 'Use Nuxt Image component for automatic image optimization. Enable lazy loading for components below the fold. Consider using routeRules for ISR to improve performance.',
  },
]

// SEO Meta
useSeoMeta({
  title: 'How to Build a Nuxt Landing Page: Step-by-Step Guide | LandiNuxt',
  description:
    'Learn how to build a high-converting Nuxt landing page with Nuxt UI v4. Step-by-step guide covering setup, components, SSR/ISR, metadata, and performance optimization.',
  ogTitle: 'How to Build a Nuxt Landing Page: Step-by-Step Guide',
  ogDescription:
    'Learn how to build a high-converting Nuxt landing page with Nuxt UI v4. Complete guide with code examples and best practices.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'How to Build a Nuxt Landing Page: Step-by-Step Guide',
  twitterDescription:
    'Learn how to build a high-converting Nuxt landing page with Nuxt UI v4. Complete guide with code examples.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

// Structured Data - HowTo
const howToData = generateHowTo({
  name: 'How to Build a Nuxt Landing Page',
  description:
    'Step-by-step guide to building a high-converting landing page with Nuxt 3, Nuxt UI v4, and pre-built components.',
  steps: steps.map((step) => ({
    name: step.name,
    text: step.text,
    url: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}#step-${steps.indexOf(step) + 1}`,
  })),
})
addStructuredData(howToData)

// Breadcrumb structured data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    },
    {
      rel: 'alternate',
      hreflang: 'es',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}/es/como-crear-landing-nuxt`,
    },
    {
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    },
  ],
})
</script>