<template>
  <div
    class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-gray-50 pt-32 dark:bg-gray-950"
  >
    <div class="relative z-20 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <h1
          class="mt-4 text-center font-sans text-8xl font-bold text-gray-900 sm:text-6xl md:text-9xl dark:text-gray-50"
        >
          Explore. <br />
          Amaze.
        </h1>
        <p
          class="mt-4 w-full text-center text-lg leading-8 text-gray-900/60 sm:w-1/2 2xl:w-1/3 2xl:text-xl dark:text-gray-50/60"
        >
          Embark on an unforgettable adventure safari with our expert guides
        </p>
        <div class="mt-8 flex flex-col gap-4 md:flex-row">
          <UButton variant="solid" color="gray" to="#" size="lg" class="px-8">
            Book a tour now
          </UButton>
          <UButton variant="link" color="gray" to="#" size="lg" class="px-8">
            Discover more
          </UButton>
        </div>
      </div>
    </div>
    <div class="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
      <template v-for="icon in icons">
        <div class="flex size-auto items-center justify-center p-2">
          <UIcon
            :name="icon"
            class="mx-auto size-10 text-gray-500/50 dark:text-gray-50/20"
          />
        </div>
      </template>
    </div>
    <div
      class="xl:max-w-screen-2xl relative z-10 mt-12 mx-auto w-full p-4 md:p-2"
    >
      <NuxtImg
        class="h-[520px] w-full object-cover object-center lg:h-[640px] 2xl:h-[720px]"
        src="https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        loading="lazy"
        alt="my-hero-background"
        :placeholder="[50, 25, 75, 5]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  "i-simple-icons-adobeillustrator",
  "i-simple-icons-amazon",
  "i-simple-icons-google",
  "i-simple-icons-facebook",
  "i-simple-icons-vite",
  "i-simple-icons-nike",
  "i-simple-icons-apple",
  "i-simple-icons-microsoft",
  "i-simple-icons-twitter",
];
</script>
