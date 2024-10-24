<template>
    <div class="relative w-full py-24 px-4">
        <div class="mb-24">
            <h1 class="mt-1 text-5xl font-bold capitalize text-gray-950 dark:text-gray-50">
                Get Started
            </h1>
        </div>
        <div class="w-full px-4 md:w-screen-lg mx-auto text-gray-950 ?">
            <!--       <ContentQuery path="/instructions" v-slot="{ data }">
                {{ data }}
                <ContentRenderer>
                    <ContentRendererMarkdown :value="data" />
                </ContentRenderer>
            </ContentQuery>
 -->
            <ContentDoc path="/instructions" class="prose" />

        </div>
    </div>
</template>

<script setup lang="ts">
useSeoMeta({
    title: "Featuress Section | LandiNuxt",
});
</script>