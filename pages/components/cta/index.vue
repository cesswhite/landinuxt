<template>
  <NuxtLayout name="default">
    <div class="relative w-full px-4 py-24">
      <ElementsHeader name="CTA" :number="_cta.length"
        description="Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers." />
      <ContentList path="/cta" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsCTA1 v-if="item.title === ('simple' as CTATemplates)" />
              <LazyElementsCTA2 v-if="item.title === ('social' as CTATemplates)" />
              <LazyElementsCTA3 v-if="item.title === ('serif' as CTATemplates)" />
              <LazyElementsCTA4 v-if="item.title === ('art' as CTATemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { CTATemplates } from "~/types/templates";
const _cta = await queryContent("cta").find();

useSeoMeta({
  title: "CTA Section | LandiNuxt",
});
</script>
