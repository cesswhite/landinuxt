<template>
    <div class="w-full relative py-24 px-4">
        <ContentList path="/hero" v-slot="{ list }">
            <template v-for="(item, index) in list" :key="item._path">
                <div class="rounded-md h-full lg:h-full overflow-hidden p-2 mb-12">
                    <div class="flex flex-col items-start justify-between">
                        <div class="text-base">
                            <div class="flex items-center gap-2">
                                <span
                                    class="font-bold text-base capitalize text-gray-900 dark:text-gray-50/90 inline-block">
                                    {{ item.title }}
                                </span>
                                <UTooltip v-if="item.dark" text="Change the theme to see dark mode">
                                    <UIcon name="i-heroicons-moon-20-solid" class="dark:text-gray-50 text-xs mt-0.5" />
                                </UTooltip>
                            </div>
                            <p class="font-normal text-sm text-gray-900/60 dark:text-gray-50/60">
                                {{ item.description }}
                            </p>
                        </div>
                        <div class="flex w-full gap-2 mt-4 items-center justify-end">
                            <UButton @click="item.preview = true" icon="i-heroicons-eye" label="Preview"
                                :variant="item.preview ? 'solid' : 'link'" />
                            <UButton @click="item.preview = false" icon="i-heroicons-code-bracket" label="Code"
                                :variant="!item.preview ? 'solid' : 'link'" />
                            <UButton @click="copyCode(item.body?.children[0]?.props?.code, item.title as HeroTemplates)"
                                :icon="current === item.title ? 'i-heroicons-clipboard-document-check' : 'i-heroicons-clipboard-document-list'"
                                variant="ghost" />
                        </div>
                    </div>
                    <Transition name="fade" mode="out-in">
                        <div v-if="item.preview"
                            class="bg-gray-200/80 dark:bg-gray-900 h-[840px] overflow-y-scroll scrollbar-hide rounded-md p-2 my-4">
                            <ElementsHero1 v-if="item.title === 'simple' as HeroTemplates" />
                            <ElementsHero2 v-if="item.title === 'main' as HeroTemplates" />
                        </div>
                        <div v-else class="w-full max-w-full overflow-x-scroll prose scrollbar-hide">
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
import type { HeroTemplates } from '~/types/index'
import { useClipboard } from '@vueuse/core'


const current = ref<HeroTemplates | null>(null)

function copyCode(code: string, name: HeroTemplates) {
    const { copy, copied } = useClipboard()
    copy(code)
    current.value = name

    setTimeout(() => {
        current.value = null
    }, 1500);
}
</script>
