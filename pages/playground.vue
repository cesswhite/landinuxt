<template>
  <NuxtLayout name="playground">
    <div class="flex h-auto min-h-dvh w-full items-center justify-center bg-[#ffffff] p-4 py-24 dark:bg-[#000000] ?">
      <footer class="w-full min-h-dvh h-auto relative py-2 flex flex-col gap-y-56 px-4">
        <div class="grid grid-cols-12 w-full gap-6 ">
          <div class="col-span-6 lg:col-span-6 flex items-start justify-start">
            <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683150145/Group_26_tooxf6.svg"
              class="object-contain object-center h-6 md:h-10" loading="lazy" alt="my-company-logo-description"
              :placeholder="[50, 25, 75, 5]" />
          </div>
          <ul class="col-span-6 lg:col-span-2 flex flex-col gap-y-2 w-full">
            <template v-for="(nav, index) in navigation" :key="index">
              <li class="text-dark-950 dark:text-dark-50 text-xl md:text-2xl font-inter uppercase">
                {{ nav.label }}
              </li>
              <li v-for="(inner_link, _index) in nav.links" :key="_index">
                <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral" size="lg" class="p-0">
                  {{ inner_link.label }}
                </UButton>
              </li>
            </template>
          </ul>
          <ul class="col-span-6 lg:col-span-2 flex flex-col gap-y-2 w-full">
            <template v-for="(nav, index) in social_media_navigation" :key="index">
              <li class="text-dark-950 dark:text-dark-50 text-xl md:text-2xl font-inter uppercase">
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
          <ul class="col-span-6 lg:col-span-2 flex flex-col gap-y-2 w-full">
            <template v-for="(nav, index) in other_navigation" :key="index">
              <li class="text-dark-950 dark:text-dark-50 text-xl md:text-2xl font-inter uppercase">
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
        <div class="grid grid-cols-12 w-full gap-6">
          <div class="col-span-6 lg:col-span-6 flex items-start justify-start">
            <span class="uppercase text-2xl text-dark-950 dark:text-dark-50">Let's Connect</span>
          </div>
          <template v-for="(nav, index) in address_company" :key="index">
            <div class="flex flex-col gap-y-2 w-full col-span-6 lg:col-span-2">
              <span class="text-dark-950 dark:text-dark-50 text-2xl font-inter uppercase inline-block">
                {{ nav.label }}
              </span>
              <p class="text-dark-950/60 dark:text-dark-50/60 text-sm font-inter inline-block">
                {{ nav.address }}
              </p>
              <span class="text-dark-950/60 dark:text-dark-50/60 text-sm font-inter inline-block">
                {{ nav.email }}
              </span>
              <span class="text-dark-950/60 dark:text-dark-50/60 text-sm font-inter inline-block">
                {{ nav.phone }}
              </span>
            </div>
          </template>
        </div>
        <div class="grid grid-cols-12 w-full gap-6">
          <div class="col-span-full lg:col-span-10">
            <UButton type="button" variant="link" color="neutral" class="p-0" aria-readonly="true">
              ©LandiNuxt is a Open Source Project by Eco Development Studios
            </UButton>
          </div>
          <div class="col-span-full lg:col-span-2 flex gap-x-4 w-full items-center">
            <template v-for="(nav, index) in bottom_navigation" :key="index">
              <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                {{ nav.label }}
              </UButton>
            </template>
          </div>
        </div>
      </footer>
    </div>
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

const address_company = [
  {
    label: "México",
    address: "Av. Paseo de la Reforma 123, Cuauhtémoc, 06500 Ciudad de México, CDMX",
    phone: "+52 55 5555 5555",
    email: "mexico@company.com",
  },
  {
    label: "USA",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 212 555 1234",
    email: "usa@company.com",
  },
  {
    label: "Spain",
    address: "Calle de Alcalá, 23, 28014 Madrid",
    phone: "+34 91 123 4567",
    email: "spain@company.com",
  },
];

const bottom_navigation = [
  {
    label: "Contact",
    link: "#",
  },
  {
    label: "Privacy Policy",
    link: "#",
  },
];
</script>
