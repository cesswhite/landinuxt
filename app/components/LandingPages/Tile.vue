<template>
    <div @click="goToComponentIndex(props.data.name)"
        class="bg-primary-500/50 dark:bg-primary-400/50 col-span-full h-auto transform-gpu cursor-pointer rounded-lg p-0.5 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3">
        <div class="h-96 w-full">
            <NuxtImg :src="props.data.image" class="size-full object-cover object-top rounded-md" format="webp" />
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