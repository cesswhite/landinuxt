<template>
  <NuxtLayout name="default">
    <UContainer>
      <div class="pt-8 pb-4">
        <UBreadcrumb :items="breadcrumbs" />
      </div>

      <div class="mx-auto text-center pt-12 pb-16 flex flex-col gap-y-4">
        <h1 class="text-4xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-5xl 2xl:text-6xl">
          Cómo Crear una Landing Page con Nuxt: Guía Paso a Paso
        </h1>
        <p class="text-xl/7 text-dark-950/60 dark:text-dark-50/50 w-full md:w-2/3 mx-auto md:text-2xl/7">
          Aprende a construir una landing page de alta conversión con Nuxt, Nuxt UI v4 y componentes pre-construidos de
          LandiNuxt.
        </p>
        <p class="text-sm text-dark-950/50 dark:text-dark-50/40">
          Última actualización: {{ LAST_UPDATED }}
        </p>
      </div>

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
              <p class="text-dark-950/80 dark:text-dark-50/80">{{ step.text }}</p>
            </UCard>
          </div>
        </div>
      </div>

      <div class="py-12 border-t border-dark-200 dark:border-dark-800">
        <div class="flex gap-4 justify-center flex-wrap">
          <UButton to="/es/nuxt-componentes-landing" size="lg" color="primary">
            Ver Componentes
          </UButton>
          <UButton to="/how-to-build-nuxt-landing-page" size="lg" variant="outline">
            English Guide
          </UButton>
        </div>
      </div>
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbList, generateHowTo, addStructuredData } = useStructuredData()

const breadcrumbs = [
  { label: 'Inicio', icon: 'i-lucide-home', to: '/' },
  { label: 'Cómo Crear Landing Nuxt', icon: 'i-lucide-book-open' },
]

const steps = [
  {
    name: 'Crear proyecto Nuxt',
    text: 'Inicia un proyecto Nuxt con el CLI oficial: npx nuxi@latest init mi-landing-page',
  },
  {
    name: 'Instalar Nuxt UI v4',
    text: 'Instala @nuxt/ui y añádelo al array modules en nuxt.config.ts. Incluye Tailwind CSS automáticamente.',
  },
  {
    name: 'Añadir componentes LandiNuxt',
    text: 'Copia secciones Hero, Features y CTA desde /components y pégalas en tu proyecto. Cada componente es autocontenido.',
  },
  {
    name: 'Configurar SSR/ISR',
    text: 'Usa routeRules con prerender para páginas estáticas o isr para contenido que se actualiza periódicamente. Mejora Core Web Vitals y SEO.',
  },
  {
    name: 'Implementar metadata SEO',
    text: 'Añade title, description y Open Graph con useSeoMeta. Usa @nuxtjs/seo para sitemap y robots.txt automáticos.',
  },
  {
    name: 'Medir con Lighthouse',
    text: 'Objetivo: LCP < 2.5s, INP < 200ms, CLS < 0.1. Usa Nuxt Image y lazy loading para optimizar.',
  },
]

useSeoMeta({
  title: 'Cómo Crear una Landing Page con Nuxt — Guía',
  description:
    'Guía paso a paso para crear landing pages con Nuxt UI v4 y componentes LandiNuxt. Setup, componentes, SSR/ISR y optimización SEO.',
  ogTitle: 'Cómo Crear una Landing Page con Nuxt — Guía',
  ogDescription:
    'Aprende a construir landing pages de alta conversión con Nuxt UI v4 y componentes copy-paste de LandiNuxt.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Cómo Crear una Landing Page con Nuxt',
  twitterDescription: 'Guía paso a paso con Nuxt UI v4 y LandiNuxt.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

addStructuredData(
  generateHowTo({
    name: 'Cómo Crear una Landing Page con Nuxt',
    description:
      'Guía paso a paso para construir landing pages con Nuxt, Nuxt UI v4 y componentes pre-construidos.',
    steps: steps.map((step, index) => ({
      name: step.name,
      text: step.text,
      url: `${siteUrlFromConfig(config)}${route.path}#step-${index + 1}`,
    })),
  }),
)
addStructuredData(generateBreadcrumbList(breadcrumbs))

const siteUrl = siteUrlFromConfig(config)
useCanonicalHead({
  lang: 'es',
  alternates: [
    { hreflang: 'en', href: `${siteUrl}/how-to-build-nuxt-landing-page` },
    { hreflang: 'es', href: `${siteUrl}${route.path}` },
    { hreflang: 'x-default', href: `${siteUrl}/how-to-build-nuxt-landing-page` },
  ],
})
</script>
