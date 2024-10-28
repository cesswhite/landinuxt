<template>
  <div class="relative flex h-full min-h-dvh w-full items-end justify-center">
    <!-- Background Image (try a dark image to see the magic) -->
    <NuxtImg
      class="absolute z-10 h-full w-full object-cover object-center transition-all duration-300 ease-in-out dark:saturate-0"
      src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy" alt="my-hero-background" :placeholder="[50, 25, 75, 5]" />
    <div class="relative bottom-24 z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="font-lora mt-4 text-center text-5xl font-normal text-dark-50/80 sm:text-6xl md:text-7xl dark:text-white">
          Discover the Magic of <br />
          Luxurious Comfort
        </h1>
        <p
          class="mt-4 w-full text-center text-lg leading-8 text-dark-50/60 sm:w-1/2 2xl:w-1/3 2xl:text-xl dark:text-dark-50/80">
          Indulge in the ultimate sleep experience with our wide range of
          luxurious bedding collections
        </p>
        <div class="mt-8 flex gap-4">
          <UButton variant="solid" color="neutral" to="#" size="lg" class="px-8">
            Shop now
          </UButton>
        </div>
      </div>
    </div>
    <div class="absolute right-4 bottom-4 z-20">
      <UTooltip text="Questions? Contact Us">
        <UButton class="rounded-full" icon="i-heroicons-question-mark-circle" variant="ghost" color="neutral" />
      </UTooltip>
    </div>
  </div>
</template>
