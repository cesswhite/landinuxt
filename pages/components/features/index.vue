<template>
  <div class="relative w-full py-24 px-4">
    <div class="mb-32">
      <ElementsHeader
        name="Feature"
        :number="_features.length"
        description="Discover a diverse range of feature sections tailored to elevate your website's user experience. Spanning from minimalist to feature-packed designs, these sections are meticulously crafted to convey your brand's message and captivate your target audience."
      />
    </div>
    <ContentList path="/features" v-slot="{ list }">
      <template v-for="(item, index) in list" :key="item._path">
        <div class="mb-12 h-full rounded-md border border-gray-500/10 p-2">
          <div class="flex flex-col items-start justify-between">
            <div class="text-base">
              <div class="flex items-center gap-2">
                <span
                  class="inline-block text-base font-bold capitalize text-gray-900 dark:text-gray-50/90"
                >
                  {{ item.title }}
                </span>
                <UTooltip
                  v-if="item.dark"
                  text="Change the theme to see dark mode"
                >
                  <UIcon
                    name="i-heroicons-moon-20-solid"
                    class="mt-0.5 text-xs dark:text-gray-50"
                  />
                </UTooltip>
              </div>
              <p
                class="text-sm font-normal text-gray-900/60 dark:text-gray-50/60"
              >
                {{ item.description }}
              </p>
            </div>
            <div class="mt-4 flex w-full items-center justify-end gap-2">
              <UButton
                @click="item.preview = true"
                icon="i-heroicons-eye"
                label="Preview"
                :variant="item.preview ? 'solid' : 'link'"
              />
              <UButton
                @click="item.preview = false"
                icon="i-heroicons-code-bracket"
                label="Code"
                :variant="!item.preview ? 'solid' : 'link'"
              />
              <UButton
                @click="
                  copyCode(
                    item.body?.children[0]?.props?.code,
                    item.title as FeaturesTemplates,
                  )
                "
                :icon="
                  current === item.title
                    ? 'i-heroicons-clipboard-document-check'
                    : 'i-heroicons-clipboard-document-list'
                "
                variant="ghost"
              />
            </div>
          </div>
          <Transition name="fade" mode="out-in">
            <div
              v-if="item.preview"
              class="scrollbar-hide my-4 h-auto min-h-[1024px] overflow-x-hidden overflow-y-scroll rounded-md bg-gray-200/80 p-2 dark:bg-gray-900"
            >
              <ElementsFeatures1
                v-if="item.title === ('elegance' as FeaturesTemplates)"
              />
              <ElementsFeatures2
                v-if="item.title === ('puzzle' as FeaturesTemplates)"
              />
              <ElementsFeatures3
                v-if="item.title === ('explore' as FeaturesTemplates)"
              />
            </div>

            <div
              v-else
              class="prose scrollbar-hide h-full w-full max-w-full rounded-lg"
            >
              <ContentQuery :path="item._path" find="one" v-slot="{ data }">
                <ContentRenderer>
                  <ContentRendererMarkdown :value="data" />
                </ContentRenderer>
              </ContentQuery>
            </div>
          </Transition>
        </div>
      </template>
    </ContentList>
  </div>
</template>
<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import type { FeaturesTemplates } from "~/types/index";

const _features = await queryContent("features").find();
const current = ref<FeaturesTemplates | null>(null);

function copyCode(code: string, name: FeaturesTemplates) {
  const { copy, copied } = useClipboard();
  copy(code);
  current.value = name;

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>
