<template>
    <div @click="goToComponentIndex(props.data.name)"
        class="bg-primary-400/5 dark:bg-primary-500/10 col-span-full h-auto transform-gpu cursor-pointer rounded-lg p-1 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3">
        <div class="bg-primary-950/5 dark:bg-primary-800/10 flex h-96 w-full items-center justify-center rounded-md">
            <NuxtImg :src="props.data.image" class="size-full object-cover object-top" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Landing } from "~/types/index";

const props = defineProps<{
    data: Landing;
}>();

function goToComponentIndex(name: string) {
    navigateTo(`/landings/${name}`);
}
</script>