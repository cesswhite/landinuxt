<template>
    <footer class="w-full h-auto relative py-2 flex flex-col px-4 overflow-hidden bg-dark-50 dark:bg-dark-950">
        <div class="grid grid-cols-12 border border-gray-950 dark:border-dark-50">
            <div
                class="col-span-full lg:col-span-6 flex flex-col gap-y-4 items-start justify-start p-8 border-b lg:border-b-0 lg:border-r border-gray-950 dark:border-gray-50">
                <div class="h-10 mx-auto md:mx-0">
                    <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683150145/Group_26_tooxf6.svg"
                        class="object-contain object-center size-full" loading="lazy" alt="my-company-logo-description"
                        :placeholder="[50, 25, 75, 5]" />
                </div>
                <p class="text-dark-950/70 dark:text-dark-50/70 w-full md:pr-44">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui vero nihil laudantium? Nemo
                    reiciendis
                    asperiores quidem ducimus corrupti incidunt porro ad itaque natus, quisquam commodi, ipsa vitae
                    nulla ex!
                </p>
            </div>
            <ul
                class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col gap-y-4 pb-4 sm:border-r border-gray-950 dark:border-dark-50">
                <template v-for="(nav, index) in navigation" :key="index">
                    <li
                        class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize p-4 border-b border-gray-950 dark:border-dark-50  uppercase">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index" class="px-4 ">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="md"
                            class="p-0 uppercase">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
            <ul
                class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col gap-y-4  pb-4 border-t sm:border-t-0 sm:border-r border-gray-950 dark:border-dark-50 dark:border-gray-50">
                <template v-for="(nav, index) in social_media_navigation" :key="index">
                    <li
                        class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize p-4 border-b border-gray-950 dark:border-dark-50 uppercase">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index" class="px-4 ">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="md"
                            class="p-0 uppercase">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
            <ul class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col gap-y-4 pb-4 border-t sm:border-t-0">
                <template v-for="(nav, index) in other_navigation" :key="index">
                    <li
                        class="text-dark-950 dark:text-dark-50 text-base font-inter capitalize p-4 border-b border-gray-950 dark:border-dark-50 uppercase">
                        {{ nav.label }}
                    </li>
                    <li v-for="(inner_link, _index) in nav.links" :key="_index" class="px-4">
                        <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="md"
                            class="p-0 uppercase">
                            {{ inner_link.label }}
                        </UButton>
                    </li>
                </template>
            </ul>
            <div
                class="col-span-full flex flex-col md:flex-row gap-4 w-full items-center justify-center py-4 border-t border-gray-950 dark:border-gray-50">
                <template v-for="(nav, index) in bottom_navigation" :key="index">
                    <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0 uppercase">
                        {{ nav.label }}
                    </UButton>
                </template>
            </div>
            <div
                class="col-span-full flex flex-col md:flex-row gap-4 w-full items-center justify-center p-4 border-t border-gray-950 dark:border-gray-50">
                <div
                    class="flex items-center justify-start text-sm text-dark-950/70 dark:text-dark-50/70 uppercase text-center">
                    ©LandiNuxt is a Open Source Project by Eco Development Studios
                </div>
            </div>
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

const bottom_navigation = [
    {
        label: "Privacy Policy",
        link: "#",
    },
    {
        label: "Terms & Conditions",
        link: "#",
    },
    {
        label: "Contact",
        link: "#",
    },
    {
        label: "Website",
        link: "#",
    },
];
</script>