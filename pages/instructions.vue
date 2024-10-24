<template>
    <div class="relative w-full py-24 px-4">
        <div class="mb-24">
            <h1 class="mt-1 text-5xl font-bold capitalize text-gray-950 dark:text-gray-50">
                Get Started
            </h1>
        </div>
        <div class="max-w-max mx-auto">
            <ContentDoc path="/instructions" class="prose " />
        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Featuress Section | LandiNuxt",
});
</script>