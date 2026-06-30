<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="FAQ" :number="_faq.length"
                description="Explore our FAQ section to find answers to common questions. We've curated a list of the most frequently asked questions to help you navigate our website with ease." />
            <ElementsContentList path="/faq" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item.path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsFAQ1 v-if="item.title === ('simple' as FAQTemplates)" />
                            <LazyElementsFAQ2 v-if="item.title === ('border' as FAQTemplates)" />
                            <LazyElementsFAQ3 v-if="item.title === ('grid' as FAQTemplates)" />
                            <LazyElementsFAQ4 v-if="item.title === ('high-converting' as FAQTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { FAQTemplates } from "../../../../types/templates";
const _faq = await queryElementsByParent("faq");

useComponentsHubCategorySeo('faq')
</script>