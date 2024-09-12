<template>
    <div class="w-full relative pt-24 px-4 ">
        <ContentList path="/headers" v-slot="{ list }">
            <template v-for="(item, index) in list" :key="item._path">
                <div class=" rounded-md h-auto p-2 mb-12">
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-base dark:text-gray-50/90">
                            {{ item.title }}
                        </div>
                        <div class="flex gap-2">
                            <UButton @click="setPreview(true)" icon="i-heroicons-eye" label="Preview"
                                :variant="isPreview ? 'soft' : 'link'" />
                            <UButton @click="setPreview(false)" icon="i-heroicons-code-bracket" label="Code"
                                :variant="!isPreview ? 'soft' : 'link'" />
                            <UButton icon="i-heroicons-clipboard-document-list" variant="soft" />
                        </div>
                    </div>
                    <Transition name="fade" mode="out-in">
                        <div v-if="isPreview" class="bg-gray-200/80 dark:bg-gray-900 h-96 rounded-md p-2 mt-4">
                            <LazyElementsHeaders1 v-if="item.component === index + 1" />
                        </div>
                        <div v-else class="w-full max-w-full overflow-x-scroll  prose">
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
const isPreview = ref(true)

function setPreview(preview: boolean) {
    isPreview.value = preview
}
</script>
