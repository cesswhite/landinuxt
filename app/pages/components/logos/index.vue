<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="Logos" :number="_logos.length"
                description="Elevate your brand's visibility with our diverse range of Logos section components. Each component is designed to showcase your partnerships and collaborations in a visually appealing way." />
            <ElementsContentList path="/logos" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsLogos1 v-if="item.title === ('simple' as LogosTemplates)" />
                            <LazyElementsLogos2 v-if="item.title === ('animated' as LogosTemplates)" />
                            <LazyElementsLogos3 v-if="item.title === ('multi' as LogosTemplates)" />
                            <LazyElementsLogos4 v-if="item.title === ('mini' as LogosTemplates)" />
                            <LazyElementsLogos5 v-if="item.title === ('double' as LogosTemplates)" />
                            <LazyElementsLogos6 v-if="item.title === ('high-converting' as LogosTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { LogosTemplates } from "../../../../types/templates";
const _logos = await queryContent("logos").find();

useComponentsHubCategorySeo('logos')
</script>