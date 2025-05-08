<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Discover Our Diverse <br>
                    Collection of Landing Pages
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    Explore a variety of beautifully designed landing pages tailored to enhance your projects.
                </p>
            </div>
            <div class="mt-12">
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
