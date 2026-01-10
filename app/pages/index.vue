<template>
  <NuxtLayout name="default">
    <LandingHero />
    <LandingFeatures />
    <LandingCTA />
  </NuxtLayout>
</template>

<script setup>
const config = useRuntimeConfig()
const route = useRoute()
const { generateOrganization, generateWebSite, addStructuredData } = useStructuredData()

useSeoMeta({
  title: "LandiNuxt | Pre-built Nuxt Landing Components & Templates | Build Landing Pages Faster",
  ogTitle: "LandiNuxt | Pre-built Nuxt Landing Components & Templates",
  description:
    "Build beautiful, responsive Nuxt landing pages faster with pre-built components: Hero, Features, Pricing, FAQ, CTA sections, and complete templates. Fully compatible with Nuxt UI v4. Copy-paste ready, SSR/ISR optimized, dark mode support.",
  ogDescription:
    "Pre-built Nuxt landing page components and templates. Build high-converting landing pages faster with copy-paste components fully integrated with Nuxt UI v4. Perfect for Nuxt developers.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterImage: "/og-landinuxt.jpg",
  twitterTitle: "LandiNuxt | Pre-built Nuxt Landing Components & Templates",
  twitterDescription: "Build beautiful, responsive Nuxt landing pages faster with pre-built components. Copy-paste ready, SSR/ISR optimized, dark mode support.",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

// Structured Data
const organizationData = generateOrganization({
  sameAs: [
    // Add your actual social media profiles here when available
    // Example:
    // 'https://github.com/yourusername/landinuxt',
    // 'https://www.youtube.com/@landinuxt',
    // 'https://twitter.com/landinuxt',
    // 'https://www.linkedin.com/company/landinuxt',
  ],
  logo: `${config.public.siteUrl || 'https://www.landinuxt.com'}/favicon.svg`,
})
addStructuredData(organizationData)

const websiteData = generateWebSite()
addStructuredData(websiteData)

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    },
    {
      rel: 'canonical',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    }
  ]
})
</script>
