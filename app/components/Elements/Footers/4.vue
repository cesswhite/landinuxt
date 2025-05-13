<template>
    <footer class="w-full h-auto relative py-2 flex flex-col px-4 overflow-hidden bg-dark-50 dark:bg-dark-950">
        <div class="grid grid-cols-12 w-full">
            <div class="col-span-full lg:col-span-6 flex flex-col gap-y-6 items-start justify-start">
                <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
                    class="h-6 md:h-10 object-contain object-center" loading="lazy" alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]" format="webp" />
                <p class="text-dark-950/50 dark:text-dark-50/50 text-sm w-full md:w-1/2 font-inter inline-block">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae labore accusamus perspiciatis
                    quasi
                    aperiam amet voluptatibus vero quidem consectetur architecto dolore quaerat, ad id facilis eligendi
                    totam,
                    quas maiores!
                </p>
                <div class="">
                    <UButton icon="i-heroicons-arrow-right" trailing variant="link" color="primary" class="p-0">
                        Learn more about us
                    </UButton>
                </div>
                <div class="flex items-center justify-start text-sm text-dark-950/50 dark:text-dark-50/50">
                    ©LandiNuxt is a Open Source Project by Eco Development Studios
                </div>
            </div>
            <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full mt-6">
                <template v-for="(nav, index) in navigation" :key="index">
                    <li class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize mb-3">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg"
                            class="p-0">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
            <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full mt-6">
                <template v-for="(nav, index) in social_media_navigation" :key="index">
                    <li class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize mb-3">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg"
                            class="p-0 hover:underline">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
            <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full mt-6">
                <template v-for="(nav, index) in other_navigation" :key="index">
                    <li class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize mb-3">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg"
                            class="p-0 hover:underline">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
        </div>

        <div class="w-full mt-44 relative -bottom-4">
            <div class="absolute size-full bg-gradient-to-t from-dark-50 from-25% dark:from-dark-950" />
            <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683150145/Group_26_tooxf6.svg"
                class="object-contain object-center size-full" loading="lazy" alt="my-company-logo-description"
                :placeholder="[50, 25, 75, 5]" format="webp" />
        </div>
    </footer>
</template>

<script setup lang="ts">
const navigation = [
    {
        label: "Services",
        links: [
            {
                label: 'Development',
                link: '#'
            },
            {
                label: "Design",
                link: "#",
            },
            {
                label: "Mobile Apps",
                link: "#",
            },
            {
                label: "Imagene Data",
                link: "#",
            },]
    },

];

const other_navigation = [
    {
        label: 'Company',
        links: [
            {
                label: "About",
                link: "#",
            },
            {
                label: "Website",
                link: "#",
            },
            {
                label: "Brand",
                link: "#",
            },
            {
                label: "Gallery",
                link: "#",
            },
            {
                label: "Blog",
                link: "#",
            },
            {
                label: "Services",
                link: "#",
            },
            {
                label: "Careers",
                link: "#",
            },
        ]
    }
];

const social_media_navigation = [
    {
        label: "Social Media",
        links: [
            {
                label: "X",
                link: "https://x.com/",
            },
            {
                label: "Instagram",
                link: "https://instagram.com/",
            },
            {
                label: "Facebook",
                link: "https://facebook.com/",
            },
            {
                label: "LinkedIn",
                link: "https://linkedin.com/",
            },
            {
                label: "YouTube",
                link: "https://youtube.com/",
            },
            {
                label: "GitHub",
                link: "https://github.com/",
            },
        ]
    }
];

</script>