<template>
  <div @click="goToComponentIndex(props.data.name)"
    class="bg-dark-200/50 dark:bg-dark-500/10 col-span-full h-auto transform-gpu cursor-pointer rounded-lg p-1 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3">
    <div class="bg-dark-200/60 dark:bg-dark-500/10 flex h-56 w-full items-center justify-center rounded-md">
      <LazyElementsHeroCover v-if="props.data.name === 'hero'" />
      <LazyElementsHeadersCover v-if="props.data.name === 'headers'" />
      <LazyElementsFeaturesCover v-if="props.data.name === 'features'" />
      <LazyElementsFootersCover v-if="props.data.name === 'footers'" />
      <LazyElementsCTACover v-if="props.data.name === 'cta'" />
      <LazyElementsTestimonialsCover v-if="props.data.name === 'testimonials'" />
      <LazyElementsContactCover v-if="props.data.name === 'contact'" />
      <LazyElementsLogosCover v-if="props.data.name === 'logos'" />
    </div>
    <div class="text-dark-950/90 dark:text-dark-50/90 mt-2 p-1 text-base font-bold capitalize">
      {{ props.data.name }}
      <small class="text-dark-400 dark:text-dark-500">({{
        props.data.total === 0
          ? "Cooming soon"
          : `${props.data.total}
        components`
      }})</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "~/types/index";

const props = defineProps<{
  data: Component;
}>();

function goToComponentIndex(name: string) {
  navigateTo(`/components/${name}`);
}
</script>
