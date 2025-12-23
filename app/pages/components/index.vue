<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Your UI toolkit, already built
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    Beautiful, responsive UI blocks ready to drop into any project — no fuss, just flow.
                </p>
            </div>
            <div class="mt-12">
                <ElementsContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: "All Nuxt Landing Components | Hero, Features, Pricing, FAQ, CTA, Headers, Footers | LandiNuxt",
  description: "Browse 100+ pre-built Nuxt landing page components. Hero sections, features, pricing tables, FAQ sections, CTAs, headers, footers, testimonials, contact forms, and more. Copy-paste ready, fully compatible with Nuxt UI v4.",
  ogTitle: "All Nuxt Landing Components | LandiNuxt",
  ogDescription: "Browse 100+ pre-built Nuxt landing page components. Hero, features, pricing, FAQ, CTA, headers, footers, and more. Copy-paste ready for Nuxt UI v4.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "All Nuxt Landing Components | LandiNuxt",
  twitterDescription: "Browse 100+ pre-built Nuxt landing page components. Copy-paste ready for Nuxt UI v4.",
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
