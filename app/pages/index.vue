<template>
  <NuxtLayout name="default">
    <LandingHero />
    <LandingFeatures />
    <LandingFAQ />
    <LandingCTA />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const { generateOrganization, generateWebSite, generateFAQPage, generateSoftwareApplication, addStructuredData } = useStructuredData()

useSeoMeta({
  title: 'Nuxt Landing Page Components — 90+ Copy-Paste Sections',
  ogTitle: 'Nuxt Landing Page Components — 90+ Sections',
  description:
    '90+ free copy-paste Nuxt landing components — hero, features, FAQ, CTA, headers, footers and templates. Built for Nuxt UI v4 with dark mode.',
  ogDescription:
    '90+ pre-built Nuxt landing page components and templates. Copy-paste sections fully integrated with Nuxt UI v4.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterImage: '/og-landinuxt.jpg',
  twitterTitle: 'Nuxt Landing Page Components — 90+ Sections',
  twitterDescription:
    '90+ free copy-paste Nuxt landing page components. Hero, features, FAQ, CTA, and templates for Nuxt UI v4.',
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

addStructuredData(generateOrganization())
addStructuredData(generateWebSite())
addStructuredData(generateSoftwareApplication())
addStructuredData(
  generateFAQPage(
    HOME_FAQ_ITEMS.map((item) => ({
      question: item.label,
      answer: item.content,
    })),
  ),
)

useCanonicalHead()
</script>
