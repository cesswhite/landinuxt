<template>
  <NuxtLayout name="playground">

    <footer class="w-full h-auto relative py-2 flex flex-col px-4 overflow-hidden bg-dark-50 dark:bg-dark-950">
      <div class="grid grid-cols-12 w-full ?">
        <div class="col-span-full lg:col-span-6 flex flex-col gap-y-6 items-start justify-start">
          <span class="text-dark-950 dark:text-dark-50/50 text-lg w-full md:w-1/2 font-inter font-medium inline-block">
            LandiNuxt
          </span>
          <p class="text-dark-950/50 dark:text-dark-50/50 text-sm w-full md:w-1/2 font-inter inline-block">
            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
          </p>
          <div class="flex items-center justify-start gap-x-4 text-dark-950/50 dark:text-dark-50/50">
            <UButton icon="i-simple-icons-facebook" variant="link" color="neutral" />
            <UButton icon="i-simple-icons-instagram" variant="link" color="neutral" />
            <UButton icon="i-simple-icons-x" variant="link" color="neutral" />
            <UButton icon="i-simple-icons-github" variant="link" color="neutral" />
          </div>
        </div>
        <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full">
          <template v-for="(nav, index) in navigation" :key="index">
            <li class="text-dark-950 dark:text-dark-50 text-base font-medium font-inter capitalize mb-3">
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg" class="p-0">
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
        <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full">
          <template v-for="(nav, index) in social_media_navigation" :key="index">
            <li class="text-dark-950 dark:text-dark-50 text-base font-medium font-inter capitalize mb-3">
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg"
                class="p-0 hover:underline">
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
        <ul class="col-span-full lg:col-span-2 flex flex-col gap-y-2 w-full">
          <template v-for="(nav, index) in other_navigation" :key="index">
            <li class="text-dark-950 dark:text-dark-50 text-base font-medium font-inter capitalize mb-3">
              {{ nav.label }}
            </li>
            <li v-for="(inner_link, _index) in nav.links" :key="_index">
              <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg"
                class="p-0 hover:underline">
                {{ inner_link.label }}
              </UButton>
            </li>
          </template>
        </ul>
      </div>
    </footer>
  </NuxtLayout>
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
  }
];

const social_media_navigation = [
  {
    label: "Social Media",
    links: [
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
    ]
  }
];
</script>