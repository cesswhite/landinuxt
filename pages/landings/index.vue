<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50  sm:text-4xl">
                    Discover Our Diverse <br>
                    Collection of Landing Pages
                </h2>
                <p class="mt-2 text-lg leading-8 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto">
                    Explore a variety of beautifully designed landing pages tailored to enhance your projects.
                    Learn how to effectively utilize these UI components to create stunning and functional user
                    experiences.
                </p>
            </div>
            <div class="mt-24">
                <LandingPagesContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Landing Pages Section | LandiNuxt",
});
</script>
