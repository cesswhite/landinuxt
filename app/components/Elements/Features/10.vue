<template>
    <div class="grid grid-cols-12 gap-y-24">
        <div class="col-span-full lg:col-span-7">
            <h1 class="text-7xl dark:text-dark-50 font-family-inter font-light">
                Our features are changing the game in design and development
            </h1>
        </div>
        <div class="col-span-full lg:col-span-5 flex flex-col gap-y-8 lg:border-l dark:border-dark-50/10 pb-0 lg:pl-16">
            <template v-for="(feat, index) in features" :key="index">
                <div class="col-span-full md:col-span-2 flex items-center border-b dark:border-dark-50/10 pb-8">
                    <div class="w-44 h-16">
                        <UIcon :name="feat.icon" class="text-dark-950 dark:text-dark-50/50 size-full" />
                    </div>
                    <div class="flex flex-col w-auto px-4 gap-y-2">
                        <span class="text-xl font-bold text-dark-950 dark:text-dark-50 inline-block">
                            {{ feat.title }}
                        </span>
                        <p class="text-base font-normal text-dark-950/50 dark:text-dark-50/50 inline-block">{{
                            feat.description }}
                        </p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        icon: "i-oui-app-logs",
        title: "Development",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-shard",
        title: "Design",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-pause",
        title: "Mobile Apps",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-oui-bolt",
        title: "Imagene Data",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
];
</script>