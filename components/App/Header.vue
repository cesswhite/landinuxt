<template>
  <header
    class="flex w-full items-center justify-between fixed left-0 top-0 z-50 px-4 w-full bg-dark-50/70 dark:bg-dark-950/70 backdrop-blur-md py-4">
    <div class="flex size-8 items-center justify-center">
      <NuxtLink to="/">
        <AppLogo />
      </NuxtLink>
    </div>
    <nav class="hidden w-full flex-1 items-center justify-center gap-2 lg:flex">
      <UButton variant="ghost" color="neutral" size="lg" to="/" class="rounded-full">
        Home
      </UButton>
      <UDropdownMenu :items="items">
        <UButton variant="ghost" color="neutral" size="lg" label="Components" class="rounded-full cursor-pointer">
          <template #trailing>
            <UIcon name="i-heroicons-chevron-down" />
          </template>
        </UButton>
        <template #item="{ item }">
          <UButton block variant="link" :to="item.to" color="neutral" size="lg">
            {{ item.label }}
          </UButton>
        </template>
      </UDropdownMenu>
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full">
        Instructions
      </UButton>
      <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full">
        Contribution
      </UButton>
    </nav>
    <div class="flex flex-1 items-center justify-end gap-4 lg:flex-none">
      <UButton to="https://github.com/cesswhite/landingnuxt" target="_blank" icon="i-mdi-github" variant="link"
        color="primary" size="lg" />
      <AppSwitchPrimaryColor />
      <AppSwitchMode />
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <div class="inline-block md:hidden">
          <UButton icon="i-heroicons-bars-3" variant="link" color="primary" size="lg" />
        </div>
        <template #body>
          <nav class="flex w-full flex-col">
            <UButton block variant="link" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              About
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              Instructions
            </UButton>
            <UButton block variant="link" color="primary" size="lg" to="#">
              Contribution
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
      label: "All Sections",
      to: '/components'
    },
    {
      label: "Header Section",
      to: '/components/headers'
    },
    {
      label: "Hero Section",
      to: '/components/hero'
    },
    {
      label: "Features Section",
      to: '/components/features'
    },
    {
      label: "Footers Section",
      to: '/components/footers'
    },
    {
      label: "CTA Section",
      to: '/components/cta'
    },
  ],
];
</script>
