<template>
    <NuxtLayout name="default">
        <UContainer>
            <!-- Breadcrumbs -->
            <div class="pt-8 pb-4">
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
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UCard v-for="component in componentCategories" :key="component.name"
                        :to="`/components/${component.name}`" class="hover:shadow-lg transition-shadow cursor-pointer">
                        <div class="flex items-start gap-4">
                            <div class="p-2 rounded-lg bg-primary-100 dark:bg-primary-900">
                                <Icon :name="component.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                            </div>
                            <div class="flex-1">
                                <h3 class="font-semibold text-lg mb-1 text-dark-950 dark:text-dark-50">
                                    {{ component.label }}
                                </h3>
                                <p class="text-sm text-dark-950/60 dark:text-dark-50/60 mb-2">
                                    {{ component.description }}
                                </p>
                                <p class="text-xs text-primary-600 dark:text-primary-400 font-medium">
                                    {{ component.count }} components available
                                </p>
                            </div>
                        </div>
                    </UCard>
                </div>
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
                <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
                    Why Choose Nuxt Landing Components?
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="feature in features" :key="feature.title">
                        <div class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 w-fit mb-3">
                            <Icon :name="feature.icon" class="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h3 class="font-semibold mb-2 text-dark-950 dark:text-dark-50">
                            {{ feature.title }}
                        </h3>
                        <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
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

// Component categories
const _hero = await queryContent('hero').find()
const _headers = await queryContent('headers').find()
const _features = await queryContent('features').find()
const _footers = await queryContent('footers').find()
const _cta = await queryContent('cta').find()
const _testimonials = await queryContent('testimonials').find()
const _contact = await queryContent('contact').find()
const _logos = await queryContent('logos').find()
const _faq = await queryContent('faq').find()
const _auth = await queryContent('auth').find()
const _gallery = await queryContent('gallery').find()

const componentCategories = [
    {
        name: 'hero',
        label: 'Hero Sections',
        description: 'Eye-catching hero sections with CTAs, images, and animations',
        count: _hero.length,
        icon: 'i-lucide-sparkles',
    },
    {
        name: 'headers',
        label: 'Headers & Navigation',
        description: 'Responsive navigation bars and headers',
        count: _headers.length,
        icon: 'i-lucide-menu',
    },
    {
        name: 'features',
        label: 'Features',
        description: 'Showcase product features and benefits',
        count: _features.length,
        icon: 'i-lucide-star',
    },
    {
        name: 'cta',
        label: 'Call-to-Action',
        description: 'High-converting CTA sections',
        count: _cta.length,
        icon: 'i-lucide-megaphone',
    },
    {
        name: 'testimonials',
        label: 'Testimonials',
        description: 'Social proof and customer testimonials',
        count: _testimonials.length,
        icon: 'i-lucide-message-square',
    },
    {
        name: 'faq',
        label: 'FAQ Sections',
        description: 'Frequently asked questions and answers',
        count: _faq.length,
        icon: 'i-lucide-help-circle',
    },
    {
        name: 'contact',
        label: 'Contact Forms',
        description: 'Contact and inquiry forms',
        count: _contact.length,
        icon: 'i-lucide-mail',
    },
    {
        name: 'footers',
        label: 'Footers',
        description: 'Complete footer sections with links',
        count: _footers.length,
        icon: 'i-lucide-layout',
    },
    {
        name: 'logos',
        label: 'Logo Sections',
        description: 'Client logos and brand showcases',
        count: _logos.length,
        icon: 'i-lucide-image',
    },
    {
        name: 'auth',
        label: 'Authentication',
        description: 'Sign-in, sign-up, and password recovery',
        count: _auth.length,
        icon: 'i-lucide-lock',
    },
    {
        name: 'gallery',
        label: 'Galleries',
        description: 'Image galleries and portfolios',
        count: _gallery.length,
        icon: 'i-lucide-images',
    },
]

const features = [
    {
        title: 'Nuxt UI v4 Integration',
        description: 'Fully compatible with Nuxt UI v4, the official UI library for Nuxt',
        icon: 'i-lucide-package',
    },
    {
        title: 'SSR/ISR Ready',
        description: 'Optimized for server-side rendering and incremental static regeneration',
        icon: 'i-lucide-server',
    },
    {
        title: 'Dark Mode',
        description: 'All components support dark mode out of the box',
        icon: 'i-lucide-moon',
    },
    {
        title: 'Accessible',
        description: 'Built with accessibility best practices in mind',
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
