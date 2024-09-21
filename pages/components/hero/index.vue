<template>
  <div class="relative w-full px-4 py-24">
    <div class="mb-6">
      <ElementsHeader name="Hero" :number="_hero.length" />
    </div>
    <ContentList path="/hero" v-slot="{ list }">
      <template v-for="(item, index) in list" :key="item._path">
        <div
          class="mb-12 h-full overflow-hidden rounded-md border border-gray-500/10 p-2 lg:h-full"
        >
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
                    item.title as HeroTemplates,
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
              class="my-4 h-auto min-h-[1024px] overflow-x-hidden overflow-y-scroll rounded-md bg-gray-200/80 p-2 dark:bg-gray-900"
            >
              <ElementsHero1
                v-if="item.title === ('simple' as HeroTemplates)"
              />
              <ElementsHero2 v-if="item.title === ('main' as HeroTemplates)" />
              <ElementsHero3 v-if="item.title === ('half' as HeroTemplates)" />
              <ElementsHero4
                v-if="item.title === ('marquee' as HeroTemplates)"
              />
              <ElementsHero5
                v-if="item.title === ('only-dark' as HeroTemplates)"
              />

              <ElementsHero6
                v-if="item.title === ('desaturate' as HeroTemplates)"
              />
              <ElementsHero7 v-if="item.title === ('big' as HeroTemplates)" />
              <ElementsHero8
                v-if="item.title === ('double-marquee' as HeroTemplates)"
              />
              <ElementsHero9
                v-if="item.title === ('double-image' as HeroTemplates)"
              />
              <ElementsHero10
                v-if="item.title === ('space' as HeroTemplates)"
              />
            </div>
            <div v-else class="scrollbar-hide w-full max-w-full">
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
import type { HeroTemplates } from "~/types/index";
import { useClipboard } from "@vueuse/core";

const current = ref<HeroTemplates | null>(null);
const _hero = await queryContent("hero").find();

function copyCode(code: string, name: HeroTemplates) {
  const { copy, copied } = useClipboard();
  copy(code);
  current.value = name;

  setTimeout(() => {
    current.value = null;
  }, 1500);
}
</script>
