<template>
    <div class="w-full grid grid-cols-12 gap-2">
        <template v-for="(_comp, index) in components" :key="index">
            <div @click="goToComponentIndex(_comp)"
                class="col-span-full sm:col-span-6 md:col-span-4 2xl:col-span-3 h-56 rounded-lg bg-gray-200/50 dark:bg-zinc-800/10 p-1 cursor-pointer">
                <div
                    class="w-full h-full flex items-center justify-center bg-gray-200/60 dark:bg-gray-800/10 rounded-md">
                </div>
                <div class="font-bold text-base capitalize mt-2 text-gray-950/90  dark:text-gray-50/90">
                    {{ _comp }}
                </div>
            </div>
        </template>

    </div>
</template>

<script setup lang="ts">
const components = ['headers', 'hero']

function goToComponentIndex(name: string) {
    navigateTo(`/components/${name}`)
}
</script>