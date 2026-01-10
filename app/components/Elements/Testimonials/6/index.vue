<template>
    <div class="relative h-auto w-full py-24">
        <div class="col-span-full flex flex-col items-center justify-center gap-4 md:col-span-6">
            <h2 class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight">
                What Our Clients Say
            </h2>
            <p
                class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl lg:mx-auto lg:w-1/2 lg:text-center">
                Discover how our solutions have transformed businesses through the words of our satisfied clients.
            </p>
        </div>
        <UCarousel v-slot="{ item }" loop :autoplay="{ delay: 6000 }" align="center" :items="testimonials" class="mt-12"
            :ui="{
                item: 'basis-full sm:basis-1/3 md:basis-2/5 relative ps-0 md:ps-4',
                container: 'flex items-center relative m-0',
                prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
                next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
            }">
            <div class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24">
                <div class="flex mx-auto items-start">
                    <UIcon name="i-heroicons-star-20-solid" class="text-primary-500/80 dark:text-primary-600/80" />
                    <UIcon name="i-heroicons-star-20-solid" class="text-primary-500/80 dark:text-primary-600/80" />
                    <UIcon name="i-heroicons-star-20-solid" class="text-primary-500/80 dark:text-primary-600/80" />
                    <UIcon name="i-heroicons-star-20-solid" class="text-primary-500/80 dark:text-primary-600/80" />
                    <UIcon name="i-heroicons-star-20-solid" class="text-primary-500/40 dark:text-primary-600/40" />
                </div>
                <p class="text-dark-950 dark:text-dark-50 text-center text-xl font-medium italic mt-4">
                    "{{ item.text }}"
                </p>
                <div class="mt-12 flex flex-col items-center justify-center">
                    <span class="text-dark-950 dark:text-dark-50 inline-block w-full text-base font-bold text-center">{{
                        item.name
                        }}</span>
                    <span
                        class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-center text-base font-semibold italic">{{
                            item.username
                        }}</span>
                </div>
            </div>
        </UCarousel>
    </div>
</template>

<script setup lang="ts">
const testimonials = shallowRef([
    {
        name: "Emily Johnson",
        username: "@emilyj_design",
        text: "The mesh gradient toolkit revolutionized my design workflow. The intuitive interface and powerful customization options helped me create stunning visuals in minutes instead of hours.",
    },
    {
        name: "Ana Rodríguez",
        username: "@anarod_creative",
        text: "As a creative director, I needed a solution that balances quality with efficiency. This platform delivers both, allowing my team to produce consistent, high-quality visuals across all our client projects.",
    },
    {
        name: "Michael Lee",
        username: "@michaellee_dev",
        text: "The export options are phenomenal! Being able to instantly generate code for my web projects has cut development time by 40%. The responsive preview feature is a game-changer.",
    },
    {
        name: "Sarah Chen",
        username: "@sarahchen_ux",
        text: "I've tested dozens of design tools, and this one stands out for its perfect balance of power and simplicity. The cloud sync feature ensures my gradients are accessible across all my devices.",
    },
    {
        name: "John Smith",
        username: "@johnsmith_brand",
        text: "Our branding agency switched to this platform six months ago, and client satisfaction has increased dramatically. The ability to quickly iterate on gradient designs during live meetings impresses everyone.",
    },
]);
</script>