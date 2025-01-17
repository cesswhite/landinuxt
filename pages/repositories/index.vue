<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl">
                    Explore Our GitHub Repositories
                </h2>
                <p class="mt-2 text-lg leading-8 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto">
                    Dive into our diverse collection of repositories designed to assist developers in building
                    robust and scalable applications.
                </p>
            </div>
            <div class="mt-24">
                <RepositoriesContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Repositories Section | LandiNuxt",
});
</script>
