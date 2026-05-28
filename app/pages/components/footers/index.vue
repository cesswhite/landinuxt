<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="Footers" :number="_footers.length"
                description="Discover a range of footer sections designed to provide both functionality and style. From minimal to content-rich designs, these footers are crafted to enhance user experience and ensure seamless navigation." />
            <ElementsContentList path="/footers" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsFooters1 v-if="item.title === ('simple' as FootersTemplates)" />
                            <LazyElementsFooters2 v-if="item.title === ('space' as FootersTemplates)" />
                            <LazyElementsFooters3 v-if="item.title === ('full' as FootersTemplates)" />
                            <LazyElementsFooters4 v-if="item.title === ('big' as FootersTemplates)" />
                            <LazyElementsFooters5 v-if="item.title === ('grid' as FootersTemplates)" />
                            <LazyElementsFooters6 v-if="item.title === ('minimal' as FootersTemplates)" />
                            <LazyElementsFooters7 v-if="item.title === ('openai' as FootersTemplates)" />
                            <LazyElementsFooters8 v-if="item.title === ('gradient' as FootersTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FootersTemplates } from "../../../../types/templates";
const _footers = await queryContent("footers").find();

useComponentsHubCategorySeo('footers')
</script>