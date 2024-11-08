<template>
  <header
    class="relative z-20 flex w-full items-center justify-between py-2 px-4"
  >
    <div class="size-8">
      <NuxtImg
        src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
        class="size-full object-contain object-center"
        loading="lazy"
        alt="my-company-logo-description"
        :placeholder="[50, 25, 75, 5]"
      />
    </div>
    <div
      class="hidden items-center justify-center rounded-full border border-dark-200/60 bg-dark-50/30 py-1 px-24 backdrop-blur md:flex dark:border-dark-500/5 dark:bg-dark-900/90"
    >
      <nav class="flex w-full items-center justify-center gap-2">
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Home
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          About
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Pricing
        </UButton>
        <UButton
          variant="ghost"
          color="primary"
          size="lg"
          to="#"
          class="rounded-full px-4"
        >
          Contact
        </UButton>
      </nav>
    </div>
    <div class="flex w-auto gap-4">
      <UButton
        icon="i-heroicons-user-solid"
        class="hidden rounded-full md:flex"
        size="lg"
      >
        Create Account
      </UButton>
      <USlideover title="Menu" close-icon="i-heroicons-x-mark">
        <div class="inline-block md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            variant="link"
            color="primary"
            size="lg"
          />
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
