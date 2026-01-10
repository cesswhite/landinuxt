<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Hero" :number="_hero.length"
        description="Discover a wide range of hero sections tailored to engage your audience. Clean and simple to feature-rich designs, these sections are designed to convey your message effectively and captivate users." />
      <ContentList path="/hero" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsHero1 v-if="item.title === ('simple' as HeroTemplates)" />
              <LazyElementsHero2 v-if="item.title === ('main' as HeroTemplates)" />
              <LazyElementsHero3 v-if="item.title === ('half' as HeroTemplates)" />
              <LazyElementsHero4 v-if="item.title === ('marquee' as HeroTemplates)" />
              <LazyElementsHero5 v-if="item.title === ('only-dark' as HeroTemplates)" />
              <LazyElementsHero6 v-if="item.title === ('desaturate' as HeroTemplates)" />
              <LazyElementsHero7 v-if="item.title === ('big' as HeroTemplates)" />
              <LazyElementsHero8 v-if="item.title === ('double-marquee' as HeroTemplates)" />
              <LazyElementsHero9 v-if="item.title === ('split' as HeroTemplates)" />
              <LazyElementsHero10 v-if="item.title === ('space' as HeroTemplates)" />
              <LazyElementsHero11 v-if="item.title === ('management' as HeroTemplates)" />
              <LazyElementsHero12 v-if="item.title === ('care' as HeroTemplates)" />
              <LazyElementsHero13 v-if="item.title === ('ivvi' as HeroTemplates)" />
              <LazyElementsHero14 v-if="item.title === ('luxury' as HeroTemplates)" />
              <LazyElementsHero15 v-if="item.title === ('earth' as HeroTemplates)" />
              <LazyElementsHero16 v-if="item.title === ('next' as HeroTemplates)" />
              <LazyElementsHero17 v-if="item.title === ('coffee' as HeroTemplates)" />
              <LazyElementsHero18 v-if="item.title === ('high-converting' as HeroTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { HeroTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateItemList, generateWebPage, addStructuredData } = useStructuredData()
const _hero = await queryContent("hero").find();

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'Components', icon: 'i-lucide-layers', to: '/components' },
  { label: 'Hero', icon: 'i-lucide-zap' },
])

// Build ItemList for hero components
const heroItems = computed(() => {
  return _hero.map((item, index) => ({
    name: `Nuxt Hero Component ${index + 1}: ${item.title || `Hero ${index + 1}`}`,
    description: item.description || `Pre-built Nuxt hero section component for landing pages. Copy-paste ready, fully compatible with Nuxt UI v4.`,
    url: `/components/hero#${item._path?.replace('/hero/', '') || index + 1}`,
    position: index + 1,
  }))
})

useSeoMeta({
  title: "Nuxt Hero Components: 18+ Pre-built Hero Sections for Landing Pages | LandiNuxt",
  description: "Nuxt landing components: Discover 18+ pre-built Nuxt hero sections to engage your audience. From clean and simple to feature-rich designs with CTAs, animations, and images. Copy-paste ready, fully compatible with Nuxt UI v4.",
  ogTitle: "Nuxt Hero Components: 18+ Pre-built Hero Sections | LandiNuxt",
  ogDescription: "Discover 18+ pre-built Nuxt hero sections. Copy-paste ready hero components with CTAs, animations, and images. Fully compatible with Nuxt UI v4.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Nuxt Hero Components: 18+ Pre-built Hero Sections | LandiNuxt",
  twitterDescription: "Discover 18+ pre-built Nuxt hero sections. Copy-paste ready for Nuxt UI v4.",
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const itemListData = generateItemList(heroItems.value)
addStructuredData(itemListData)

const webPageData = generateWebPage({
  name: 'Nuxt Hero Components for Landing Pages',
  description: 'Browse 18+ pre-built Nuxt hero section components for landing pages. Copy-paste ready hero components with CTAs, animations, and images. Fully compatible with Nuxt UI v4.',
  url: route.path,
  breadcrumb: breadcrumbs,
})
addStructuredData(webPageData)

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    },
  ],
})
</script>
