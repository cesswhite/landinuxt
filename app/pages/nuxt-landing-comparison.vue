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
          Nuxt UI vs Shadcn vs LandiNuxt: Which is Best for Your Landing Page?
        </h1>
        <p class="text-xl/7 text-dark-950/60 dark:text-dark-50/50 w-full md:w-2/3 mx-auto md:text-2xl/7">
          Compare Nuxt UI, Shadcn for Nuxt, and LandiNuxt — the AI-agent-ready landing library for Nuxt UI v4.
        </p>
        <p class="text-sm text-dark-950/50 dark:text-dark-50/40">
          Last updated: {{ LAST_UPDATED }}
        </p>
      </div>

      <!-- Comparison Table -->
      <div class="py-12">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-dark-200 dark:border-dark-800">
                <th class="text-left p-4 font-semibold text-dark-950 dark:text-dark-50">Feature</th>
                <th class="text-left p-4 font-semibold text-dark-950 dark:text-dark-50">Nuxt UI</th>
                <th class="text-left p-4 font-semibold text-dark-950 dark:text-dark-50">Shadcn (Nuxt)</th>
                <th class="text-left p-4 font-semibold text-dark-950 dark:text-dark-50">LandiNuxt</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonTable"
                :key="row.feature"
                class="border-b border-dark-100 dark:border-dark-900"
              >
                <td class="p-4 font-medium text-dark-950 dark:text-dark-50">{{ row.feature }}</td>
                <td class="p-4 text-dark-950/80 dark:text-dark-50/80">
                  <div class="flex items-center gap-2">
                    <Icon
                      v-if="row.nuxtUi === 'yes'"
                      name="i-lucide-check"
                      class="w-5 h-5 text-green-600 dark:text-green-400"
                    />
                    <Icon
                      v-else-if="row.nuxtUi === 'partial'"
                      name="i-lucide-minus"
                      class="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                    />
                    <Icon
                      v-else
                      name="i-lucide-x"
                      class="w-5 h-5 text-red-600 dark:text-red-400"
                    />
                    <span>{{ formatValue(row.nuxtUi) }}</span>
                  </div>
                </td>
                <td class="p-4 text-dark-950/80 dark:text-dark-50/80">
                  <div class="flex items-center gap-2">
                    <Icon
                      v-if="row.shadcn === 'yes'"
                      name="i-lucide-check"
                      class="w-5 h-5 text-green-600 dark:text-green-400"
                    />
                    <Icon
                      v-else-if="row.shadcn === 'partial'"
                      name="i-lucide-minus"
                      class="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                    />
                    <Icon
                      v-else
                      name="i-lucide-x"
                      class="w-5 h-5 text-red-600 dark:text-red-400"
                    />
                    <span>{{ formatValue(row.shadcn) }}</span>
                  </div>
                </td>
                <td class="p-4 text-dark-950/80 dark:text-dark-50/80">
                  <div class="flex items-center gap-2">
                    <Icon
                      v-if="row.landinuxt === 'yes'"
                      name="i-lucide-check"
                      class="w-5 h-5 text-green-600 dark:text-green-400"
                    />
                    <Icon
                      v-else-if="row.landinuxt === 'partial'"
                      name="i-lucide-minus"
                      class="w-5 h-5 text-yellow-600 dark:text-yellow-400"
                    />
                    <Icon
                      v-else
                      name="i-lucide-x"
                      class="w-5 h-5 text-red-600 dark:text-red-400"
                    />
                    <span>{{ formatValue(row.landinuxt) }}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Detailed Sections -->
      <div class="py-12 space-y-12">
        <!-- Nuxt UI Section -->
        <UCard>
          <div class="flex items-start gap-4 mb-4">
            <div class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
              <Icon name="i-lucide-package" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-2 text-dark-950 dark:text-dark-50">Nuxt UI</h2>
              <p class="text-dark-950/60 dark:text-dark-50/60 mb-4">
                The official UI library for Nuxt, built by the Nuxt team. Best for projects that want deep integration with the Nuxt ecosystem.
              </p>
              <div class="space-y-2">
                <h3 class="font-semibold text-dark-950 dark:text-dark-50">Pros:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Official Nuxt support and maintenance</li>
                  <li>Built-in theming and color mode</li>
                  <li>Excellent TypeScript support</li>
                  <li>Optimized for SSR/ISR</li>
                  <li>Comprehensive documentation</li>
                </ul>
                <h3 class="font-semibold text-dark-950 dark:text-dark-50 mt-4">Cons:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Smaller component library compared to Shadcn</li>
                  <li>Less customization flexibility than copy-paste solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Shadcn Section -->
        <UCard>
          <div class="flex items-start gap-4 mb-4">
            <div class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
              <Icon name="i-lucide-box" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-2 text-dark-950 dark:text-dark-50">Shadcn for Nuxt</h2>
              <p class="text-dark-950/60 dark:text-dark-50/60 mb-4">
                A Nuxt port of the popular Shadcn UI components. You copy components into your project, giving you full control.
              </p>
              <div class="space-y-2">
                <h3 class="font-semibold text-dark-950 dark:text-dark-50">Pros:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Large component library</li>
                  <li>Full control over component code</li>
                  <li>Highly customizable</li>
                  <li>Based on Radix Vue primitives</li>
                  <li>Great for complex UIs</li>
                </ul>
                <h3 class="font-semibold text-dark-950 dark:text-dark-50 mt-4">Cons:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Requires more setup and configuration</li>
                  <li>You maintain the copied code</li>
                  <li>Less integrated with Nuxt ecosystem</li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- LandiNuxt Section -->
        <UCard>
          <div class="flex items-start gap-4 mb-4">
            <div class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900">
              <Icon name="i-lucide-bot" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl font-bold mb-2 text-dark-950 dark:text-dark-50">LandiNuxt</h2>
              <p class="text-dark-950/60 dark:text-dark-50/60 mb-4">
                The AI-agent-ready Nuxt landing library. 90+ copy-paste sections with machine-readable .txt exports, CLI install, and Cursor/Claude prompts.
              </p>
              <div class="space-y-2">
                <h3 class="font-semibold text-dark-950 dark:text-dark-50">Pros:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Complete landing sections, not just UI primitives</li>
                  <li>AI agent integration (.txt exports, CLI, Cursor rule)</li>
                  <li>Built specifically for Nuxt UI v4</li>
                  <li>MIT licensed, copy-paste ready</li>
                  <li>Dark mode on every section</li>
                </ul>
                <h3 class="font-semibold text-dark-950 dark:text-dark-50 mt-4">Cons:</h3>
                <ul class="list-disc list-inside space-y-1 text-dark-950/80 dark:text-dark-50/80">
                  <li>Landing-focused — not a general UI kit</li>
                  <li>You maintain copied section code</li>
                </ul>
              </div>
              <UButton to="/for-agents" class="mt-4" size="sm">
                See agent workflow
              </UButton>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Recommendations -->
      <div class="py-12 border-t border-dark-200 dark:border-dark-800">
        <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">Recommendations by Use Case</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UCard>
            <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">MVP / Quick Launch</h3>
            <p class="text-sm text-dark-950/60 dark:text-dark-50/60 mb-4">
              Need to ship fast? Use LandiNuxt for ready landing sections with CLI install and AI agent support.
            </p>
            <UButton to="/for-agents" size="sm" variant="outline">
              For AI Agents
            </UButton>
          </UCard>
          <UCard>
            <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">Enterprise / Long-term</h3>
            <p class="text-sm text-dark-950/60 dark:text-dark-50/60 mb-4">
              Building a product that will scale? Choose Nuxt UI for official support and ecosystem integration.
            </p>
            <UButton
              to="https://ui.nuxt.com"
              external
              size="sm"
              variant="outline"
            >
              Visit Nuxt UI
            </UButton>
          </UCard>
          <UCard>
            <h3 class="font-semibold text-lg mb-2 text-dark-950 dark:text-dark-50">Content-heavy / Blog</h3>
            <p class="text-sm text-dark-950/60 dark:text-dark-50/60 mb-4">
              Need complex layouts? Shadcn offers more components and customization options for unique designs.
            </p>
            <UButton
              to="https://www.shadcn-vue.com"
              external
              size="sm"
              variant="outline"
            >
              Visit Shadcn
            </UButton>
          </UCard>
        </div>
      </div>

      <!-- CTA -->
      <div class="py-12 border-t border-dark-200 dark:border-dark-800">
        <UCard class="bg-primary-50 dark:bg-primary-950/20">
          <div class="text-center">
            <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
              Ready to Start Building?
            </h2>
            <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-6">
              Explore our free Nuxt landing components and start building your landing page today.
            </p>
            <UButton to="/nuxt-landing-components" size="lg" color="primary">
              Browse Components
            </UButton>
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
const { generateBreadcrumbList, generateArticle, addStructuredData } = useStructuredData()

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'Nuxt Landing Comparison', icon: 'i-lucide-git-compare' },
])

// Comparison table data
const comparisonTable = [
  {
    feature: 'Landing Page Sections',
    nuxtUi: 'partial',
    shadcn: 'partial',
    landinuxt: 'yes',
  },
  {
    feature: 'AI Agent Integration',
    nuxtUi: 'no',
    shadcn: 'no',
    landinuxt: 'yes',
  },
  {
    feature: 'CLI Install',
    nuxtUi: 'no',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'Component Coverage',
    nuxtUi: 'partial',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'Nuxt Ecosystem Integration',
    nuxtUi: 'yes',
    shadcn: 'partial',
    landinuxt: 'yes',
  },
  {
    feature: 'Theming & Customization',
    nuxtUi: 'yes',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'Accessibility (a11y)',
    nuxtUi: 'yes',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'SSR/ISR Optimization',
    nuxtUi: 'yes',
    shadcn: 'partial',
    landinuxt: 'yes',
  },
  {
    feature: 'TypeScript Support',
    nuxtUi: 'yes',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'Documentation',
    nuxtUi: 'yes',
    shadcn: 'yes',
    landinuxt: 'yes',
  },
  {
    feature: 'License',
    nuxtUi: 'MIT',
    shadcn: 'MIT',
    landinuxt: 'MIT',
  },
  {
    feature: 'Cost',
    nuxtUi: 'Free',
    shadcn: 'Free',
    landinuxt: 'Free',
  },
  {
    feature: 'Maintenance',
    nuxtUi: 'Official',
    shadcn: 'Community',
    landinuxt: 'Community',
  },
]

const formatValue = (value: string) => {
  if (value === 'yes') return 'Yes'
  if (value === 'partial') return 'Partial'
  if (value === 'no') return 'No'
  return value
}

// SEO Meta
useSeoMeta({
  title: 'Nuxt UI vs Shadcn vs LandiNuxt — Compared',
  description:
    'Compare Nuxt UI, Shadcn for Nuxt, and LandiNuxt. Feature matrices including AI agent integration, CLI install, and recommendations for MVP and enterprise.',
  ogTitle: 'Nuxt UI vs Shadcn vs LandiNuxt — Compared',
  ogDescription:
    'Compare Nuxt UI, Shadcn, and LandiNuxt — the AI-agent-ready landing library for Nuxt UI v4.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Nuxt UI vs Shadcn vs Free Libraries — Compared',
  twitterDescription:
    'Compare Nuxt UI, Shadcn, and free libraries. Find the best component library for your Nuxt landing page project.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const articleData = generateArticle({
  headline: 'Nuxt UI vs Shadcn vs LandiNuxt: Which is Best for Your Landing Page?',
  description:
    'Compare Nuxt UI, Shadcn for Nuxt, and LandiNuxt. Feature matrices including AI agent integration and CLI install.',
  datePublished: '2024-01-01',
  dateModified: '2026-05-01',
})
addStructuredData(articleData)

useCanonicalHead()
</script>

