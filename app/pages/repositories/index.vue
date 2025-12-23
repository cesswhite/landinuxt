<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Your Next Project Starts with a Repo
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    A developer's shortcut to clean, scalable, production-grade code.
                </p>
            </div>
            <div class="mt-12">
                <RepositoriesContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

useSeoMeta({
  title: "Repositories | LandiNuxt",
  description: "A developer's shortcut to clean, scalable, production-grade code. Your next project starts with a repo. Browse our collection of ready-to-use repositories.",
  ogTitle: "Repositories | LandiNuxt",
  ogDescription: "A developer's shortcut to clean, scalable, production-grade code. Your next project starts with a repo. Browse our collection of ready-to-use repositories.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Repositories | LandiNuxt",
  twitterDescription: "A developer's shortcut to clean, scalable, production-grade code. Your next project starts with a repo. Browse our collection of ready-to-use repositories.",
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
