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
  title: "Authentication Components | LandiNuxt",
  description: "Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow.",
  ogTitle: "Authentication Components | LandiNuxt",
  ogDescription: "Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Authentication Components | LandiNuxt",
  twitterDescription: "Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow.",
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