<template>
  <div class="relative w-full mt-24">
    <div class="mb-12 h-full overflow-hidden rounded-md border border-gray-500/10 p-2 lg:h-full">
      <div class="flex flex-col items-start justify-between">
        <div class="text-base">
          <div class="flex items-center gap-2">
            <span class="inline-block text-base font-bold capitalize text-dark-900 dark:text-dark-50/90">
              {{ props.item.title }}
            </span>
            <UTooltip v-if="props.item.dark" text="Component with color mode support">
              <UIcon name="i-heroicons-moon-20-solid" class="mt-0.5 text-xs text-dark-950 dark:text-dark-50" />
            </UTooltip>
            <UTooltip v-if="props.item.animated" text="Component with animation">
              <UIcon name="i-heroicons-sparkles-20-solid" class="mt-0.5 text-sm text-dark-950 dark:text-dark-50" />
            </UTooltip>
          </div>
          <p class="text-sm font-normal text-dark-400 dark:text-dark-50/40">
            {{ props.item.description }}
          </p>
        </div>
        <div class="mt-4 flex w-full items-center justify-end gap-2">
          <UButton @click="props.item.preview = true" icon="i-heroicons-eye" label="Preview"
            :variant="props.item.preview ? 'solid' : 'link'" />
          <UButton @click="props.item.preview = false" icon="i-heroicons-code-bracket" label="Code"
            :variant="!props.item.preview ? 'solid' : 'link'" />
          <UButton @click="copyCode()" :icon="current === props.item.title
            ? 'i-heroicons-clipboard-document-check'
            : 'i-heroicons-clipboard-document-list'
            " variant="ghost" />
        </div>
      </div>
      <Transition name="fade" mode="out-in">
        <div v-if="props.item.preview"
          class="scrollbar-hide mt-4 h-auto overflow-x-hidden  scrollbar-hide rounded-md bg-dark-200/80 p-2 dark:bg-dark-900"
          :class="setHeightClass
            ">
          <slot name="components" />
        </div>
        <div v-else id="code" class="">
          <ContentQuery :path="item._path" find="one" v-slot="{ data }">
            <ContentRenderer>
              <ContentRendererMarkdown :value="data" class="max-w-full prose  dark:prose-invert" />
            </ContentRenderer>
          </ContentQuery>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  HeroTemplates,
  FeaturesTemplates,
  HeadersTemplates,
} from "~/types/templates";
import { useClipboard } from "@vueuse/core";

const current = ref<
  | HeroTemplates
  | FeaturesTemplates
  | HeadersTemplates
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
  | string
  | undefined;
}>();


const setHeightClass = computed(() => {
  if (props.item.parent === 'headers') {
    return 'min-h-[420px] '
  }
  if (props.item.parent === 'footers') {
    return 'min-h-[420px] flex items-end justify-end'
  }
  if (props.item.parent == 'hero') {
    return 'min-h-[1024px]'
  }
  if (props.item.parent == 'features') {
    return 'min-h-[1024px]'
  }
})

function copyCode() {
  const { copy, copied } = useClipboard();
  copy(props.code);
  if (props.title) {
    current.value = props.title;
  }

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>
