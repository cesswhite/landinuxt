<template>
  <div class="flex h-auto w-full flex-col gap-12 p-4 py-24 md:gap-24">
    <div class="flex flex-col items-center justify-center gap-y-4">
      <h1
        class="text-center text-4xl font-medium text-gray-950 lg:text-5xl dark:text-gray-50"
      >
        Unlock Your Project's Full Potential <br />
        with Expert Services
      </h1>
      <p
        class="w-full text-center text-lg text-gray-950/50 lg:w-1/2 dark:text-gray-50/50"
      >
        Unlock your website's full user experience potential with our diverse
        range of feature sections, from minimalist to feature-packed designs,
        all crafted to convey your brand's message and captivate your audience.
      </p>
    </div>
    <div class="grid grid-cols-12 gap-y-16 md:gap-x-6">
      <template v-for="(feat, index) in features" :key="index">
        <div
          class="col-span-full flex h-auto flex-col items-start justify-between gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 lg:col-span-4 xl:flex-row"
        >
          <div
            class="flex h-12 w-12 flex-auto items-center justify-center rounded-xl border border-gray-950/20 bg-gray-950/5 xl:w-44 dark:border-gray-500/50 dark:bg-gray-50/10"
          >
            <UIcon
              :name="feat.icon"
              class="? size-8 text-gray-950 dark:text-gray-50"
            />
          </div>
          <div class="flex w-auto flex-col gap-y-2">
            <span
              class="text-xl font-semibold text-gray-950 dark:text-gray-50"
              >{{ feat.title }}</span
            >
            <p
              class="text-base font-normal text-gray-950/50 dark:text-gray-50/50"
            >
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
