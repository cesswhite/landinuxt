<template>
    <NuxtLayout name="default">
        <div class="relative w-full py-24 px-4">
            <ElementsHeader name="Footers" :number="_footers.length"
                description="Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation." />
            <ContentList path="/footers" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsFooters1 v-if="item.title === ('simple' as FootersTemplates)" />
                            <LazyElementsFooters2 v-if="item.title === ('space' as FootersTemplates)" />
                            <LazyElementsFooters3 v-if="item.title === ('full' as FootersTemplates)" />
                            <LazyElementsFooters4 v-if="item.title === ('big' as FootersTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FootersTemplates } from "~/types/templates";
const _footers = await queryContent("footers").find();

useSeoMeta({
    title: "Footers Section | LandiNuxt",
});
</script>