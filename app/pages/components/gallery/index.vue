<template>
  <NuxtLayout name="components-hub">
    <div class="relative w-full">
      <ElementsHeader name="Gallery" :number="_gallery.length"
        description="Showcase your visual content with beautiful gallery sections. From grid layouts to lightbox displays, these components help you present images, portfolios, and media in an engaging and professional way." />
      <ElementsContentList path="/gallery" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item.path">
          <ElementsWrapper :item="item" :title="item.title">
            <template #components>
              <LazyElementsGallery1 v-if="item.title === ('grid' as GalleryTemplates)" />
              <LazyElementsGallery2 v-if="item.title === ('windows' as GalleryTemplates)" />
              <LazyElementsGallery3 v-if="item.title === ('marquee' as GalleryTemplates)" />
              <LazyElementsGallery4 v-if="item.title === ('slider' as GalleryTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ElementsContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { GalleryTemplates } from "../../../../types/templates";
const _gallery = await queryElementsByParent("gallery");

useComponentsHubCategorySeo('gallery')
</script>
