<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="Testimonials" :number="_testimonials.length"
                description="Enhance your website's credibility with our premium Testimonials components. Each component is crafted to showcase customer satisfaction and build trust with potential clients." />
            <ContentList path="/testimonials" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsTestimonials1 v-if="item.title === ('masonry' as TestimonialsTemplates)" />
                            <LazyElementsTestimonials2 v-if="item.title === ('pastelide' as TestimonialsTemplates)" />
                            <LazyElementsTestimonials3 v-if="item.title === ('tiles' as TestimonialsTemplates)" />
                            <LazyElementsTestimonials4 v-if="item.title === ('stars' as TestimonialsTemplates)" />
                            <LazyElementsTestimonials5 v-if="item.title === ('bento' as TestimonialsTemplates)" />
                            <LazyElementsTestimonials6
                                v-if="item.title === ('high-converting' as TestimonialsTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { TestimonialsTemplates } from "~/types/templates";
const _testimonials = await queryContent("testimonials").find();

useSeoMeta({
    title: "Testimonials Section | LandiNuxt",
});
</script>