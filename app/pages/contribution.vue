<template>
    <NuxtLayout name="default">
        <div class="relative w-full py-24 px-4 max-w-max mx-auto">
            <div class="mb-12">
                <h1 class="mt-1 text-5xl font-bold capitalize text-dark-950 dark:text-dark-50">
                    Contribution Guide
                </h1>
            </div>
            <div class="">
                <ContentDoc path="/contribution" class="prose dark:prose-invert" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: "Contribution Guide | LandiNuxt",
  description: "Learn how to contribute to LandiNuxt. Help us build better landing page components for the Nuxt community. Find guidelines, code standards, and contribution process.",
  ogTitle: "Contribution Guide | LandiNuxt",
  ogDescription: "Learn how to contribute to LandiNuxt. Help us build better landing page components for the Nuxt community. Find guidelines, code standards, and contribution process.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Contribution Guide | LandiNuxt",
  twitterDescription: "Learn how to contribute to LandiNuxt. Help us build better landing page components for the Nuxt community. Find guidelines, code standards, and contribution process.",
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