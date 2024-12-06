<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Features" :number="_features.length"
        description="Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience." />
      <ContentList path="/features" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsFeatures1 v-if="item.title === ('elegance' as FeaturesTemplates)" />
              <LazyElementsFeatures2 v-if="item.title === ('puzzle' as FeaturesTemplates)" />
              <LazyElementsFeatures3 v-if="item.title === ('explore' as FeaturesTemplates)" />
              <LazyElementsFeatures4 v-if="item.title === ('central' as FeaturesTemplates)" />
              <LazyElementsFeatures5 v-if="item.title === ('mush' as FeaturesTemplates)" />
              <LazyElementsFeatures6 v-if="item.title === ('flex' as FeaturesTemplates)" />
              <LazyElementsFeatures7 v-if="item.title === ('trebol' as FeaturesTemplates)" />
              <LazyElementsFeatures8 v-if="item.title === ('portrait' as FeaturesTemplates)" />
              <LazyElementsFeatures9 v-if="item.title === ('classic' as FeaturesTemplates)" />
              <LazyElementsFeatures10 v-if="item.title === ('ancient' as FeaturesTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { FeaturesTemplates } from "~/types/templates";
const _features = await queryContent("features").find();

useSeoMeta({
  title: "Features Section | LandiNuxt",
});
</script>
