<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Features" :number="_features.length"
        description="Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience." />
      <ContentList path="/features" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsFeatures1 v-if="item.title === ('elegance' as FeaturesTemplates)" />
              <LazyElementsFeatures2 v-if="item.title === ('puzzle' as FeaturesTemplates)" />
              <LazyElementsFeatures3 v-if="item.title === ('explore' as FeaturesTemplates)" />
              <LazyElementsFeatures4 v-if="item.title === ('central' as FeaturesTemplates)" />
              <LazyElementsFeatures5 v-if="item.title === ('mush' as FeaturesTemplates)" />
              <LazyElementsFeatures6 v-if="item.title === ('flex' as FeaturesTemplates)" />
              <LazyElementsFeatures7 v-if="item.title === ('trebol' as FeaturesTemplates)" />
              <LazyElementsFeatures8 v-if="item.title === ('portrait' as FeaturesTemplates)" />
              <LazyElementsFeatures9 v-if="item.title === ('classic' as FeaturesTemplates)" />
              <LazyElementsFeatures10 v-if="item.title === ('ancient' as FeaturesTemplates)" />
              <LazyElementsFeatures11 v-if="item.title === ('luxury' as FeaturesTemplates)" />
              <LazyElementsFeatures12 v-if="item.title === ('bento' as FeaturesTemplates)" />
              <LazyElementsFeatures13 v-if="item.title === ('high-converting' as FeaturesTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { FeaturesTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateItemList, generateWebPage, addStructuredData } = useStructuredData()
const _features = await queryContent("features").find();

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'Components', icon: 'i-lucide-layers', to: '/components' },
  { label: 'Features', icon: 'i-lucide-star' },
])

// Build ItemList for feature components
const featureItems = computed(() => {
  return _features.map((item, index) => ({
    name: `Nuxt Feature Component ${index + 1}: ${item.title || `Feature ${index + 1}`}`,
    description: item.description || `Pre-built Nuxt feature section component for landing pages. Copy-paste ready, fully compatible with Nuxt UI v4.`,
    url: `/components/features#${item._path?.replace('/features/', '') || index + 1}`,
    position: index + 1,
  }))
})

useSeoMeta({
  title: "Nuxt Feature Components: 13+ Pre-built Feature Sections for Landing Pages | LandiNuxt",
  description: "Nuxt landing components: Discover 13+ pre-built Nuxt feature sections to showcase your product benefits. From minimalist to feature-packed designs with icons, images, and descriptions. Copy-paste ready, fully compatible with Nuxt UI v4.",
  ogTitle: "Nuxt Feature Components: 13+ Pre-built Feature Sections | LandiNuxt",
  ogDescription: "Discover 13+ pre-built Nuxt feature sections. Copy-paste ready feature components with icons, images, and descriptions. Fully compatible with Nuxt UI v4.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Nuxt Feature Components: 13+ Pre-built Feature Sections | LandiNuxt",
  twitterDescription: "Discover 13+ pre-built Nuxt feature sections. Copy-paste ready for Nuxt UI v4.",
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const itemListData = generateItemList(featureItems.value)
addStructuredData(itemListData)

const webPageData = generateWebPage({
  name: 'Nuxt Feature Components for Landing Pages',
  description: 'Browse 13+ pre-built Nuxt feature section components for landing pages. Copy-paste ready feature components with icons, images, and descriptions. Fully compatible with Nuxt UI v4.',
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
