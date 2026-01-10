<template>
    <NuxtLayout name="landings">
        <LandingPagesWrapper :name="name?.toString() || ''" :code="_landings?.body?.children?.[0]?.props?.code || ''">
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
const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateWebPage, addStructuredData } = useStructuredData()
const { params } = route
const name = ref(params.name)
const _landings = await queryContent(`/landings/${name.value}`).findOne()

const landingTitle = computed(() => {
  const title = _landings?.title || name.value
  return title.charAt(0).toUpperCase() + title.slice(1)
})

const landingDescription = computed(() => {
  return _landings?.description || `Explore the ${landingTitle.value} landing page template built with Nuxt landing components. Beautiful, responsive design ready to use in your Nuxt project. Fully compatible with Nuxt UI v4.`
})

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
  { label: 'Home', icon: 'i-lucide-home', to: '/' },
  { label: 'Landing Pages', icon: 'i-lucide-layout', to: '/landings' },
  { label: landingTitle.value, icon: 'i-lucide-file' },
])

useSeoMeta({
  title: `${landingTitle.value} Landing Page Template | Nuxt Landing Components | LandiNuxt`,
  description: `Nuxt landing components: ${landingDescription.value}`,
  ogTitle: `${landingTitle.value} Landing Page | LandiNuxt`,
  ogDescription: landingDescription.value,
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: `${landingTitle.value} Landing Page | LandiNuxt`,
  twitterDescription: landingDescription.value,
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const webPageData = generateWebPage({
  name: `${landingTitle.value} Landing Page Template`,
  description: landingDescription.value,
  url: route.path,
  breadcrumb: breadcrumbs,
})
addStructuredData(webPageData)

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    },
  ],
})
</script>
