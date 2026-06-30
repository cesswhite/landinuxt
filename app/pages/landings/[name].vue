<template>
    <NuxtLayout name="landings">
        <LandingPagesWrapper :name="name?.toString() || ''" :code="landingCode">
            <template #component>
                <LazyLandingPages1 v-if="name === 'simple'" />
                <LazyLandingPages2 v-if="name === 'showcase'" />
                <LazyLandingPages3 v-if="name === 'saas'" />
                <LazyLandingPages4 v-if="name === 'agency'" />
            </template>
        </LandingPagesWrapper>
    </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const landingSlug = computed(() => {
  const param = route.params.name
  if (typeof param === "string") {
    return param
  }
  if (Array.isArray(param)) {
    return param[0] ?? ""
  }
  return ""
})
const name = landingSlug
const _landings = await queryContentPath(`/landings/${landingSlug.value}`)

const landingCode = computed(() => extractVueCodeBlock(_landings?.body))

const landingTitle = computed(() => {
  const title = String(_landings?.title || landingSlug.value || "Landing")
  return title.charAt(0).toUpperCase() + title.slice(1)
})

const landingDescription = computed(() => {
  return _landings?.description || `Explore the ${landingTitle.value} landing page template. Beautiful, responsive design ready to use in your Nuxt project.`
})

useSeoMeta({
  title: `${landingTitle.value} Landing Page`,
  description: landingDescription.value,
  ogTitle: `${landingTitle.value} Landing Page`,
  ogDescription: landingDescription.value,
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: `${landingTitle.value} Landing Page`,
  twitterDescription: landingDescription.value,
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

useCanonicalHead()
</script>
