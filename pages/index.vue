<template>
  <NuxtLayout name="default">
    <LandingHero />
    <LandingFeatures />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: "LandiNuxt | Effortless Landing Page Creation",
  ogTitle: "LandiNuxt | Effortless Landing Page Creation",
  description:
    "Build beautiful, responsive landing pages effortlessly with LandiNuxt. Access a curated library of pre-built components, streamline your design workflow, and deploy faster.",
  ogDescription:
    "Create stunning landing pages with ease using LandiNuxt's pre-built components library. Perfect for developers looking to accelerate their projects without compromising on quality.",
  ogImage: "/og-landinuxt.jpg",
  twitterCard: "summary_large_image",
});

</script>
