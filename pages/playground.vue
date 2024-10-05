<template>
  <div
    class="flex h-auto w-full items-center justify-center bg-white p-4 py-24 dark:bg-black"
  >
    <div
      class="flex w-full flex-col gap-12 rounded-xl border bg-gray-50 bg-gray-100 p-4 md:gap-24 dark:bg-gray-900"
    >
      <div
        v-motion
        :initial="{ opacity: 0, filter: 'blur(10px)' }"
        :enter="{ opacity: 1, filter: 'blur(0px)' }"
        :duration="1200"
        class="flex w-full flex-col gap-4 md:flex-row md:gap-0"
      >
        <div class="flex w-full flex-col gap-2 md:w-1/2">
          <div class="text-primary-600 dark:text-primary-500 text-sm">
            Embark on a Wild Adventure
          </div>
          <h1 class="text-7xl font-normal text-gray-950 dark:text-gray-50">
            Safari Tour Experience
          </h1>
        </div>
        <div class="flex w-full items-center justify-start md:w-1/2">
          <p
            class="font-base w-full text-gray-950/60 md:w-1/2 dark:text-gray-50/80"
          >
            Join us on an unforgettable safari tour, where you'll explore the
            untamed wilderness and get up close with incredible wildlife.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col items-start justify-between gap-x-16 gap-y-8 md:flex-row"
      >
        <template v-for="image in images" :key="image.src">
          <div
            v-motion
            :initial="{ opacity: 0, filter: 'blur(10px)' }"
            :enter="{ opacity: 1, filter: 'blur(0px)' }"
            :duration="1200"
            class="flex flex-1 flex-col gap-2"
          >
            <div
              class="flex h-96 w-full items-center justify-center rounded-md bg-gray-200/20 p-1 dark:bg-gray-800"
            >
              <NuxtImg
                :src="image.src"
                class="size-full rounded-sm object-cover object-center"
                loading="lazy"
                alt="my-company-logo-description"
                :placeholder="[50, 25, 75, 5]"
              />
            </div>

            <span
              class="text-2xl font-medium text-gray-950 md:text-4xl dark:text-gray-50"
            >
              {{ image.label }}
            </span>
            <p
              class="w-full text-base font-normal text-gray-950/60 dark:text-gray-50/60"
            >
              {{ image.description }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Dunes",
    description:
      "A breathtaking panorama of endless sand dunes stretching towards the horizon, bathed in the warm light of a vibrant blue sky.",
  },
  {
    src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Cacti",
    description:
      "A majestic stand of towering cacti, set against a backdrop of crystal-clear blue skies and expansive desert landscapes that seem to stretch on forever.",
  },
  {
    src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Sunset",
    description:
      "A serene and peaceful sunset over the desert, casting a warm, golden orange glow over the landscape, as the day slowly gives way to the tranquility of night.",
  },
];
</script>
