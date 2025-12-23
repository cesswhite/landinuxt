<template>
  <NuxtLayout name="default">
    <LandingHero />
    <LandingFeatures />
    <LandingCTA />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "LandiNuxt | Effortless Landing Page Creation",
  ogTitle: "LandiNuxt | Effortless Landing Page Creation",
  description:
    "Build beautiful, responsive landing pages effortlessly with LandiNuxt. Access a curated library of pre-built components, streamline your design workflow, and deploy faster.",
  ogDescription:
    "Create stunning landing pages with ease using LandiNuxt's pre-built components library. Perfect for  Nuxt developers looking to accelerate their projects without compromising on quality.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: 'https://www.landinuxt.com/',
  twitterCard: "summary_large_image",
  twitterImage: "/og-landinuxt.jpg",
  twitterTitle: "LandiNuxt | Effortless Landing Page Creation",
  twitterDescription: "Build beautiful, responsive landing pages effortlessly with LandiNuxt. Access a curated library of pre-built components, streamline your design workflow, and deploy faster.",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})
</script>
