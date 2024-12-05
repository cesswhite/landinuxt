<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="FAQ" :number="_faq.length"
                description="Transform your website's conversion rates with our premium Call-to-Action components. Each component is optimized for maximum engagement and designed to turn visitors into customers." />
            <ContentList path="/faq" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FAQTemplates } from "~/types/templates";
const _faq = await queryContent("faq").find();

useSeoMeta({
    title: "FAQ Section | LandiNuxt",
});
</script>