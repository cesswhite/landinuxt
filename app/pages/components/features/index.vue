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
const _features = await queryContent("features").find();

useSeoMeta({
  title: "Feature Components | LandiNuxt",
  description: "Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience.",
  ogTitle: "Feature Components | LandiNuxt",
  ogDescription: "Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Feature Components | LandiNuxt",
  twitterDescription: "Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience.",
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
