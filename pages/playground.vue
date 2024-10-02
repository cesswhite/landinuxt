<template>
  <div class="my-24">
    <header
      class="relative flex w-full items-center justify-between bg-white px-4 py-2 dark:bg-gray-950"
    >
      <div class="flex items-center gap-2">
        <UButton
          icon="i-heroicons-bars-3-bottom-left"
          variant="link"
          color="primary"
          size="xl"
          @click="isOpenResponsiveMenu = true"
        />
        <NuxtImg
          src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Groupdark_ljxs2m.png"
          class="h-7 w-auto object-contain object-center"
          loading="lazy"
          alt="my-company-logo-description"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
      <div class="hidden items-center justify-start gap-2 md:flex">
        <UButton variant="link" color="primary" size="lg" to="#">
          Home
        </UButton>
        <UButton variant="link" color="primary" size="lg" to="#">
          Woman
        </UButton>
        <UButton variant="link" color="primary" size="lg" to="#"> Man </UButton>
        <UButton variant="link" color="primary" size="lg" to="#">
          Kids
        </UButton>
      </div>
      <div class="flex items-center gap-2">
        <UButton
          icon="i-heroicons-magnifying-glass"
          variant="link"
          color="primary"
          size="lg"
          @click="isOpenCommandPaletteToSearch = true"
        />
        <UChip text="3" size="xl">
          <UButton
            icon="i-heroicons-shopping-cart"
            variant="link"
            color="primary"
          />
        </UChip>
      </div>
    </header>
    <UModal v-model="isOpenCommandPaletteToSearch">
      <UCommandPalette
        v-model="selected"
        multiple
        nullable
        :groups="[{ key: 'categories', commands: categories }]"
      />
    </UModal>
    <USlideover v-model="isOpenResponsiveMenu" side="left">
      <div class="p-4">
        <div class="flex items-center justify-end">
          <UButton
            icon="i-heroicons-x-mark"
            variant="link"
            color="primary"
            size="lg"
            @click="isOpenResponsiveMenu = false"
          />
        </div>
        <nav class="mt-12 flex w-full flex-col items-center justify-start">
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
      </div>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
const isOpenResponsiveMenu = ref(false);
const isOpenCommandPaletteToSearch = ref(false);
const selected = ref([]);

const categories = [
  { id: 1, label: "T-Shirts" },
  { id: 2, label: "Jeans" },
  { id: 3, label: "Dresses" },
  { id: 4, label: "Jackets" },
  { id: 5, label: "Shoes" },
  { id: 6, label: "Accessories" },
  { id: 7, label: "Hoodies" },
  { id: 8, label: "Sweaters" },
  { id: 9, label: "Skirts" },
  { id: 10, label: "Pants" },
];
</script>
