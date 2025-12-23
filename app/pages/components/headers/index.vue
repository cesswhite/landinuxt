<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Headers" :number="_headers.length"
        description="Explore a diverse collection of headers sections crafted to captivate your audience. From clean and simple to feature-rich designs, these sections are designed to effectively convey your message and engage users." />
      <ContentList path="/headers" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsHeaders1 v-if="item.title === ('simple' as HeadersTemplates)" />
              <LazyElementsHeaders2 v-if="item.title === ('saas' as HeadersTemplates)" />
              <LazyElementsHeaders3 v-if="item.title === ('indeed' as HeadersTemplates)" />
              <LazyElementsHeaders4 v-if="item.title === ('float' as HeadersTemplates)" />
              <LazyElementsHeaders5 v-if="item.title === ('multi' as HeadersTemplates)" />
              <LazyElementsHeaders6 v-if="item.title === ('store' as HeadersTemplates)" />
              <LazyElementsHeaders7 v-if="item.title === ('agency' as HeadersTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { HeadersTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _headers = await queryContent("headers").find();

useSeoMeta({
  title: "Header Components | LandiNuxt",
  description: "Explore a diverse collection of header sections crafted to captivate your audience. From clean and simple to feature-rich designs, these headers effectively convey your message and engage users.",
  ogTitle: "Header Components | LandiNuxt",
  ogDescription: "Explore a diverse collection of header sections crafted to captivate your audience. From clean and simple to feature-rich designs, these headers effectively convey your message and engage users.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Header Components | LandiNuxt",
  twitterDescription: "Explore a diverse collection of header sections crafted to captivate your audience. From clean and simple to feature-rich designs, these headers effectively convey your message and engage users.",
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
