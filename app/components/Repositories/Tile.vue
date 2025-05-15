<template>
    <div
        class="bg-dark-400/5 dark:bg-dark-500/10 col-span-full h-auto rounded-lg p-1 sm:col-span-6 md:col-span-4 2xl:col-span-3 relative">
        <div
            class="bg-dark-950/5 dark:bg-dark-800/10 flex h-auto w-full items-center justify-center rounded-md overflow-hidden">
            <NuxtImg :src="props.data.image" class="h-32 object-cover object-center" format="webp" />
        </div>
        <div v-if="props.data.isPremium"
            class="absolute top-2 right-2 bg-primary-500/10 text-primary-500 text-xs font-medium px-2 py-1 rounded-sm">
            Premium
        </div>
        <div class="p-1 flex flex-col gap-y-2 mt-2">
            <div class="flex items-center justify-between">
                <div class="flex items-center font-semibold text-lg capitalize text-dark-950 dark:text-dark-50">
                    {{ props.data.name }}
                </div>
                <UButton size="xs" variant="link" color="neutral" class="cursor-pointer" icon="i-lucide-external-link"
                    @click="goToRepo(props.data.url, props.data.name)" />
            </div>
            <p class="w-full font-normal text-sm dark:text-dark-50/60 text-dark-950/60 text-pretty">
                {{ props.data.description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Repository } from "../../../types/index";

const props = defineProps<{
    data: Repository;
}>();

function goToRepo(url: string, name: string) {
    const umami = window.umami
    umami.track(`click-to-repo-${name}`)
    window.open(url, '_blank')
}
</script>
