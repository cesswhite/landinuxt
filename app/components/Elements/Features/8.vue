<template>
    <div class="flex flex-col gap-y-32 w-full">
        <template v-for="(feat, index) in features" :key="index">
            <div class="flex flex-col-reverse md:flex-row md:even:flex-row-reverse  w-full items-end justify-start">
                <div class="w-full mt-12 md:w-1/2 h-[320px] lg:h-[640px]">
                    <NuxtImg :src="feat.image" class="size-full rounded-sm object-cover object-center" loading="lazy"
                        alt="my-company-logo-description" width="640" height="640" :placeholder="[50, 25, 75, 5]"
                        format="webp" />
                </div>
                <div class="w-full md:w-1/2 flex flex-col gap-y-2 p-0 md:px-8 items-start">
                    <span class="text-dark-950 dark:text-dark-50 text-4xl lg:text-6xl font-family-instrument">
                        {{ feat.title }}
                    </span>
                    <p class="text-dark-950/50 dark:text-dark-50/50 text-xl lg:text-2xl font-family-instrument">
                        {{ feat.description }}
                    </p>
                    <div class="w-auto mt-12">
                        <UButton :to="feat.link" icon="i-heroicons-arrow-long-right" variant="link" color="neutral">
                            Learn more about
                        </UButton>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const features = [
    {
        image: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Development",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        image: "https://images.pexels.com/photos/7988114/pexels-photo-7988114.jpeg",
        title: "Design",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        image: "https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg",
        title: "Mobile Apps",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        image: "https://images.pexels.com/photos/12495614/pexels-photo-12495614.jpeg",
        title: "Imagene Data",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
];
</script>