<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="FAQ" :number="_faq.length"
                description="Explore our FAQ section to find answers to common questions. We've curated a list of the most frequently asked questions to help you navigate our website with ease." />
            <ContentList path="/faq" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsFAQ1 v-if="item.title === ('simple' as FAQTemplates)" />
                            <LazyElementsFAQ2 v-if="item.title === ('border' as FAQTemplates)" />
                            <LazyElementsFAQ3 v-if="item.title === ('grid' as FAQTemplates)" />
                            <LazyElementsFAQ4 v-if="item.title === ('high-converting' as FAQTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FAQTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _faq = await queryContent("faq").find();

useSeoMeta({
  title: "FAQ Components | LandiNuxt",
  description: "Explore our FAQ section to find answers to common questions. We've curated a list of the most frequently asked questions to help you navigate our website with ease.",
  ogTitle: "FAQ Components | LandiNuxt",
  ogDescription: "Explore our FAQ section to find answers to common questions. We've curated a list of the most frequently asked questions to help you navigate our website with ease.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "FAQ Components | LandiNuxt",
  twitterDescription: "Explore our FAQ section to find answers to common questions. We've curated a list of the most frequently asked questions to help you navigate our website with ease.",
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