<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Instant Pages for Instant Results
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    Explore a variety of beautifullyPre-built landing pages so you can launch your project today — not
                    someday.
                </p>
            </div>
            <div class="mt-12">
                <LandingPagesContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: "Nuxt Landing Page Templates: Pre-built Complete Landing Pages | LandiNuxt",
  description: "Explore complete pre-built Nuxt landing page templates: Simple, Showcase, SaaS, and Agency designs. Ready-to-launch templates with Hero, Features, Pricing, FAQ, and CTA sections. Copy-paste ready for Nuxt UI v4.",
  ogTitle: "Nuxt Landing Page Templates: Pre-built Complete Landing Pages | LandiNuxt",
  ogDescription: "Explore complete pre-built Nuxt landing page templates. Ready-to-launch templates with all sections included. Copy-paste ready for Nuxt UI v4.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Nuxt Landing Page Templates: Pre-built Complete Landing Pages | LandiNuxt",
  twitterDescription: "Explore complete pre-built Nuxt landing page templates. Ready-to-launch for Nuxt UI v4.",
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
