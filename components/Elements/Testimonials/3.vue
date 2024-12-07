<template>
    <div class="relative w-full h-auto bg-dark-50 dark:bg-gray-950 py-24">
        <div class="flex flex-col items-center justify-center gap-y-2">
            <UBadge color="primary" variant="soft">
                Join the Movement
            </UBadge>
            <h1 class="font-light text-5xl md:text-6xl text-center text-dark-950 dark:text-dark-50">
                Welcome to the Wellness Hub
            </h1>
            <p class="w-full px-4 md:p-0 md:w-1/2 mx-auto text-center mt-4 text-dark-950/50 dark:text-dark-50/50">
                Discover a space where mind, body, and soul connect. Our tribe embraces holistic well-being, offering a
                community for everyone to explore and grow together.
            </p>
        </div>
        <UContainer>
            <div class="grid grid-cols-12 gap-4 mt-12">
                <template v-for="(testimonial, index) in testimonials">
                    <div class="col-span-full lg:col-span-6 grid grid-cols-2 gap-4">
                        <div class="col-span-full lg:col-span-1 h-auto">
                            <NuxtImg :src="testimonial.img" format="webp"
                                class="w-full h-96 object-center object-cover rounded-2xl" />
                        </div>
                        <div
                            class="col-span-full lg:col-span-1 p-4 flex flex-col items-start lg:items-center lg:justify-between bg-dark-100 dark:bg-dark-900/80 rounded-2xl">
                            <div class="flex flex-col w-full">
                                <UIcon name="i-ri-double-quotes-r" class="size-8" />
                                <h2 class="text-xl text-dark-950 dark:text-dark-50">
                                    {{ testimonial.title }}
                                </h2>
                            </div>
                            <div class="flex flex-col mt-12">
                                <p class="text-base text-dark-950/60 dark:text-dark-50/60">
                                    {{ testimonial.text }}
                                </p>
                                <span class="text-base font-medium mt-1 text-dark-950/80 dark:text-dark-50/80">
                                    {{ testimonial.name }}
                                </span>
                            </div>
                        </div>
                    </div>
                </template>
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
            "img": "https://images.unsplash.com/photo-1512291313931-d4291048e7b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Ana Rodríguez",
            "username": "@anarod",
            "text": "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
            "title": "Negocio Transformado",
            "img": "https://images.unsplash.com/photo-1640622659613-26d7d08893e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Michael Lee",
            "username": "@michaellee",
            "text": "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
            "title": "Intuitive Experience",
            "img": "https://images.unsplash.com/photo-1592967547619-491e36f79e7d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            "name": "Laura Fernández",
            "username": "@laurafern",
            "text": "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
            "title": "Herramienta de Landing Pages",
            "img": "https://images.unsplash.com/photo-1651786120506-390d37d4d9e3?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]);

</script>