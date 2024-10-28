<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50  sm:text-4xl">
                    Explore the components
                </h2>
                <p class="mt-2 text-lg leading-8 text-primary-950/60 dark:text-primary-50/50 w-full md:w-1/2 mx-auto">
                    Discover a wide range of UI components and learn how to use them effectively to enhance your
                    projects.
                </p>
            </div>
            <div class="mt-24">
                <ElementsContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "All Components Section | LandiNuxt",
});
</script>
