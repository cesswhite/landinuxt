<template>
  <div class="relative w-full px-4 py-24">
    <div class="mb-6">
      <ElementsHeader name="Headers" />
    </div>
    <ContentList path="/headers" v-slot="{ list }">
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
                    item.title as HeadersTemplates,
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
              class="mt-4 h-96 rounded-md bg-gray-200/80 p-2 dark:bg-gray-900"
            >
              <ElementsHeaders1
                v-if="item.title === ('simple' as HeadersTemplates)"
              />
              <ElementsHeaders2
                v-if="item.title === ('saas' as HeadersTemplates)"
              />
              <ElementsHeaders3
                v-if="item.title === ('indeed' as HeadersTemplates)"
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
import type { HeadersTemplates } from "~/types/index";

const current = ref<HeadersTemplates | null>(null);

function copyCode(code: string, name: HeadersTemplates) {
  const { copy, copied } = useClipboard();
  copy(code);
  current.value = name;

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>
