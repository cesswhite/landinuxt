<template>
  <NuxtLayout name="playground">
    <div class="flex h-auto min-h-dvh w-full items-center justify-center bg-[#ffffff] p-4 py-24 dark:bg-[#000000]">
      <footer class="w-full h-auto relative py-4 gap-8 flex flex-col px-4 overflow-hidden bg-dark-50 dark:bg-dark-950">
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <template v-for="(nav, index) in other_navigation" :key="index">
            <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0" size="xs">
              {{ nav.label }}
            </UButton>
          </template>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-4">
          <template v-for="(nav, index) in social_media_navigation" :key="index">
            <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0" size="xs">
              {{ nav.label }}
            </UButton>
          </template>
        </div>
        <div class="text-xs text-dark-950/70 dark:text-dark-50/70 text-center">
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </footer>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

const other_navigation = [
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
];

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

</script>
