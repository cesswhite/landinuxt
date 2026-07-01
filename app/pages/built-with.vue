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
          Built with LandiNuxt
        </h1>
        <p
          class="mx-auto w-full text-xl/7 text-dark-950/60 dark:text-dark-50/50 md:w-2/3 md:text-2xl/7"
        >
          Real sites and launches assembled from LandiNuxt sections — not mockups.
        </p>
      </div>

      <div class="grid gap-8 pb-16 md:grid-cols-2">
        <UCard
          v-for="entry in BUILT_WITH_SHOWCASE"
          :key="entry.name"
          class="overflow-hidden"
        >
          <div class="flex flex-col gap-4">
            <div class="aspect-video overflow-hidden rounded-lg bg-dark-100 dark:bg-dark-900">
              <NuxtImg
                :src="entry.image"
                :alt="`${entry.name} built with LandiNuxt`"
                class="size-full object-cover"
                format="webp"
              />
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <UBadge v-if="entry.tag" color="primary" variant="subtle">
                {{ entry.tag }}
              </UBadge>
              <UBadge
                v-for="section in entry.sections"
                :key="section"
                color="neutral"
                variant="outline"
              >
                {{ section }}
              </UBadge>
            </div>
            <h2 class="text-xl font-bold text-dark-950 dark:text-dark-50">
              {{ entry.name }}
            </h2>
            <p class="text-dark-950/70 dark:text-dark-50/70">
              {{ entry.description }}
            </p>
            <UButton
              :to="entry.url"
              target="_blank"
              trailing-icon="i-lucide-external-link"
              variant="outline"
            >
              Visit site
            </UButton>
          </div>
        </UCard>
      </div>

      <UCard class="mb-16 bg-primary-50 dark:bg-primary-950/20">
        <div class="flex flex-col items-center gap-4 text-center">
          <h2 class="text-2xl font-bold text-dark-950 dark:text-dark-50">
            Shipped yours with LandiNuxt?
          </h2>
          <p class="max-w-lg text-dark-950/70 dark:text-dark-50/70">
            Open a PR to add your site to this page — include the URL, screenshot, and which
            sections you used.
          </p>
          <UButton
            to="https://github.com/cesswhite/landingnuxt"
            target="_blank"
            trailing-icon="i-lucide-github"
          >
            Contribute on GitHub
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
import { BUILT_WITH_SHOWCASE } from '~/utils/builtWithShowcase'

const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbList, addStructuredData } = useStructuredData()

const breadcrumbs: BreadcrumbItem[] = [
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'Built With', icon: 'i-lucide-rocket' },
]

useSeoMeta({
  title: 'Built with LandiNuxt — Real Landing Pages',
  description:
    'See real sites and product launches built with LandiNuxt sections. Proof that copy-paste Nuxt landing components ship to production.',
  ogTitle: 'Built with LandiNuxt',
  ogDescription:
    'Real landing pages and SaaS launches built with LandiNuxt sections on Nuxt UI v4.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterTitle: 'Built with LandiNuxt',
  twitterDescription: 'Real sites built with LandiNuxt landing sections.',
  twitterImage: '/og-landinuxt.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

addStructuredData(generateBreadcrumbList(breadcrumbs))
useCanonicalHead()
</script>
