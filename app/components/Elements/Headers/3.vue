<template>
  <header class="relative flex w-full items-center justify-between bg-white py-4 px-4 dark:bg-dark-950">
    <div class="size-8 min-w-8 flex-1 items-center justify-start lg:flex-none">
      <NuxtImg src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
        class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]" format="webp" />
    </div>
    <nav class="hidden w-full flex-1 items-center justify-center gap-2 lg:flex">
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full cursor-pointer">
        Home
      </UButton>
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full cursor-pointer">
        About
      </UButton>

      <UDropdownMenu :items="items">
        <UButton variant="ghost" color="neutral" size="lg" label="Services" class="rounded-full cursor-pointer">
          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </UButton>
        <template #item="{ item }">
          <span class="truncate text-sm font-medium">{{ item.label }}</span>
          <UIcon v-if="item.icon" :name="item.icon" class="shrink-0 ms-auto size-4 text-dark-700 dark:text-dark-700" />
        </template>
      </UDropdownMenu>
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full cursor-pointer">
        Pricing
      </UButton>
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full cursor-pointer">
        Contact
      </UButton>
    </nav>
    <div class="flex flex-1 items-center justify-end gap-4 lg:flex-none">
      <UButton block label="English" variant="ghost" color="neutral" size="lg" icon="i-heroicons-globe-alt"
        class="hidden w-auto rounded-full lg:flex cursor-pointer" />
      <UButton block label="Register now" variant="solid" color="primary" size="lg"
        class="hidden w-auto rounded-full lg:flex cursor-pointer" />
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <div class="inline-block md:hidden">
          <UButton icon="i-heroicons-bars-3" variant="link" color="primary" size="lg" class="cursor-pointer" />
        </div>
        <template #body>
          <nav class="flex w-full flex-col">
            <UButton block variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Home
            </UButton>
            <UButton block variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              About
            </UButton>
            <UButton block variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Services
            </UButton>
            <UButton block variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Contact
            </UButton>
            <UButton block variant="link" color="neutral" size="lg" to="#" class="cursor-pointer">
              Blog
            </UButton>
          </nav>
        </template>
      </USlideover>
    </div>
  </header>
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: "Design UI/UX",
      icon: "i-heroicons-paint-brush",
    },
    {
      label: "Development",
      icon: "i-heroicons-command-line",
    },
    {
      label: "Mobile App",
      icon: "i-heroicons-device-phone-mobile",
    },
  ],
];
</script>
