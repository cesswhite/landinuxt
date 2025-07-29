<template>
    <div class="w-full mt-8">
        <div class="fixed z-40 -translate-x-1/2 left-1/2 bottom-2 mb-4 flex items-center justify-center gap-x-4">
            <UButton @click="view_code = false" icon="i-heroicons-eye" label="Preview" class="cursor-pointer" />
            <UButton @click="view_code = true" icon="i-heroicons-code-bracket" label="Code" class="cursor-pointer" />
            <UButton @click="copyCode()" variant="ghost" class="cursor-pointer" :icon="current === props.name
                ? 'i-heroicons-clipboard-document-check'
                : 'i-heroicons-clipboard-document-list'
                " />
        </div>
        <div v-if="!view_code" class="h-auto w-full">
            <slot name="component" />
        </div>
        <div v-else class="h-screen w-full relative flex items-center justify-center overflow-hidden">
            <div class="h-[420px] w-1/2">
                <ContentQuery :path="`/atoms/${props.name}`" find="one" v-slot="{ data }">
                    <ContentRenderer>
                        <ContentRendererMarkdown :value="data" class="prose h-full max-w-full" />
                    </ContentRenderer>
                </ContentQuery>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";

const view_code = ref(false)

const props = defineProps<{
    name: string,
    code: string;
}>()
const current = ref('');

function copyCode() {
    const { copy } = useClipboard();
    copy(props.code);
    current.value = props.name;
    setTimeout(() => {
        current.value = '';
    }, 1500);
}
</script>