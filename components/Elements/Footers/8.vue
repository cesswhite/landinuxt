<template>
    <footer class="w-full h-auto relative py-4 gap-8 flex flex-col px-4 overflow-hidden bg-dark-50 dark:bg-dark-950">
        <div class="grid grid-cols-12">
            <div class="col-span-full md:col-span-8 mb-12 md:mb-0 ">
                <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
                    class="object-contain object-center h-10" loading="lazy" alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]" />
            </div>
            <div class="col-span-6 md:col-span-1">
                <ul class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col pb-4">
                    <template v-for="(nav, index) in navigation" :key="index">
                        <li class="text-dark-950 dark:text-dark-50 text-sm font-inter capitalize mb-1">
                            {{ nav.label }}
                        </li>
                        <li v-for="(inner_link, _index) in nav.links" :key="_index">
                            <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="sm"
                                class="p-0">
                                {{ inner_link.label }}
                            </UButton>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="col-span-6 md:col-span-1">
                <ul class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col pb-4">
                    <template v-for="(nav, index) in api_navigation" :key="index">
                        <li class="text-dark-950 dark:text-dark-50 text-sm font-inter capitalize mb-1">
                            {{ nav.label }}
                        </li>
                        <li v-for="(inner_link, _index) in nav.links" :key="_index">
                            <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="sm"
                                class="p-0">
                                {{ inner_link.label }}
                            </UButton>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="col-span-6 md:col-span-1">
                <ul class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col pb-4">
                    <template v-for="(nav, index) in navigation" :key="index">
                        <li class="text-dark-950 dark:text-dark-50 text-sm font-inter capitalize mb-1">
                            {{ nav.label }}
                        </li>
                        <li v-for="(inner_link, _index) in nav.links" :key="_index">
                            <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="sm"
                                class="p-0">
                                {{ inner_link.label }}
                            </UButton>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="col-span-6 md:col-span-1">
                <ul class="col-span-full sm:col-span-4 lg:col-span-2 flex flex-col pb-4">
                    <template v-for="(nav, index) in other_navigation" :key="index">
                        <li class="text-dark-950 dark:text-dark-50 text-sm font-inter capitalize mb-1">
                            {{ nav.label }}
                        </li>
                        <li v-for="(inner_link, _index) in nav.links" :key="_index">
                            <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="sm"
                                class="p-0">
                                {{ inner_link.label }}
                            </UButton>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
        <div class="grid grid-cols-12 border-t border-dark-950/10 dark:border-dark-50/10 pt-2 mb-12">
            <div class="col-span-6 md:col-span-8 flex flex-col">
                <span class="inline-block text-sm font-bold">Spotlight ©2020-2024</span>
                <template v-for="(nav, index) in bottom_navigation" :key="index">
                    <UButton :to="nav.link" target="_blank" variant="link" color="neutral" size="sm" class="p-0">
                        {{ nav.label }}
                    </UButton>
                </template>
            </div>
            <div class="col-span-6 md:col-span-4 flex flex-col gap-x-4">
                <template v-for="(nav, index) in social_media_navigation" :key="index">
                    <UButton :to="nav.link" target="_blank" variant="link" color="neutral" size="sm" class="p-0">
                        {{ nav.label }}
                    </UButton>
                </template>
            </div>
        </div>
        <div class="w-full overflow-hidden h-full">
            <svg viewBox="0 0 1920 1080" class="fill-dark-950 dark:fill-dark-50 h-full"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H1920V1H0V0Z" />
                <path d="M0 11H1920V15.18H0V11Z" />
                <path d="M0 25.1802H1920V33.3602H0V25.1802Z" />
                <path d="M0 43.3599H1920V55.5399H0V43.3599Z" />
                <path d="M0 65.54H1920V81.72H0V65.54Z" />
                <path d="M0 91.7202H1920V111.9H0V91.7202Z" />
                <path d="M0 121.9H1920V146.08H0V121.9Z" />
                <path d="M0 156.08H1920V184.26H0V156.08Z" />
                <path d="M0 194.26H1920V226.44H0V194.26Z" />
                <path d="M0 236.44H1920V272.62H0V236.44Z" />
                <path d="M0 282.62H1920V322.8H0V282.62Z" />
                <path d="M0 332.8H1920V376.98H0V332.8Z" />
                <path d="M0 386.98H1920V435.16H0V386.98Z" />
                <path d="M0 445.16H1920V674H0V445.16Z" />
                <path d="M0 684H1920V1080H0V684Z" />
            </svg>
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
    },

];
const api_navigation = [
    {
        label: 'API',
        links: [
            {
                label: "Documentation",
                link: "#",
            },
            {
                label: "API Keys",
                link: "#",
            },
            {
                label: "Rate Limits",
                link: "#",
            },
            {
                label: "Support",
                link: "#",
            },
        ]
    }
]
const social_media_navigation = [
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
];
const bottom_navigation = [
    {
        label: "Privacy policy",
        link: "#",
    },
    {
        label: "Terms & policies",
        link: "#",
    },
    {
        label: "Brand",
        link: "#",
    },
];
</script>