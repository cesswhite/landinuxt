<template>
  <div
    class="bg-primary-800 flex h-auto w-full flex-col gap-12 p-4 md:gap-24 md:p-12"
  >
    <div class="flex flex-col items-center justify-center gap-y-4">
      <h1 class="text-center text-3xl font-medium text-dark-50 lg:text-5xl">
        Unlock Your Project's Full Potential <br />
        with Expert Services
      </h1>
      <p
        class="w-full text-center text-lg text-dark-50/70 lg:w-1/2 dark:text-dark-100/70"
      >
        Unlock your website's full user experience potential with our diverse
        range of feature sections, from minimalist to feature-packed designs,
        all crafted to convey your brand's message and captivate your audience.
      </p>
    </div>
    <div class="grid grid-cols-12 gap-y-6 md:gap-x-6">
      <template v-for="(feat, index) in features" :key="index">
        <div
          class="col-span-full flex h-auto flex-col items-start justify-between rounded-lg bg-dark-950/10 p-4 transition-all duration-300 ease-in-out hover:bg-dark-950/20 md:col-span-6 lg:col-span-4"
        >
          <UIcon :name="feat.icon" class="size-12 text-dark-50/80" />
          <div class="mt-24 flex flex-col gap-y-2">
            <span class="text-xl font-semibold text-dark-50">{{
              feat.title
            }}</span>
            <p class="text-base font-normal text-dark-50/60">
              {{ feat.description }}
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
    icon: "i-heroicons-command-line",
    title: "Development",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
  {
    icon: "i-heroicons-swatch",
    title: "Design",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    title: "Mobile Apps",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
  {
    icon: "i-heroicons-cloud",
    title: "Imagene Data",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
  {
    icon: "i-heroicons-cloud",
    title: "Imagene AI",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
  {
    icon: "i-heroicons-cloud",
    title: "Imagene Cloud",
    description:
      "Explore the limitless possibilities of your project with our comprehensive design services. From initial conceptualization to final deployment, we guarantee a smooth integration of the latest technologies to propel your business ahead.",
    link: "#",
  },
];
</script>
