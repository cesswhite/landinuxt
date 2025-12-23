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
                <p class="text-lg text-dark-950/60 dark:text-dark-50/60 mb-8">
                    Explora nuestra colección completa de componentes pre-construidos para landing pages en Nuxt. Cada
                    categoría incluye múltiples componentes listos para usar que puedes copiar y pegar directamente en
                    tu proyecto.
                </p>
                <ElementsContainer />
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
                <AppLayout>
                    <div class="flex w-full flex-col gap-12 rounded-xl md:gap-24">
                        <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                            <div class="flex w-full flex-col gap-2 md:w-1/2">
                                <div
                                    class="text-primary-500 dark:text-primary-400 relative rounded-full text-left text-sm">
                                    Por qué Elegir LandiNuxt
                                </div>
                                <h2 class="text-5xl font-bold text-dark-950 dark:text-dark-50">
                                    Todo Lo Que Necesitas. <br> Listo Para Usar
                                </h2>
                            </div>
                            <div class="flex w-full items-center justify-end">
                                <p class="font-base w-full text-dark-950/60 md:w-1/2 dark:text-dark-50/80">
                                    Componentes pre-construidos diseñados para desarrolladores Nuxt. <br>
                                    Copia, pega y personaliza para construir landing pages que convierten.
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


const features = [
    {
        title: 'Integración con Nuxt UI v4',
        description: 'Totalmente compatible con Nuxt UI v4, la librería oficial de UI para Nuxt. Accede a una biblioteca de elementos esenciales para la creación de landing pages, optimizados para cualquier proyecto.',
        icon: 'i-lucide-package',
    },
    {
        title: 'Listo para SSR/ISR',
        description: 'Optimizado para renderizado del lado del servidor y regeneración estática incremental. Obtén el mejor rendimiento con optimización de Core Web Vitals integrada.',
        icon: 'i-lucide-server',
    },
    {
        title: 'Soporte de Modo Oscuro',
        description: 'Todos los componentes soportan modo oscuro desde el inicio. Personaliza fácilmente cada componente a tu estilo con soporte de temas integrado.',
        icon: 'i-lucide-moon',
    },
    {
        title: 'Accesible por Diseño',
        description: 'Construido con las mejores prácticas de accesibilidad en mente. Cada componente sigue las pautas WCAG para experiencias web inclusivas.',
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
