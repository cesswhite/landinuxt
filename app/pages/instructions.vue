<template>
    <NuxtLayout name="default">
        <div class="relative w-full py-24 px-4 max-w-max mx-auto">
            <div class="mb-12">
                <h1 class="mt-1 text-5xl font-bold capitalize text-dark-950 dark:text-dark-50">
                    Get Started
                </h1>
            </div>
            <div class="">
                <ContentDoc path="/instructions" class="prose dark:prose-invert" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: "Get Started | LandiNuxt",
  description: "Get started with LandiNuxt. Learn how to install, configure, and use our pre-built landing page components. Quick setup guide for Nuxt developers.",
  ogTitle: "Get Started | LandiNuxt",
  ogDescription: "Get started with LandiNuxt. Learn how to install, configure, and use our pre-built landing page components. Quick setup guide for Nuxt developers.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Get Started | LandiNuxt",
  twitterDescription: "Get started with LandiNuxt. Learn how to install, configure, and use our pre-built landing page components. Quick setup guide for Nuxt developers.",
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