<template>
  <div @click="goToComponentIndex(props.data.name)"
    class="col-span-full h-auto transform-gpu cursor-pointer rounded-xl transition-transform duration-300 ease-in-out will-change-transform sm:col-span-6 md:col-span-4 2xl:col-span-3 bg-dark-50 p-1 ring-1 ring-dark-950/10 shadow shadow-dark-950/10 dark:bg-dark-950 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black">
    <div class="aspect-1080/670 w-full overflow-hidden rounded-lg bg-dark-50 dark:bg-dark-950">
      <component :is="coverComponent" />
    </div>
    <div class="mt-2 p-1 text-base font-bold capitalize text-dark-950/90 dark:text-dark-50/90">
      {{ categoryLabel }}
      <small class="text-dark-400 dark:text-dark-500">({{ componentCountLabel }})</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Component as ElementCategory, Elements } from "../../../types/index";

const props = defineProps<{
  data: ElementCategory;
}>();

const coverComponents: Record<Elements, ReturnType<typeof resolveComponent>> = {
  hero: resolveComponent("ElementsHeroCover"),
  headers: resolveComponent("ElementsHeadersCover"),
  features: resolveComponent("ElementsFeaturesCover"),
  footers: resolveComponent("ElementsFootersCover"),
  cta: resolveComponent("ElementsCTACover"),
  testimonials: resolveComponent("ElementsTestimonialsCover"),
  contact: resolveComponent("ElementsContactCover"),
  logos: resolveComponent("ElementsLogosCover"),
  faq: resolveComponent("ElementsFAQCover"),
  auth: resolveComponent("ElementsAuthCover"),
  gallery: resolveComponent("ElementsGalleryCover"),
};

const coverComponent = computed(() => coverComponents[props.data.name]);

const categoryLabel = computed(() => {
  if (props.data.name === "cta") {
    return "CTA";
  }
  if (props.data.name === "faq") {
    return "FAQ";
  }
  return props.data.name;
});

const componentCountLabel = computed(() =>
  props.data.total === 0 ? "Coming soon" : `${props.data.total} components`,
);

function goToComponentIndex(name: string) {
  navigateTo(`/components/${name}`);
  window.umami.track(`click-to-${name}`);
}
</script>
