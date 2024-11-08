<template>
  <NuxtLayout name="playground">

    <footer
      class="w-full h-auto relative p-2 flex flex-col overflow-hidden bg-dark-50 dark:bg-dark-950 overflow-hidden">
      <div class="grid grid-cols-12 w-full gap-y-4 lg:gap-y-0 relative z-10">
        <div class="col-span-full lg:col-span-4 xl:col-span-8 flex flex-col gap-y-6 items-start justify-start">
          <span class="text-dark-950 dark:text-dark-50/50 text-lg w-full md:w-1/2 font-inter font-medium inline-block">
            LandiNuxt
          </span>
          <p class="text-dark-950/50 dark:text-dark-50/50 text-sm w-full md:w-1/2 font-inter inline-block">
            Lorem ipsum dolor sit amet <br> consectetur adipisicing elit.
          </p>
          <div class="flex items-center justify-start gap-x-4 text-dark-950/50 dark:text-dark-50/50">
            <UButton icon="i-simple-icons-facebook" variant="link" color="neutral" to="#" target="_blank" />
            <UButton icon="i-simple-icons-instagram" variant="link" color="neutral" to="#" target="_blank" />
            <UButton icon="i-simple-icons-x" variant="link" color="neutral" to="#" target="_blank" />
            <UButton icon="i-simple-icons-github" variant="link" color="neutral" to="#" target="_blank" />
          </div>
        </div>
        <ul class="col-span-full md:col-span-6 lg:col-span-2 xl:col-span-1 flex flex-col gap-y-2 w-full">
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
        <ul class="col-span-full md:col-span-6 lg:col-span-2 xl:col-span-1 flex flex-col gap-y-2 w-full">
          <template v-for="(nav, index) in product_navigation" :key="index">
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
        <ul class="col-span-full md:col-span-6 lg:col-span-2 xl:col-span-1 flex flex-col gap-y-2 w-full">
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
        <ul class="col-span-full md:col-span-6 lg:col-span-2 xl:col-span-1 flex flex-col gap-y-2 w-full">
          <template v-for="(nav, index) in resources_navigation" :key="index">
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
        <div
          class="border-t border-dark-950/10 dark:border-dark-50/10 col-span-full flex items-center justify-center mt-4 pt-4 mb-2 text-sm text-dark-950/50 dark:text-dark-50/50">
          ©LandiNuxt is a Open Source Project by Eco Development Studios
        </div>
      </div>
      <div class="absolute -bottom-96 left-1/2 -translate-x-1/2">
        <div
          class="rounded-full size-[620px] bg-gradient-to-br from-primary-100 to-primary-300 opacity-50 dark:from-primary-500/30 dark:to-primary-300/30 blur-3xl" />
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

const product_navigation = [
  {
    label: 'Product',
    links: [
      {
        label: "Overview",
        link: "#",
      },
      {
        label: "Features",
        link: "#",
      },
      {
        label: "Pricing",
        link: "#",
      },
      {
        label: "FAQs",
        link: "#",
      },
      {
        label: "Updates",
        link: "#",
      },
    ]
  }
];

const resources_navigation = [
  {
    label: 'Resources',
    links: [
      {
        label: "Documentation",
        link: "#",
      },
      {
        label: "Tutorials",
        link: "#",
      },
      {
        label: "Support",
        link: "#",
      },
      {
        label: "Webinars",
        link: "#",
      },
      {
        label: "Case Studies",
        link: "#",
      },
    ]
  }
];
</script>