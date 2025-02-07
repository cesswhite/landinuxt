<template>
    <div
        class="bg-dark-400/5 dark:bg-dark-500/10 col-span-full h-auto rounded-lg p-1 sm:col-span-6 md:col-span-4 2xl:col-span-3">
        <div class="bg-dark-950/5 dark:bg-dark-800/10 flex h-auto w-full items-center justify-center rounded-md">
            <NuxtImg :src="currentImage" class="h-32 object-cover object-center" format="webp" />
        </div>
        <div class="p-1 flex flex-col gap-y-2 mt-2">
            <div class="flex items-center justify-between">
                <span class="inline-block font-semibold text-lg capitalize text-dark-950 dark:text-dark-50">
                    {{ props.data.name }}
                </span>
                <UButton size="xs" variant="link" color="neutral" class="cursor-pointer" icon="i-lucide-external-link"
                    :to="props.data.url" target="_blank" />
            </div>
            <p class="w-full font-normal text-sm dark:text-dark-50/60 text-dark-950/60 text-pretty">
                {{ props.data.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Repository } from "~/types/index";

const props = defineProps<{
    data: Repository;
}>();

const currentImage = ref('')
const currentDescription = ref('')

const { data: metatags, error } = await useFetch('/api/getMetaTags', {
    params: { url: props.data.url },
});

if (metatags.value && 'image' in metatags.value) {
    currentImage.value = metatags.value.image
    currentDescription.value = metatags.value.description
}

if (error.value) {
    console.error('Error al obtener los metatags:', error.value);
}

</script>
