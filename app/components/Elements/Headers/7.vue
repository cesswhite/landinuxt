<template>
  <div class="relative w-full">
    <header
      class="relative z-20 flex h-16 w-full items-center justify-between gap-4 rounded-xl bg-dark-50 px-4 lg:justify-start dark:bg-dark-950">
      <div class="size-8 min-w-8">
        <NuxtImg src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
          class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]" format="webp" />
      </div>
      <nav class="relative z-10 hidden items-center justify-start gap-2 lg:flex">
        <UButton variant="link" color="neutral" size="lg" to="#"> Home </UButton>
        <UButton @click="showMenu = !showMenu" variant="link" color="neutral" size="lg" class="cursor-pointer">
          <template #trailing>
            <UIcon v-if="showMenu" name="i-heroicons-chevron-up" class="size-4" />
            <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
          </template>
          Services
        </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#" class="cursor-pointer"> Tools </UButton>
        <UButton variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
          Contact
        </UButton>
      </nav>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <UButton color="neutral" icon="i-heroicons-bars-3" variant="link" size="xl" class="inline-block lg:hidden" />
        <template #body>
          <nav class="relative z-10 flex flex-col items-center justify-start gap-2">
            <UButton variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Home
            </UButton>
            <UCollapsible class="w-auto">
              <UButton variant="soft" color="neutral" size="lg" class="cursor-pointer">
                Services
                <template #trailing>
                  <UIcon v-if="showMenu" name="i-heroicons-chevron-up" class="size-4" />
                  <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
                </template>
              </UButton>
              <template #content>
                <div class="flex w-full flex-col gap-y-2">
                  <UButton variant="link" color="neutral" size="lg" to="#"
                    class="flex items-center justify-center opacity-75">
                    Development
                  </UButton>
                  <UButton variant="link" color="neutral" size="lg" to="#"
                    class="flex items-center justify-center opacity-75">
                    Design
                  </UButton>
                  <UButton variant="link" color="neutral" size="lg" to="#"
                    class="flex items-center justify-center opacity-75">
                    Mobile Apps
                  </UButton>
                </div>
              </template>
            </UCollapsible>
            <UButton variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Tools
            </UButton>
            <UButton variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Contact
            </UButton>
          </nav>
        </template>
      </USlideover>
    </header>
    <Transition name="mega-menu" mode="out-in">
      <div v-if="showMenu" key="desktop-services-panel"
        class="mega-menu-panel absolute top-0 left-0 z-10 hidden h-72 w-full origin-top rounded-xl  bg-dark-100 px-4 pt-16 lg:flex dark:border-dark-950/50 dark:bg-dark-900">
        <div class="flex w-3/5 items-center gap-8">
          <template v-for="service in services" :key="service.name">
            <div class="flex flex-col gap-y-2">
              <div
                class="flex size-8 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800">
                <UIcon :name="service.icon" class="size-full text-dark-950 dark:text-dark-50" />
              </div>
              <span class="text-base font-bold text-dark-950 dark:text-dark-50">
                {{ service.name }}
              </span>
              <p class="w-4/5 text-sm font-normal text-dark-950/60 dark:text-dark-50/60">
                {{ service.description }}
              </p>
            </div>
          </template>
        </div>
        <div class="w-2/5 pt-4">
          <div class="bg-primary-200 dark:bg-primary-700 h-full w-full overflow-hidden rounded-t-xl p-4">
            <span class="text-base font-bold text-dark-950 dark:text-dark-50">
              Explore Our Services
            </span>
            <p class="w-4/5 text-sm font-normal text-dark-950/60 dark:text-dark-50/60">
              Discover how our services can help you achieve your business
              goals.
            </p>
            <div class="mt-6 flex h-full gap-2">
              <template v-for="image in images" :key="image">
                <div class="mega-menu-image flex-1 rotate-3 transform-gpu overflow-hidden rounded-xl">
                  <NuxtImg :src="image" class="h-full w-full object-cover object-center" loading="lazy"
                    alt="Portfolio preview image" :placeholder="[50, 25, 75, 5]" format="webp" />
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

<style scoped>
/*
 * Mega menu: enter/exit = ease-out, opacity + transform only (GPU).
 * Panel anchors from top (origin-top) so scale reads as “dropping” from the header.
 */
.mega-menu-enter-active {
  transition:
    opacity 220ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 220ms cubic-bezier(0.23, 1, 0.32, 1);
}

.mega-menu-leave-active {
  transition:
    opacity 175ms cubic-bezier(0.23, 1, 0.32, 1),
    transform 175ms cubic-bezier(0.23, 1, 0.32, 1);
}

.mega-menu-enter-from,
.mega-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

@media (prefers-reduced-motion: reduce) {

  .mega-menu-enter-active,
  .mega-menu-leave-active {
    transition: none;
  }

  .mega-menu-enter-from,
  .mega-menu-leave-to {
    opacity: 1;
    transform: none;
  }
}

/* Image tiles: only transform transitions; hover lift only on fine pointers */
.mega-menu-image {
  transition: transform 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
}

@media (hover: hover) and (pointer: fine) {
  .mega-menu-image:hover {
    transform: translateY(-0.5rem) rotate(0deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .mega-menu-image {
    transition: none;
  }

  .mega-menu-image:hover {
    transform: rotate(3deg);
  }
}
</style>
