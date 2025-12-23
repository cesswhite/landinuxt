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
import type { TestimonialsTemplates } from "../../../../types/templates";
const config = useRuntimeConfig()
const route = useRoute()
const _testimonials = await queryContent("testimonials").find();

useSeoMeta({
  title: "Testimonial Components | LandiNuxt",
  description: "Enhance your website's credibility with our premium Testimonials components. Each component is crafted to showcase customer satisfaction and build trust with potential clients.",
  ogTitle: "Testimonial Components | LandiNuxt",
  ogDescription: "Enhance your website's credibility with our premium Testimonials components. Each component is crafted to showcase customer satisfaction and build trust with potential clients.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || 'https://www.landinuxt.com'}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "Testimonial Components | LandiNuxt",
  twitterDescription: "Enhance your website's credibility with our premium Testimonials components. Each component is crafted to showcase customer satisfaction and build trust with potential clients.",
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>