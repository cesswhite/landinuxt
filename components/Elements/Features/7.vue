<template>
  <div
    class="grid h-auto w-full grid-cols-12 gap-y-24 py-24 xl:gap-x-24 xl:gap-y-0 xl:px-4"
  >
    <div
      class="col-span-full flex flex-col items-start justify-center gap-y-8 xl:col-span-4"
    >
      <h1
        class="mx-auto text-left text-3xl font-medium text-gray-950 md:w-11/12 md:text-center lg:text-4xl xl:w-full xl:text-left dark:text-gray-50"
      >
        Unlock Your Project's Full Potential with Expert Services
      </h1>
      <p
        class="mx-auto w-full text-left text-lg text-gray-950/50 md:w-10/12 md:text-center xl:w-full xl:text-left dark:text-gray-50/50"
      >
        Unlock your website's full user experience potential with our diverse
        range of feature sections, from minimalist to feature-packed designs,
        all crafted to convey your brand.
      </p>
      <div
        class="flex w-full items-center justify-start md:justify-center xl:justify-start"
      >
        <UButton variant="subtle" color="primary" size="lg" to="#">
          Learn more about features
        </UButton>
      </div>
    </div>
    <div
      class="col-span-full grid w-full grid-cols-subgrid gap-y-12 md:gap-x-6 xl:col-span-8"
    >
      <template v-for="(feat, index) in features" :key="index">
        <div
          class="col-span-full flex h-auto flex-col justify-center gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 md:items-center xl:col-span-4"
        >
          <div
            class="border-primary-500/50 bg-primary-100/10 dark:bg-primary-50/10 flex h-12 w-12 flex-auto items-center justify-center rounded-full border p-3"
          >
            <UIcon
              :name="feat.icon"
              class="? text-primary-600 dark:text-primary-400 size-8"
            />
          </div>
          <span class="text-xl font-semibold text-gray-950 dark:text-gray-50">{{
            feat.title
          }}</span>
          <p
            class="px-0 text-left text-base font-normal text-gray-950/50 md:px-4 md:px-12 md:text-center dark:text-gray-50/50"
          >
            {{ feat.description }}
          </p>
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
