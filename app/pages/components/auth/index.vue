<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="Auth" :number="_auth.length"
                description="Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow." />
            <ElementsContentList path="/auth" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsAuth1 v-if="item.title === ('simple' as AuthTemplates)" />
                            <LazyElementsAuth2 v-if="item.title === ('logo' as AuthTemplates)" />
                            <LazyElementsAuth3 v-if="item.title === ('big' as AuthTemplates)" />
                            <LazyElementsAuth4 v-if="item.title === ('create' as AuthTemplates)" />
                            <LazyElementsAuth5 v-if="item.title === ('reset' as AuthTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { AuthTemplates } from "../../../../types/templates";
const _auth = await queryContent("auth").find();

useComponentsHubCategorySeo('auth')

const { generateBreadcrumbs } = useBreadcrumbs()
const { generateBreadcrumbList, generateFAQPage, addStructuredData } = useStructuredData()

const breadcrumbs = generateBreadcrumbs()

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

addStructuredData(generateBreadcrumbList(breadcrumbs))
addStructuredData(generateFAQPage(faqItems))
</script>