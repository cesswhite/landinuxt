<template>
    <NuxtLayout name="default">
        <UContainer>
            <!-- Breadcrumbs -->
            <div class="pt-32 pb-4">
                <UBreadcrumb :items="breadcrumbs" />
            </div>

            <!-- Hero Section -->
            <div class="mx-auto text-center pt-12 pb-16 flex flex-col gap-y-4">
                <h1 class="text-4xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-5xl 2xl:text-6xl">
                    Nuxt Landing Components and Templates
                </h1>
                <p class="text-xl/7 text-dark-950/60 dark:text-dark-50/50 w-full md:w-2/3 mx-auto md:text-2xl/7">
                    Pre-built sections (Hero, Pricing, Features, FAQ, CTA) and complete landing page templates for Nuxt.
                    Build high-converting landing pages faster with copy-paste components fully integrated with Nuxt UI
                    v4.
                </p>
            </div>

            <!-- Component Categories -->
            <div class="py-12">
                <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
                    Pre-built Component Sections
                </h2>
                <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-8">
                    Browse our complete collection of pre-built Nuxt landing page components. Each category includes
                    multiple ready-to-use components that you can copy and paste directly into your project.
                </p>
                <ElementsContainer />
            </div>

            <!-- Complete Landing Pages -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
                    Complete Landing Page Templates
                </h2>
                <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-8">
                    Ready-to-launch landing pages with multiple sections pre-configured. Perfect for SaaS, agencies, and
                    product launches.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UCard to="/landings" class="hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 class="font-semibold text-xl mb-2 text-dark-950 dark:text-dark-50">
                            Browse All Templates
                        </h3>
                        <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                            Explore our collection of complete landing page templates including Simple, Showcase, SaaS,
                            and Agency designs.
                        </p>
                    </UCard>
                </div>
            </div>

            <!-- Key Features -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <AppLayout>
                    <div class="flex w-full flex-col gap-12 rounded-xl md:gap-24">
                        <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                            <div class="flex w-full flex-col gap-2 md:w-1/2">
                                <div
                                    class="text-primary-500 dark:text-primary-400 relative rounded-full text-left text-sm">
                                    Why Choose LandiNuxt
                                </div>
                                <h2 class="text-5xl font-bold text-dark-950 dark:text-dark-50">
                                    Everything You Need. <br> Ready to Use
                                </h2>
                            </div>
                            <div class="flex w-full items-center justify-end">
                                <p class="font-base w-full text-dark-950/60 md:w-1/2 dark:text-dark-50/80">
                                    Pre-built components designed for Nuxt developers. <br>
                                    Copy, paste, and customize to build landing pages that convert.
                                </p>
                            </div>
                        </div>
                        <div class="grid grid-cols-12 gap-x-4 gap-y-8 md:gap-y-12">
                            <div v-for="feature in features" :key="feature.title"
                                class="col-span-full md:col-span-4 flex flex-1 flex-col gap-2">
                                <div
                                    class="flex size-10 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-2 dark:border-dark-700 dark:bg-dark-800">
                                    <UIcon :name="feature.icon" class="size-full text-dark-950 dark:text-dark-50" />
                                </div>
                                <span class="text-xl font-bold text-dark-950 dark:text-dark-50">
                                    {{ feature.title }}
                                </span>
                                <p
                                    class="w-full text-base font-normal text-dark-950/60 lg:w-10/12 dark:text-dark-50/60">
                                    {{ feature.description }}
                                </p>
                            </div>
                        </div>
                    </div>
                </AppLayout>
            </div>

            <!-- FAQ Section -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
                    Frequently Asked Questions
                </h2>
                <div class="space-y-4">
                    <UAccordion :items="faqItems" />
                </div>
            </div>

            <!-- CTA Section -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <UCard class="bg-primary-50 dark:bg-primary-950/20">
                    <div class="text-center">
                        <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
                            Ready to Build Your Landing Page?
                        </h2>
                        <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-6">
                            Start building faster with our pre-built Nuxt components. Copy, paste, and customize.
                        </p>
                        <div class="flex gap-4 justify-center">
                            <UButton to="/components" size="lg" color="primary">
                                Browse Components
                            </UButton>
                            <UButton to="/how-to-build-nuxt-landing-page" size="lg" variant="outline">
                                View Guide
                            </UButton>
                        </div>
                    </div>
                </UCard>
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'

const config = useRuntimeConfig()
const route = useRoute()
const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateFAQPage, generateWebSite, addStructuredData } = useStructuredData()

// Breadcrumbs
const breadcrumbs = generateBreadcrumbs([
    { label: 'Home', icon: 'i-lucide-home', to: '/' },
    { label: 'Nuxt Landing Components', icon: 'i-lucide-layers' },
])


const features = [
    {
        title: 'Nuxt UI v4 Integration',
        description: 'Fully compatible with Nuxt UI v4, the official UI library for Nuxt. Access a library of essential elements for landing page creation, optimized for any project.',
        icon: 'i-lucide-package',
    },
    {
        title: 'SSR/ISR Ready',
        description: 'Optimized for server-side rendering and incremental static regeneration. Get the best performance with Core Web Vitals optimization built-in.',
        icon: 'i-lucide-server',
    },
    {
        title: 'Dark Mode Support',
        description: 'All components support dark mode out of the box. Easily tailor each component to your style with built-in theme support.',
        icon: 'i-lucide-moon',
    },
    {
        title: 'Accessible by Design',
        description: 'Built with accessibility best practices in mind. Every component follows WCAG guidelines for inclusive web experiences.',
        icon: 'i-lucide-accessibility',
    },
]

const faqItems = [
    {
        label: 'How do I use these components in my Nuxt project?',
        content: 'Simply copy the component code from any component page and paste it into your Nuxt project. Make sure you have Nuxt UI v4 installed. See our step-by-step guide for detailed instructions.',
    },
    {
        label: 'What is the difference between Nuxt UI and Shadcn for Nuxt?',
        content: 'Nuxt UI is the official UI library for Nuxt with built-in components and theming. Shadcn is a collection of components that you copy into your project. Both work well, but Nuxt UI offers better integration with the Nuxt ecosystem. See our comparison page for more details.',
    },
    {
        label: 'Are these components free to use?',
        content: 'Yes! All components are open source and free to use in your projects. They are licensed under MIT License.',
    },
    {
        label: 'How do I optimize Core Web Vitals for Nuxt landing pages?',
        content: 'Use server-side rendering (SSR) or incremental static regeneration (ISR), optimize images with Nuxt Image, and lazy-load below-the-fold content. See our performance guide for detailed strategies.',
    },
    {
        label: 'Do these components work with Nuxt 3?',
        content: 'Yes! All components are built for Nuxt 3 and Nuxt 4, using the Composition API and modern Vue 3 features.',
    },
]

// SEO Meta
useSeoMeta({
    title: 'Nuxt Landing Components and Templates | Pre-built Sections (Hero, Pricing, FAQ, CTA) | LandiNuxt',
    description:
        'Build Nuxt landing pages faster with pre-built components: Hero, Pricing, Features, FAQ, CTA sections, and complete templates. Fully compatible with Nuxt UI v4. SSR/ISR ready, dark mode support, and accessible.',
    ogTitle: 'Nuxt Landing Components and Templates | LandiNuxt',
    ogDescription:
        'Pre-built Nuxt landing page components and templates. Build high-converting landing pages faster with copy-paste components fully integrated with Nuxt UI v4.',
    ogImage: '/og-landinuxt.jpg',
    ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Nuxt Landing Components and Templates | LandiNuxt',
    twitterDescription:
        'Pre-built Nuxt landing page components and templates. Build high-converting landing pages faster.',
    twitterImage: '/og-landinuxt.jpg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
})

// Structured Data
const breadcrumbData = generateBreadcrumbList(breadcrumbs)
addStructuredData(breadcrumbData)

const faqData = generateFAQPage(
    faqItems.map((item) => ({
        question: item.label,
        answer: typeof item.content === 'string' ? item.content : '',
    }))
)
addStructuredData(faqData)

const websiteData = generateWebSite()
addStructuredData(websiteData)

useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link: [
        {
            rel: 'canonical',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        },
        {
            rel: 'alternate',
            hreflang: 'en',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        },
        {
            rel: 'alternate',
            hreflang: 'es',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}/es/nuxt-componentes-landing`,
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        },
    ],
})
</script>
