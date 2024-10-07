<template>
  <div class="relative w-full py-24 px-4">
    <div class="mb-32">
      <ElementsHeader
        name="Hero"
        :number="_features.length"
        description="Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience."
      />
    </div>
    <ContentList path="/features" v-slot="{ list }">
      <template v-for="(item, index) in list" :key="item._path">
        <ElementsWrapper
          :item="item"
          :code="item.body?.children[0]?.props?.code"
          :title="item.title"
        >
          <template #components>
            <ElementsFeatures1
              v-if="item.title === ('elegance' as FeaturesTemplates)"
            />
            <ElementsFeatures2
              v-if="item.title === ('puzzle' as FeaturesTemplates)"
            />
            <ElementsFeatures3
              v-if="item.title === ('explore' as FeaturesTemplates)"
            />
            <ElementsFeatures4
              v-if="item.title === ('central' as FeaturesTemplates)"
            />
            <ElementsFeatures5
              v-if="item.title === ('mush' as FeaturesTemplates)"
            />
            <ElementsFeatures6
              v-if="item.title === ('flex' as FeaturesTemplates)"
            />
          </template>
        </ElementsWrapper>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { FeaturesTemplates } from "~/types/templates";
const _features = await queryContent("features").find();

useSeoMeta({
  title: "Features Section | LandiNuxt",
});
</script>
