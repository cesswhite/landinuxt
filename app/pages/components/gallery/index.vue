<template>
  <NuxtLayout name="default">
    <div class="relative w-full py-24 px-4">
      <ElementsHeader name="Gallery" :number="_gallery.length"
        description="Showcase your visual content with beautiful gallery sections. From grid layouts to lightbox displays, these components help you present images, portfolios, and media in an engaging and professional way." />
      <ContentList path="/gallery" v-slot="{ list }">
        <template v-for="(item, index) in list" :key="item._path">
          <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
            <template #components>
              <LazyElementsGallery1 v-if="item.title === ('grid' as GalleryTemplates)" />
              <LazyElementsGallery2 v-if="item.title === ('windows' as GalleryTemplates)" />
            </template>
          </ElementsWrapper>
        </template>
      </ContentList>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { GalleryTemplates } from "../../../../types/templates";
const _gallery = await queryContent("gallery").find();

useSeoMeta({
  title: "Gallery Section | LandiNuxt",
});
</script>

