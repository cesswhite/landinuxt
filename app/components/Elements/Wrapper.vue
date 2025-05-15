<template>
  <div class="relative mt-24 w-full">
    <div class="border-dark-500/10 mb-12 h-full overflow-hidden rounded-md border p-2 lg:h-full">
      <div class="flex flex-col items-start justify-between">
        <div class="text-base">
          <div class="flex items-center gap-2">
            <span class="text-dark-900 dark:text-dark-50/90 inline-block text-base font-bold capitalize">
              {{ props.item.title }}
            </span>
            <UTooltip v-if="props.item.dark" text="Component with color mode support">
              <UIcon name="i-heroicons-moon-20-solid" class="text-dark-950 dark:text-dark-50 mt-0.5 text-xs" />
            </UTooltip>
            <UTooltip v-if="props.item.animated" text="Component with animation">
              <UIcon name="i-heroicons-sparkles-20-solid" class="text-dark-950 dark:text-dark-50 mt-0.5 text-sm" />
            </UTooltip>
          </div>
          <p class="text-dark-400 dark:text-dark-50/40 text-sm font-normal">
            {{ props.item.description }}
          </p>
        </div>
        <div class="mt-4 flex w-full items-center justify-end">
          <UButton @click="previewCode = true" icon="i-heroicons-eye" label="Preview"
            :variant="previewCode ? 'solid' : 'link'" class="cursor-pointer" />
          <UButton @click="previewCode = false" icon="i-heroicons-code-bracket" label="Code"
            :variant="!previewCode ? 'solid' : 'link'" class="cursor-pointer" />
          <UButton @click="copyCode()" :icon="current === props.item.title
            ? 'i-heroicons-clipboard-document-check'
            : 'i-heroicons-clipboard-document-list'
            " variant="ghost" class="cursor-pointer" />
        </div>
      </div>
      <div v-if="previewCode"
        class="scrollbar-hide scrollbar-hide bg-dark-200/80 dark:bg-dark-900 mt-4 h-auto overflow-x-hidden rounded-md p-2"
        :class="setHeightClass">
        <slot name="components" />
      </div>
      <div v-else id="code" class="mt-2 min-h-96">
        <ContentQuery :path="item._path" find="one" v-slot="{ data }">
          <ContentRenderer>
            <ContentRendererMarkdown :value="data" class="prose max-w-full" />
          </ContentRenderer>
        </ContentQuery>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  HeroTemplates,
  FeaturesTemplates,
  HeadersTemplates,
  FootersTemplates,
  CTATemplates,
  TestimonialsTemplates,
  ContactTemplates,
  LogosTemplates,
  AuthTemplates,
  FAQTemplates,
} from "../../../types/templates";
import { useClipboard } from "@vueuse/core";

const current = ref<
  | HeroTemplates
  | FeaturesTemplates
  | HeadersTemplates
  | FootersTemplates
  | CTATemplates
  | TestimonialsTemplates
  | ContactTemplates
  | LogosTemplates
  | AuthTemplates
  | FAQTemplates
  | undefined
  | null
  | string
>(null);

const props = defineProps<{
  item: any;
  code: string;
  title:
  | HeroTemplates
  | FeaturesTemplates
  | HeadersTemplates
  | FootersTemplates
  | CTATemplates
  | TestimonialsTemplates
  | ContactTemplates
  | LogosTemplates
  | AuthTemplates
  | FAQTemplates
  | string
  | undefined;
}>();


const previewCode = ref(props.item.preview);
const setHeightClass = computed(() => {
  if (props.item.parent === "headers") {
    return "min-h-[420px] ";
  }
  if (props.item.parent === "footers") {
    return "min-h-[420px] flex items-end justify-end";
  }
  if (props.item.parent == "hero") {
    return "min-h-[1024px]";
  }
  if (props.item.parent == "features") {
    return "min-h-[1024px]";
  }
  if (props.item.parent == "cta") {
    return "min-h-[540px] flex items-center justify-center";
  }

  if (props.item.parent == "testimonials") {
    return "min-h-[1024px] flex items-center justify-center";
  }
});

function copyCode() {
  const { copy, copied } = useClipboard();
  copy(props.code);
  if (props.title) {
    current.value = props.title;
  }


  window.umami.track(`component-copied-${props.item.parent.toLowerCase()}-${props.title?.toLowerCase()}`);

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>
