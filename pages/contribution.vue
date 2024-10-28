<template>
    <NuxtLayout name="default">
        <div class="relative w-full py-24 px-4 max-w-max mx-auto">
            <div class="mb-12">
                <h1 class="mt-1 text-5xl font-bold capitalize text-dark-950 dark:text-dark-50">
                    Contribution Guide
                </h1>
            </div>
            <div class="">
                <ContentDoc path="/contribution" class="prose" />
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Contribution Section | LandiNuxt",
});
</script>