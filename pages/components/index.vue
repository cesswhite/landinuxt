<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Your UI toolkit, already built
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    Beautiful, responsive UI blocks ready to drop into any project — no fuss, just flow.
                </p>
            </div>
            <div class="mt-12">
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
