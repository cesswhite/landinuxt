<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="Auth" :number="_auth.length"
                description="Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow." />
            <ContentList path="/auth" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsAuth1 v-if="item.title === ('simple' as AuthTemplates)" />
                            <LazyElementsAuth2 v-if="item.title === ('logo' as AuthTemplates)" />
                            <LazyElementsAuth3 v-if="item.title === ('big' as AuthTemplates)" />
                            <LazyElementsAuth4 v-if="item.title === ('create' as AuthTemplates)" />
                            <LazyElementsAuth5 v-if="item.title === ('reset' as AuthTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { AuthTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _auth = await queryContent("auth").find();

useSeoMeta({
    title: "Nuxt Authentication Components: Pre-built Sign-in, Sign-up & Password Recovery | LandiNuxt",
    description: "Build secure authentication flows faster with 5+ pre-built Nuxt components. Copy-paste sign-in, sign-up, password recovery, and token management components. Fully compatible with Nuxt UI v4, SSR ready, and accessible.",
    ogTitle: "Nuxt Authentication Components | LandiNuxt",
    ogDescription: "Build secure authentication flows faster with pre-built Nuxt components. Sign-in, sign-up, password recovery, and token management. Copy-paste ready for Nuxt UI v4.",
    ogImage: "/og-landinuxt.jpg",
    ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    twitterCard: "summary_large_image",
    twitterTitle: "Nuxt Authentication Components | LandiNuxt",
    twitterDescription: "Build secure authentication flows faster with pre-built Nuxt components. Copy-paste ready for Nuxt UI v4.",
    twitterImage: "/og-landinuxt.jpg",
    ogImageWidth: 1200,
    ogImageHeight: 630,
})

const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateFAQPage, addStructuredData } = useStructuredData()

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs()

// FAQ for auth components
const faqItems = [
    {
        question: 'How do I implement authentication with these Nuxt components?',
        answer: 'These components provide the UI for authentication flows. You\'ll need to integrate them with your authentication backend (like Supabase, Auth0, or a custom API) to handle the actual authentication logic.',
    },
    {
        question: 'Are these authentication components secure?',
        answer: 'These components provide the UI layer. Security depends on your backend implementation. Always use HTTPS, validate inputs server-side, and follow OWASP security best practices.',
    },
    {
        question: 'Do these components work with Nuxt Auth?',
        answer: 'Yes, these components are UI-only and can be integrated with any authentication library or service, including Nuxt Auth, Supabase Auth, or custom solutions.',
    },
]

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const faqData = generateFAQPage(faqItems)
addStructuredData(faqData)

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'canonical',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        }
    ]
})
</script>