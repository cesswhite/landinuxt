<template>
    <div class="w-full relative pt-24 px-4">
        <ContentList path="/hero" v-slot="{ list }">
            <template v-for="(item, index) in list" :key="item._path">
                <div class="rounded-md h-[780px] p-2 mb-12">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-base dark:text-gray-50/90 capitalize">
                            {{ item.title }}
                        </div>
                        <div class="flex gap-2">
                            <UButton @click="item.preview = true" icon="i-heroicons-eye" label="Preview"
                                :variant="item.preview ? 'solid' : 'link'" />
                            <UButton @click="item.preview = false" icon="i-heroicons-code-bracket" label="Code"
                                :variant="!item.preview ? 'solid' : 'link'" />
                            <UButton @click="copy(item.body?.children[0]?.props?.code)"
                                :icon="copied ? 'i-heroicons-clipboard-document-check' : 'i-heroicons-clipboard-document-list'"
                                variant="ghost" />
                        </div>
                    </div>
                    <Transition name="fade" mode="out-in">
                        <div v-if="item.preview"
                            class="bg-gray-200/80 dark:bg-gray-900 h-[720px] overflow-y-scroll rounded-md p-2 mt-4">
                            <ElementsHero1 v-if="item.title === 'simple'" />
                            <ElementsHero2 v-if="item.title === 'amazing'" />
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
import { useClipboard } from '@vueuse/core'

const { copy, copied } = useClipboard()

</script>
