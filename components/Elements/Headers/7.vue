<template>
  <div class="relative w-full">
    <header
      class="relative z-20 flex h-16 w-full items-center justify-between gap-4 rounded-xl bg-gray-50 px-4 lg:justify-start dark:bg-gray-950"
    >
      <NuxtImg
        src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Groupdark_ljxs2m.png"
        class="relative z-10 h-7 w-auto object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
      />
      <nav
        class="relative z-10 hidden items-center justify-start gap-2 lg:flex"
      >
        <UButton variant="link" color="gray" size="lg" to="#"> Home </UButton>
        <UButton
          @click="showMenu = !showMenu"
          variant="link"
          color="gray"
          size="lg"
          to="#"
        >
          <template #trailing>
            <UIcon
              v-if="showMenu"
              name="i-heroicons-chevron-up"
              class="size-4"
            />
            <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
          </template>
          Services
        </UButton>
        <UButton variant="link" color="gray" size="lg" to="#"> Tools </UButton>
        <UButton variant="link" color="gray" size="lg" to="#">
          Contact
        </UButton>
      </nav>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <UButton
          color="gray"
          icon="i-heroicons-bars-3"
          variant="link"
          size="xl"
          class="inline-block lg:hidden"
        />

        <template #body>
          <nav
            class="relative z-10 flex flex-col items-center justify-start gap-2"
          >
            <UButton variant="link" color="gray" size="lg" to="#">
              Home
            </UButton>
            <UCollapsible class="w-auto">
              <UButton variant="link" color="gray" size="lg" to="#">
                Services
                <template #trailing>
                  <UIcon
                    v-if="showMenu"
                    name="i-heroicons-chevron-up"
                    class="size-4"
                  />
                  <UIcon
                    v-else
                    name="i-heroicons-chevron-down"
                    class="size-4"
                  />
                </template>
              </UButton>
              <template #content>
                <div class="flex w-full flex-col gap-y-2">
                  <UButton
                    variant="link"
                    color="gray"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Development
                  </UButton>
                  <UButton
                    variant="link"
                    color="gray"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Design
                  </UButton>
                  <UButton
                    variant="link"
                    color="gray"
                    size="lg"
                    to="#"
                    class="flex items-center justify-center opacity-75"
                  >
                    Mobile Apps
                  </UButton>
                </div>
              </template>
            </UCollapsible>
            <UButton variant="link" color="gray" size="lg" to="#">
              Tools
            </UButton>
            <UButton variant="link" color="gray" size="lg" to="#">
              Contact
            </UButton>
          </nav>
        </template>
      </USlideover>
    </header>
    <Transition
      enter-active-class="transition-all duration-500"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-500"
      leave-from-class="opacity-100 "
      leave-to-class="opacity-0 -translate-y-2"
      mode="out-in"
    >
      <div
        v-if="showMenu"
        class="absolute top-0 left-0 z-10 hidden h-72 w-full rounded-xl bg-gray-100 pt-16 px-4 lg:flex dark:bg-gray-900"
      >
        <div class="flex w-3/5 items-center">
          <template v-for="(service, index) in services" :key="index">
            <div class="flex flex-col gap-y-2">
              <div
                class="flex size-8 items-center justify-center rounded-md border border-gray-950/20 bg-gray-200/20 p-1 dark:border-gray-700 dark:bg-gray-800"
              >
                <UIcon
                  :name="service.icon"
                  class="size-full text-gray-950 dark:text-gray-50"
                />
              </div>
              <span class="text-base font-bold text-gray-950 dark:text-gray-50">
                {{ service.name }}
              </span>
              <p
                class="w-4/5 text-sm font-normal text-gray-950/60 dark:text-gray-50/60"
              >
                {{ service.description }}
              </p>
            </div>
          </template>
        </div>
        <div class="w-2/5 pt-4">
          <div
            class="h-full w-full overflow-hidden rounded-t-xl bg-gray-200 p-4 dark:bg-gray-800"
          >
            <span class="text-base font-bold text-gray-950 dark:text-gray-50">
              Explore Our Services
            </span>
            <p
              class="w-4/5 text-sm font-normal text-gray-950/60 dark:text-gray-50/60"
            >
              Discover how our services can help you achieve your business
              goals.
            </p>
            <div class="mt-6 flex h-full">
              <template v-for="(image, index) in images">
                <div
                  class="flex-1 rotate-4 transform-gpu overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-4 hover:rotate-0"
                >
                  <NuxtImg
                    :src="image"
                    class="h-full w-full object-cover object-center"
                    loading="lazy"
                    alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showMenu = ref(false);
const images = [
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const services = ref([
  {
    icon: "i-heroicons-command-line",
    name: "Development",
    description:
      "Our development services focus on crafting scalable, efficient, and user-friendly solutions tailored to your business needs.",
  },
  {
    icon: "i-heroicons-swatch",
    name: "Design",
    description:
      "Our design team creates visually stunning and intuitive interfaces that enhance user experience and drive engagement.",
  },
  {
    icon: "i-heroicons-device-phone-mobile",
    name: "Mobile Apps",
    description:
      "We develop mobile applications that are fast, secure, and optimized for both iOS and Android platforms.",
  },
]);
</script>
