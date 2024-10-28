<template>
  <div class="flex h-auto min-h-dvh w-full items-center justify-center bg-white p-4 py-24 dark:bg-black">
    <footer class="w-full relative py-2 border-t border-gray-950/10 dark:border-gray-50/50 py-12">
      <div class="flex flex-col-reverse items-start md:items-end md:flex-row justify-between gap-y-12">
        <div class="flex w-full md:w-1/2 flex-col">
          <span class="text-sm inline-block text-dark-950/50 dark:text-dark-50/50">
            (000) 000-0000
          </span>
          <span class="text-sm inline-block text-dark-950/50 dark:text-dark-50/50">
            ©2024 Spotlight All rights reserved
          </span>
        </div>
        <div class="flex w-full md:w-1/2 items-start justify-start sm:justify-end gap-x-24">
          <div class="flex flex-col gap-y-2">
            <template v-for="(nav, index) in navigation" :key="index">
              <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                {{ nav.label }}
              </UButton>
            </template>
          </div>
          <div class="flex flex-col gap-y-2">
            <template v-for="(b_nav, index) in bottom_navigation" :key="index">
              <UButton :to="b_nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                {{ b_nav.label }}
              </UButton>
            </template>
          </div>
          <div class="flex flex-col gap-y-2">
            <template v-for="(social, index) in social_network_navigation" :key="index">
              <UButton :to="social.link" target="_blank" variant="link" color="neutral" class="p-0">
                {{ social.label }}
              </UButton>
            </template>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const navigation = [
  {
    label: "Development",
    link: "#",
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
  },
];

const bottom_navigation = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Privacy Policy",
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
];

const social_network_navigation = [
  {
    label: "X",
    link: "https://x.com/",
  },
  {
    label: "IG",
    link: "https://x.com/",
  },
  {
    label: "FB",
    link: "https://x.com/",
  },
  {
    label: "IN",
    link: "https://x.com/",
  },
];
</script>
