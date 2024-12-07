<template>
  <header class="relative flex w-full items-center justify-between bg-white py-2 px-4 dark:bg-dark-950">
    <div class="flex items-center gap-2">
      <USlideover side="left" title="Menu" close-icon="i-heroicons-x-mark">
        <UButton icon="i-heroicons-bars-3-bottom-left" variant="link" color="primary" size="xl" />
        <template #body>
          <nav class="flex w-full flex-col items-center justify-start">
            <UButton variant="link" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Woman
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Man
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="#">
              Kids
            </UButton>
          </nav>
        </template>
      </USlideover>
      <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Groupdark_ljxs2m.png"
        class="h-7 w-auto object-contain object-center" loading="lazy" alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]" format="webp" />
    </div>
    <div class="hidden items-center justify-start gap-2 md:flex">
      <UButton variant="link" color="primary" size="lg" to="#"> Home </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Woman </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Man </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Kids </UButton>
    </div>
    <div class="flex items-center gap-2">
      <UModal>
        <UButton icon="i-heroicons-magnifying-glass" variant="link" color="primary" size="lg" />
        <template #content>
          <UCommandPalette multiple placeholder="Search an app..." :groups="groups" class="flex-1" />
        </template>
      </UModal>

      <UChip text="3" size="2xl">
        <UButton icon="i-heroicons-shopping-cart" variant="link" color="primary" />
      </UChip>
    </div>
  </header>
</template>

<script setup lang="ts">
const groups = ref([
  {
    id: "categories",
    items: [
      {
        label: "Electronics",
        icon: "i-heroicons-device-phone-mobile",
      },
      {
        label: "Fashion",
        icon: "i-heroicons-swatch",
      },
      {
        label: "Home & Garden",
        icon: "i-heroicons-home",
      },
    ],
  },
]);
</script>
