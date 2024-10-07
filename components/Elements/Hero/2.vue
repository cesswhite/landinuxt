<template>
  <div
    class="relative flex h-full min-h-dvh w-full items-center justify-center bg-gray-50 dark:bg-gray-950"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div
        v-motion-fade
        :delay="100"
        :duration="1250"
        class="flex flex-col items-center justify-center"
      >
        <UBadge
          variant="soft"
          class="border-primary rounded-full border px-4 text-center md:px-12"
          size="lg"
        >
          Beatifult hand-crafter components
        </UBadge>
        <h1
          class="mt-4 text-center text-5xl font-semibold text-gray-900 sm:text-6xl md:text-7xl dark:text-gray-100"
        >
          Build your <br />
          Dream Home
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-4 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Unlock your construction project's full potential with our
          comprehensive suite of tools and services
        </p>
        <div
          class="mt-8 flex flex-col-reverse items-center justify-center gap-4 lg:flex-row"
        >
          <UButton variant="ghost" to="#" size="lg"> More info </UButton>
          <UButton variant="solid" to="#" size="lg">
            Explore components
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
