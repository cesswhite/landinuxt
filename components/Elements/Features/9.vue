<template>
    <div class="flex flex-col gap-x-24 lg:flex-row justify-start items-center">
        <div class="flex flex-col gap-y-24 w-full lg:w-1/2">
            <div class="flex flex-col gap-y-2">
                <span class="text-3xl font-bold text-dark-950 dark:text-dark-50 inline-block">Features</span>
                <p class="text-lg font-normal text-dark-950/50 dark:text-dark-50/50">Explore the wide range of features
                    our
                    website has to
                    offer. From user-friendly interfaces to seamless
                    navigation, we've got you covered. Check out our features and start your journey today!
                </p>
            </div>
            <div class="grid grid-cols-4 w-full gap-24">
                <template v-for="(feat, index) in features" :key="index">
                    <div class="col-span-full md:col-span-2 flex flex-col gap-y-2">
                        <div
                            class="flex size-8 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800">
                            <UIcon :name="feat.icon" class="text-dark-950 dark:text-dark-50" />
                        </div>
                        <span class="text-lg font-bold text-dark-950 dark:text-dark-50 inline-block">{{ feat.title
                            }}</span>
                        <p class="text-base font-normal text-dark-950/50 dark:text-dark-50 inline-block">{{
                            feat.description }}
                        </p>
                    </div>
                </template>
            </div>
        </div>
        <div class="mt-24 relative w-full lg:w-1/2 h-full lg:mt-0 xl:h-[620px]">
            <NuxtImg src="https://images.pexels.com/photos/12495614/pexels-photo-12495614.jpeg"
                class="size-full rounded-sm object-cover object-center" loading="lazy" alt="my-company-logo-description"
                width="640" height="640" :placeholder="[50, 25, 75, 5]" />
        </div>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        icon: "i-heroicons-command-line",
        title: "Development",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-swatch",
        title: "Design",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-device-phone-mobile",
        title: "Mobile Apps",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-cloud",
        title: "Imagene Data",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
];
</script>