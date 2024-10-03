<template>
  <header class="relative flex w-full items-center justify-between bg-white px-4 py-2 dark:bg-gray-950">
    <div class="size-8">
      <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
        class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]" />
    </div>
    <nav class="hidden items-center justify-start md:flex">
      <UButton variant="link" color="primary" size="lg" to="#"> Home </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> About </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Services
      </UButton>
      <UButton variant="link" color="primary" size="lg" to="#">
        Contact
      </UButton>
      <UButton variant="link" color="primary" size="lg" to="#"> Blog </UButton>
    </nav>
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
            Services
          </UButton>
          <UButton block variant="link" color="primary" size="lg" to="#">
            Contact
          </UButton>
          <UButton block variant="link" color="primary" size="lg" to="#">
            Blog
          </UButton>
        </nav>
      </template>
    </USlideover>
  </header>
</template>
