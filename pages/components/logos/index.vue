<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="Logos" :number="_logos.length"
                description="Elevate your brand's visibility with our diverse range of Logos section components. Each component is designed to showcase your partnerships and collaborations in a visually appealing way." />
            <ContentList path="/logos" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsLogos1 v-if="item.title === ('simple' as LogosTemplates)" />
                            <LazyElementsLogos2 v-if="item.title === ('animated' as LogosTemplates)" />
                            <LazyElementsLogos3 v-if="item.title === ('multi' as LogosTemplates)" />
                            <LazyElementsLogos4 v-if="item.title === ('mini' as LogosTemplates)" />
                            <LazyElementsLogos5 v-if="item.title === ('double' as LogosTemplates)" />
                            <LazyElementsLogos6 v-if="item.title === ('credibility' as LogosTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { LogosTemplates } from "~/types/templates";
const _logos = await queryContent("logos").find();

useSeoMeta({
    title: "Logos Section | LandiNuxt",
});
</script>