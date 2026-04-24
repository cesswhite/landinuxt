<template>
  <header class="relative z-20 flex w-full items-center justify-between py-2 px-4">
    <div class="size-8">
      <NuxtImg src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
        class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]" format="webp" />
    </div>
    <div
      class="hidden items-center justify-center rounded-full ring-1 ring-dark-950/10 bg-dark-50/20 py-1 px-24 backdrop-blur md:flex dark:ring-dark-50/5 dark:bg-dark-900/60">
      <nav class="flex w-full items-center justify-center gap-2">
        <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full px-4 cursor-pointer">
          Home
        </UButton>
        <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full px-4 cursor-pointer">
          About
        </UButton>
        <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full px-4 cursor-pointer">
          Pricing
        </UButton>
        <UButton variant="ghost" color="neutral" size="lg" to="#" class="rounded-full px-4 cursor-pointer">
          Contact
        </UButton>
      </nav>
    </div>
    <div class="flex w-auto gap-4">
      <UButton icon="i-heroicons-user-solid" class="hidden rounded-full md:flex" size="lg">
        Create Account
      </UButton>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <div class="inline-block md:hidden">
          <UButton icon="i-heroicons-bars-3" variant="link" color="primary" size="lg" />
        </div>
        <template #body>
          <nav class="flex w-full flex-col gap-2">
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Home
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              About
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Pricing
            </UButton>
            <UButton block variant="ghost" color="primary" size="lg" to="#">
              Contact
            </UButton>
            <UButton block icon="i-heroicons-user-solid" size="lg">
              Create Account
            </UButton>
          </nav>
        </template>
      </USlideover>
    </div>
  </header>
</template>
