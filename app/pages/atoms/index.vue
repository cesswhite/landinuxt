<template>
    <NuxtLayout name="default">
        <UContainer>
            <div class="mx-auto text-center pt-24 flex flex-col gap-y-2">
                <h2 class="text-3xl font-bold tracking-tight text-dark-950 dark:text-dark-50 sm:text-4xl 2xl:text-5xl">
                    Atomic Components for Your App
                </h2>
                <p
                    class="text-lg/6 text-dark-950/60 dark:text-dark-50/50 w-full md:w-1/2 mx-auto md:text-xl/6 2xl:text-2xl/6">
                    Essential atomic components — reusable, minimal, and ready to power your application instantly.
                </p>
            </div>
            <div class="mt-12">
                <AtomsContainer />
            </div>
        </UContainer>
    </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Atoms Library | LandiNuxt",
});
</script>
