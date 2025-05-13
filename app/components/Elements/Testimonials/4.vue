<template>
    <div class="relative w-full h-auto py-24 px-4 bg-dark-50 dark:bg-dark-950">
        <UContainer>
            <div class="relative w-full h-auto py-24 px-4">
                <h1 class="font-light text-3xl md:text-4xl text-left text-dark-950 dark:text-dark-50">
                    Trusted by businesses and <br>
                    individuals worldwide.
                </h1>
                <div class="grid grid-cols-12 gap-4 mt-12">
                    <template v-for="(testimonial, index) in testimonials">
                        <div class="col-span-full lg:col-span-4 gap-4">
                            <div
                                class="p-4 flex flex-col items-start justify-between border border-dark-950/10 dark:border-dark-600/30 shadow-xl shadow-dark-950/5 dark:shadow-primary-500/5 rounded-2xl h-full">
                                <div class="flex items-start w-full">
                                    <UIcon name="i-heroicons-star-20-solid"
                                        class="text-yellow-500/80 dark:text-yellow-600/80" />
                                    <UIcon name="i-heroicons-star-20-solid"
                                        class="text-yellow-500/80 dark:text-yellow-600/80" />
                                    <UIcon name="i-heroicons-star-20-solid"
                                        class="text-yellow-500/80 dark:text-yellow-600/80" />
                                    <UIcon name="i-heroicons-star-20-solid"
                                        class="text-yellow-500/80 dark:text-yellow-600/80" />
                                    <UIcon name="i-heroicons-star-20-solid"
                                        class="text-yellow-500/40 dark:text-yellow-600/40" />
                                </div>
                                <p class="text-base text-dark-950/60 dark:text-dark-50/60 mt-8">
                                    {{ testimonial.text }}
                                </p>
                                <div class="flex items-center w-full mt-12 gap-x-4">
                                    <div class="w-auto inline">
                                        <UAvatar :alt="testimonial.name" size="md" class="bg-primary-500"
                                            :ui="{ fallback: 'text-dark-50/90' }" />
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-medium text-dark-950/80 dark:text-dark-50/90">
                                            {{ testimonial.name }}
                                        </span>
                                        <span class="text-sm font-medium text-dark-950/60 dark:text-dark-50/60">
                                            {{ testimonial.username }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef(
    [
        {
            "name": "Emily Johnson",
            "username": "@emilyj",
            "text": "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
            "title": "Business Transformation",

        },
        {
            "name": "Ana Rodríguez",
            "username": "@anarod",
            "text": "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
            "title": "Negocio Transformado",

        },
        {
            "name": "Michael Lee",
            "username": "@michaellee",
            "text": "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
            "title": "Intuitive Experience",

        }
    ]);
</script>