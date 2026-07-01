<template>
  <NuxtLayout name="default">
    <UContainer>
      <div class="pt-8 pb-4">
        <UBreadcrumb :items="breadcrumbs" />
      </div>

      <div class="mx-auto flex flex-col gap-y-4 pt-12 pb-16 text-center">
        <h1
          class="text-4xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-5xl 2xl:text-6xl"
        >
          LandiNuxt vs Tailwind UI for Nuxt Landing Pages
        </h1>
        <p
          class="mx-auto w-full text-xl/7 text-dark-950/60 dark:text-dark-50/50 md:w-2/3 md:text-2xl/7"
        >
          Tailwind UI is framework-agnostic HTML. LandiNuxt is Nuxt-native, Nuxt UI v4-native, and
          built for AI coding agents.
        </p>
        <p class="text-sm text-dark-950/50 dark:text-dark-50/40">
          Last updated: {{ LAST_UPDATED }}
        </p>
      </div>

      <div class="overflow-x-auto py-8">
        <table class="w-full border-collapse">
          <thead>
            <tr class="border-b border-dark-200 dark:border-dark-800">
              <th class="p-4 text-left font-semibold text-dark-950 dark:text-dark-50">Feature</th>
              <th class="p-4 text-left font-semibold text-dark-950 dark:text-dark-50">LandiNuxt</th>
              <th class="p-4 text-left font-semibold text-dark-950 dark:text-dark-50">Tailwind UI</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row.feature"
              class="border-b border-dark-100 dark:border-dark-900"
            >
              <td class="p-4 font-medium text-dark-950 dark:text-dark-50">{{ row.feature }}</td>
              <td class="p-4 text-dark-950/80 dark:text-dark-50/80">{{ row.landinuxt }}</td>
              <td class="p-4 text-dark-950/80 dark:text-dark-50/80">{{ row.tailwindUi }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="grid gap-6 py-8 md:grid-cols-2">
        <UCard>
          <h2 class="mb-3 text-xl font-bold text-dark-950 dark:text-dark-50">Choose LandiNuxt if…</h2>
          <ul class="list-disc space-y-2 pl-5 text-dark-950/80 dark:text-dark-50/80">
            <li>You build with Nuxt 4 and Nuxt UI v4</li>
            <li>You want Vue SFCs, not React or raw HTML</li>
            <li>You use Cursor, Claude Code, or Windsurf</li>
            <li>You need CLI install and .txt agent exports</li>
            <li>You want a free MIT library focused on landings</li>
          </ul>
          <UButton to="/for-agents" class="mt-4">See agent workflow</UButton>
        </UCard>
        <UCard>
          <h2 class="mb-3 text-xl font-bold text-dark-950 dark:text-dark-50">Choose Tailwind UI if…</h2>
          <ul class="list-disc space-y-2 pl-5 text-dark-950/80 dark:text-dark-50/80">
            <li>You need official Tailwind Labs design patterns</li>
            <li>You work across React, Vue, or plain HTML</li>
            <li>You already pay for Tailwind Plus / UI license</li>
            <li>You want application UI, not just marketing sections</li>
          </ul>
          <UButton to="https://tailwindui.com" external target="_blank" variant="outline" class="mt-4">
            Visit Tailwind UI
          </UButton>
        </UCard>
      </div>

      <UCard class="mb-16 bg-primary-50 dark:bg-primary-950/20">
        <div class="text-center">
          <h2 class="mb-4 text-2xl font-bold text-dark-950 dark:text-dark-50">
            Build your Nuxt landing in minutes
          </h2>
          <UCodeBlock code="npx landinuxt add hero/simple" language="bash" class="mx-auto max-w-md" />
          <UButton to="/components" size="lg" class="mt-6">Browse sections</UButton>
        </div>
      </UCard>
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbList, generateArticle, addStructuredData } = useStructuredData()

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'LandiNuxt vs Tailwind UI', icon: 'i-lucide-git-compare' },
]

const rows = [
  { feature: 'Framework', landinuxt: 'Nuxt 4 + Vue SFC', tailwindUi: 'HTML / React / Vue snippets' },
  { feature: 'UI layer', landinuxt: 'Nuxt UI v4', tailwindUi: 'Raw Tailwind CSS' },
  { feature: 'Price', landinuxt: 'Free (MIT)', tailwindUi: 'Paid (Tailwind Plus)' },
  { feature: 'Landing sections', landinuxt: '90+ ready sections', tailwindUi: 'Marketing + app templates' },
  { feature: 'AI agent exports', landinuxt: 'Yes (.txt + CLI)', tailwindUi: 'No' },
  { feature: 'CLI install', landinuxt: 'npx landinuxt add', tailwindUi: 'Manual copy' },
  { feature: 'Dark mode', landinuxt: 'Built-in on all sections', tailwindUi: 'Available in templates' },
  { feature: 'Best for', landinuxt: 'Nuxt landing pages + agents', tailwindUi: 'Multi-stack Tailwind projects' },
]

useSeoMeta({
  title: 'LandiNuxt vs Tailwind UI — Nuxt Landing Page Comparison',
  description:
    'Compare LandiNuxt and Tailwind UI for Nuxt landing pages. Nuxt UI v4 sections, AI agent exports, CLI install, and free MIT license vs paid Tailwind templates.',
  ogTitle: 'LandiNuxt vs Tailwind UI',
  ogDescription:
    'Which is better for Nuxt landing pages? LandiNuxt offers Vue SFCs, Nuxt UI v4, and AI agent integration. Tailwind UI offers paid multi-framework HTML.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'LandiNuxt vs Tailwind UI',
  twitterDescription: 'Nuxt-native landing sections vs Tailwind UI templates — compared.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

addStructuredData(generateBreadcrumbList(breadcrumbs))
addStructuredData(
  generateArticle({
    headline: 'LandiNuxt vs Tailwind UI for Nuxt Landing Pages',
    description:
      'Feature comparison between LandiNuxt and Tailwind UI for building Nuxt marketing sites.',
    datePublished: '2026-01-01',
    dateModified: '2026-07-01',
  }),
)

useCanonicalHead()
</script>
