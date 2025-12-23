<template>
    <NuxtLayout name="default">
        <div class="relative w-full py-24 px-4">
            <ElementsHeader name="Footers" :number="_footers.length"
                description="Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation." />
            <ContentList path="/footers" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsFooters1 v-if="item.title === ('simple' as FootersTemplates)" />
                            <LazyElementsFooters2 v-if="item.title === ('space' as FootersTemplates)" />
                            <LazyElementsFooters3 v-if="item.title === ('full' as FootersTemplates)" />
                            <LazyElementsFooters4 v-if="item.title === ('big' as FootersTemplates)" />
                            <LazyElementsFooters5 v-if="item.title === ('grid' as FootersTemplates)" />
                            <LazyElementsFooters6 v-if="item.title === ('minimal' as FootersTemplates)" />
                            <LazyElementsFooters7 v-if="item.title === ('openai' as FootersTemplates)" />
                            <LazyElementsFooters8 v-if="item.title === ('gradient' as FootersTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FootersTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _footers = await queryContent("footers").find();

useSeoMeta({
  title: "Footer Components | LandiNuxt",
  description: "Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation.",
  ogTitle: "Footer Components | LandiNuxt",
  ogDescription: "Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Footer Components | LandiNuxt",
  twitterDescription: "Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation.",
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