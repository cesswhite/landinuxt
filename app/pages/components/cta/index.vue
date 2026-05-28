<template>
  <NuxtLayout name="components-hub">
    <div class="relative w-full">
      <ElementsHeader name="CTA" :number="_cta.length"
        description="Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers." />
      <ElementsContentList path="/cta" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :title="item.title">
            <template #components>
              <LazyElementsCTA1 v-if="item.title === ('simple' as CTATemplates)" />
              <LazyElementsCTA2 v-if="item.title === ('social' as CTATemplates)" />
              <LazyElementsCTA3 v-if="item.title === ('serif' as CTATemplates)" />
              <LazyElementsCTA4 v-if="item.title === ('art' as CTATemplates)" />
              <LazyElementsCTA5 v-if="item.title === ('solid' as CTATemplates)" />
              <LazyElementsCTA6 v-if="item.title === ('gradient' as CTATemplates)" />
              <LazyElementsCTA7 v-if="item.title === ('app' as CTATemplates)" />
              <LazyElementsCTA8 v-if="item.title === ('connect' as CTATemplates)" />
              <LazyElementsCTA9 v-if="item.title === ('saturate' as CTATemplates)" />
              <LazyElementsCTA10 v-if="item.title === ('overflow' as CTATemplates)" />
              <LazyElementsCTA11 v-if="item.title === ('sparkles' as CTATemplates)" />
              <LazyElementsCTA12 v-if="item.title === ('high-converting' as CTATemplates)" />
              <LazyElementsCTA13 v-if="item.title === ('heading' as CTATemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ElementsContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { CTATemplates } from "../../../../types/templates";
const _cta = await queryContent("cta").find();

useComponentsHubCategorySeo('cta')
</script>
