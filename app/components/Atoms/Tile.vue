<template>
    <div @click="goToComponentIndex(props.data.name)"
        class="bg-dark-400/5 dark:bg-dark-500/10 col-span-full h-auto transform-gpu cursor-pointer rounded-lg p-1 transition-transform duration-300 ease-in-out will-change-transform hover:rotate-2 odd:hover:-rotate-2 sm:col-span-6 md:col-span-4 2xl:col-span-3">
        <div class="bg-dark-950/5 dark:bg-dark-800/10 flex h-56 w-full items-center justify-center rounded-md">
            <LazyAtomsLogoCover v-if="props.data.name === 'logo'" />
            <LazyAtomsButtonCover v-if="props.data.name === 'button'" />
            <LazyAtomsInputCover v-if="props.data.name === 'input'" />
        </div>
        <div class="text-dark-950/90 dark:text-dark-50/90 mt-2 p-1 text-base font-bold capitalize">
            {{ props.data.name }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { iAtoms } from "../../../types/index";

const props = defineProps<{
    data: iAtoms;
}>();

function goToComponentIndex(name: string) {
    navigateTo(`/atoms/${name}`);
    const umami = window.umami
    umami.track(`click-to-atom-${name}`)
}
</script>