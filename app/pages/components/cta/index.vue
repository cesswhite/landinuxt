<template>
  <NuxtLayout name="default">
    <div class="relative w-full px-4 py-24">
      <ElementsHeader name="CTA" :number="_cta.length"
        description="Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers." />
      <ContentList path="/cta" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsCTA1 v-if="item.title === ('simple' as CTATemplates)" />
              <LazyElementsCTA2 v-if="item.title === ('social' as CTATemplates)" />
              <LazyElementsCTA3 v-if="item.title === ('serif' as CTATemplates)" />
              <LazyElementsCTA4 v-if="item.title === ('art' as CTATemplates)" />
              <LazyElementsCTA5 v-if="item.title === ('solid' as CTATemplates)" />
              <LazyElementsCTA6 v-if="item.title === ('gradient' as CTATemplates)" />
              <LazyElementsCTA7 v-if="item.title === ('app' as CTATemplates)" />
              <LazyElementsCTA8 v-if="item.title === ('connect' as CTATemplates)" />
              <LazyElementsCTA9 v-if="item.title === ('saturate' as CTATemplates)" />
              <LazyElementsCTA10 v-if="item.title === ('overflow' as CTATemplates)" />
              <LazyElementsCTA11 v-if="item.title === ('sparkles' as CTATemplates)" />
              <LazyElementsCTA12 v-if="item.title === ('high-converting' as CTATemplates)" />
              <LazyElementsCTA13 v-if="item.title === ('heading' as CTATemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { CTATemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _cta = await queryContent("cta").find();

useSeoMeta({
  title: "CTA Components | LandiNuxt",
  description: "Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers.",
  ogTitle: "CTA Components | LandiNuxt",
  ogDescription: "Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "CTA Components | LandiNuxt",
  twitterDescription: "Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers.",
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
