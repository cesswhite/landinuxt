<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="Contact" :number="_contact.length"
                description="Enhance your website's user experience with our advanced Contact section components. Each component is crafted for seamless interaction and designed to facilitate meaningful connections." />
            <ElementsContentList path="/contact" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item.path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsContact1 v-if="item.title === ('simple' as ContactTemplates)" />
                            <LazyElementsContact2 v-if="item.title === ('single' as ContactTemplates)" />
                            <LazyElementsContact3 v-if="item.title === ('enterprise' as ContactTemplates)" />
                            <LazyElementsContact4 v-if="item.title === ('map' as ContactTemplates)" />
                            <LazyElementsContact5 v-if="item.title === ('multi' as ContactTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { ContactTemplates } from "../../../../types/templates";
const _contact = await queryElementsByParent("contact");

useComponentsHubCategorySeo('contact')
</script>