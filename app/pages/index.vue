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
  title: 'AI-Agent-Ready Nuxt Landing Components — 90+ Sections',
  ogTitle: 'AI-Agent-Ready Nuxt Landing Library',
  description:
    'The AI-agent-ready Nuxt landing library. 90+ sections on Nuxt UI v4 with .txt exports, npx landinuxt CLI, and Cursor/Claude prompts.',
  ogDescription:
    '90+ Nuxt landing sections with machine-readable exports and CLI install. Built for Cursor, Claude Code, and Windsurf.',
  ogImage: '/og-landinuxt.jpg',
  ogUrl: `${siteUrlFromConfig(config)}${route.path}`,
  twitterCard: 'summary_large_image',
  twitterImage: '/og-landinuxt.jpg',
  twitterTitle: 'AI-Agent-Ready Nuxt Landing Library',
  twitterDescription:
    '90+ Nuxt landing sections with .txt exports and CLI. The library built for AI coding agents.',
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
