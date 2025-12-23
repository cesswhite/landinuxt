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
                    Componentes y Plantillas de Landing Pages para Nuxt
                </h1>
                <p class="text-xl/7 text-dark-950/60 dark:text-dark-50/50 w-full md:w-2/3 mx-auto md:text-2xl/7">
                    Secciones pre-construidas (Hero, Precios, Características, FAQ, CTA) y plantillas completas de
                    landing pages para Nuxt.
                    Construye landing pages de alta conversión más rápido con componentes listos para copiar y pegar,
                    totalmente integrados con Nuxt UI v4.
                </p>
            </div>

            <!-- Component Categories -->
            <div class="py-12">
                <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
                    Secciones de Componentes Pre-construidos
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
                                    {{ component.count }} componentes disponibles
                                </p>
                            </div>
                        </div>
                    </UCard>
                </div>
            </div>

            <!-- Complete Landing Pages -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <h2 class="text-2xl font-bold mb-4 text-dark-950 dark:text-dark-50">
                    Plantillas Completas de Landing Pages
                </h2>
                <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-8">
                    Landing pages listas para lanzar con múltiples secciones pre-configuradas. Perfectas para SaaS,
                    agencias y lanzamientos de productos.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <UCard to="/landings" class="hover:shadow-lg transition-shadow cursor-pointer">
                        <h3 class="font-semibold text-xl mb-2 text-dark-950 dark:text-dark-50">
                            Ver Todas las Plantillas
                        </h3>
                        <p class="text-sm text-dark-950/60 dark:text-dark-50/60">
                            Explora nuestra colección de plantillas completas de landing pages incluyendo diseños
                            Simple, Showcase, SaaS y Agency.
                        </p>
                    </UCard>
                </div>
            </div>

            <!-- Key Features -->
            <div class="py-12 border-t border-dark-200 dark:border-dark-800">
                <h2 class="text-2xl font-bold mb-8 text-dark-950 dark:text-dark-50">
                    ¿Por qué elegir Componentes de Landing Pages para Nuxt?
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
                    Preguntas Frecuentes
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
                            ¿Listo para Construir tu Landing Page?
                        </h2>
                        <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-6">
                            Comienza a construir más rápido con nuestros componentes pre-construidos para Nuxt. Copia,
                            pega y personaliza.
                        </p>
                        <div class="flex gap-4 justify-center">
                            <UButton to="/components" size="lg" color="primary">
                                Ver Componentes
                            </UButton>
                            <UButton to="/how-to-build-nuxt-landing-page" size="lg" variant="outline">
                                Ver Guía
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
    { label: 'Inicio', icon: 'i-lucide-home', to: '/' },
    { label: 'Componentes de Landing Pages para Nuxt', icon: 'i-lucide-layers' },
])

// Component categories (same data as English version)
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
        label: 'Secciones Hero',
        description: 'Secciones hero llamativas con CTAs, imágenes y animaciones',
        count: _hero.length,
        icon: 'i-lucide-sparkles',
    },
    {
        name: 'headers',
        label: 'Headers y Navegación',
        description: 'Barras de navegación y headers responsivos',
        count: _headers.length,
        icon: 'i-lucide-menu',
    },
    {
        name: 'features',
        label: 'Características',
        description: 'Muestra las características y beneficios de tu producto',
        count: _features.length,
        icon: 'i-lucide-star',
    },
    {
        name: 'cta',
        label: 'Llamadas a la Acción',
        description: 'Secciones CTA de alta conversión',
        count: _cta.length,
        icon: 'i-lucide-megaphone',
    },
    {
        name: 'testimonials',
        label: 'Testimonios',
        description: 'Prueba social y testimonios de clientes',
        count: _testimonials.length,
        icon: 'i-lucide-message-square',
    },
    {
        name: 'faq',
        label: 'Secciones FAQ',
        description: 'Preguntas frecuentes y respuestas',
        count: _faq.length,
        icon: 'i-lucide-help-circle',
    },
    {
        name: 'contact',
        label: 'Formularios de Contacto',
        description: 'Formularios de contacto y consultas',
        count: _contact.length,
        icon: 'i-lucide-mail',
    },
    {
        name: 'footers',
        label: 'Footers',
        description: 'Secciones de footer completas con enlaces',
        count: _footers.length,
        icon: 'i-lucide-layout',
    },
    {
        name: 'logos',
        label: 'Secciones de Logos',
        description: 'Logos de clientes y showcases de marca',
        count: _logos.length,
        icon: 'i-lucide-image',
    },
    {
        name: 'auth',
        label: 'Autenticación',
        description: 'Inicio de sesión, registro y recuperación de contraseña',
        count: _auth.length,
        icon: 'i-lucide-lock',
    },
    {
        name: 'gallery',
        label: 'Galerías',
        description: 'Galerías de imágenes y portafolios',
        count: _gallery.length,
        icon: 'i-lucide-images',
    },
]

const features = [
    {
        title: 'Integración con Nuxt UI v4',
        description: 'Totalmente compatible con Nuxt UI v4, la librería oficial de UI para Nuxt',
        icon: 'i-lucide-package',
    },
    {
        title: 'Listo para SSR/ISR',
        description: 'Optimizado para renderizado del lado del servidor y regeneración estática incremental',
        icon: 'i-lucide-server',
    },
    {
        title: 'Modo Oscuro',
        description: 'Todos los componentes soportan modo oscuro desde el inicio',
        icon: 'i-lucide-moon',
    },
    {
        title: 'Accesible',
        description: 'Construido con las mejores prácticas de accesibilidad en mente',
        icon: 'i-lucide-accessibility',
    },
]

const faqItems = [
    {
        label: '¿Cómo uso estos componentes en mi proyecto Nuxt?',
        content: 'Simplemente copia el código del componente desde cualquier página de componente y pégalo en tu proyecto Nuxt. Asegúrate de tener Nuxt UI v4 instalado. Consulta nuestra guía paso a paso para instrucciones detalladas.',
    },
    {
        label: '¿Cuál es la diferencia entre Nuxt UI y Shadcn para Nuxt?',
        content: 'Nuxt UI es la librería oficial de UI para Nuxt con componentes y temas integrados. Shadcn es una colección de componentes que copias en tu proyecto. Ambos funcionan bien, pero Nuxt UI ofrece mejor integración con el ecosistema Nuxt. Consulta nuestra página de comparación para más detalles.',
    },
    {
        label: '¿Estos componentes son gratuitos?',
        content: '¡Sí! Todos los componentes son de código abierto y gratuitos para usar en tus proyectos. Están licenciados bajo MIT License.',
    },
    {
        label: '¿Cómo optimizo Core Web Vitals para landing pages en Nuxt?',
        content: 'Usa renderizado del lado del servidor (SSR) o regeneración estática incremental (ISR), optimiza imágenes con Nuxt Image, y carga diferida de contenido debajo del pliegue. Consulta nuestra guía de rendimiento para estrategias detalladas.',
    },
    {
        label: '¿Estos componentes funcionan con Nuxt 3?',
        content: '¡Sí! Todos los componentes están construidos para Nuxt 3 y Nuxt 4, usando la Composition API y características modernas de Vue 3.',
    },
]

// SEO Meta
useSeoMeta({
    title: 'Componentes y Plantillas de Landing Pages para Nuxt | Secciones Pre-construidas | LandiNuxt',
    description:
        'Construye landing pages en Nuxt más rápido con componentes pre-construidos: Hero, Precios, Características, FAQ, secciones CTA y plantillas completas. Totalmente compatible con Nuxt UI v4. Listo para SSR/ISR, soporte de modo oscuro y accesible.',
    ogTitle: 'Componentes y Plantillas de Landing Pages para Nuxt | LandiNuxt',
    ogDescription:
        'Componentes y plantillas pre-construidas de landing pages para Nuxt. Construye landing pages de alta conversión más rápido con componentes listos para copiar y pegar.',
    ogImage: '/og-landinuxt.jpg',
    ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Componentes y Plantillas de Landing Pages para Nuxt | LandiNuxt',
    twitterDescription:
        'Componentes y plantillas pre-construidas de landing pages para Nuxt. Construye más rápido con Nuxt UI v4.',
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
        lang: 'es',
    },
    link: [
        {
            rel: 'canonical',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        },
        {
            rel: 'alternate',
            hreflang: 'en',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}/nuxt-landing-components`,
        },
        {
            rel: 'alternate',
            hreflang: 'es',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
        },
        {
            rel: 'alternate',
            hreflang: 'x-default',
            href: `${config.public.siteUrl || 'https://www.landinuxt.com'}/nuxt-landing-components`,
        },
    ],
})
</script>
