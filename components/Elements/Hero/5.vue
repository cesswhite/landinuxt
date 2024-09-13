<template>
  <div
    class="relative flex h-full min-h-dvh w-full items-center justify-center"
  >
    <!-- Background Image (try a dark image) -->
    <NuxtImg
      class="absolute z-10 h-full w-full object-cover object-center"
      src="https://images.unsplash.com/photo-1651352076676-58a34812f3d2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      loading="lazy"
      alt="my-hero-background"
      :placeholder="[50, 25, 75, 5]"
    />
    <div class="relative z-10 w-11/12 md:w-10/12">
      <div class="flex flex-col items-start justify-start">
        <h1
          class="mt-4 text-left text-5xl font-normal text-gray-100 sm:text-6xl md:text-7xl"
        >
          Unlock the Power of <br />
          Cutting-Edge Innovation
        </h1>
        <div class="mt-8 flex gap-4">
          <UButton
            variant="solid"
            color="gray"
            to="#"
            size="lg"
            trailing
            class="rounded-full px-8"
          >
            Get started
          </UButton>
          <UButton
            variant="link"
            color="gray"
            to="#"
            size="lg"
            class="rounded-full px-8"
          >
            Request demo
          </UButton>
        </div>
      </div>
    </div>
    <div class="absolute bottom-8 z-20 w-full">
      <div class="flex w-full items-center justify-center gap-16">
        <template v-for="icon in icons">
          <div class="group size-auto items-center justify-center">
            <UIcon
              :name="icon"
              class="size-8 text-gray-50/10 group-hover:text-gray-50/50"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const icons = [
  "i-simple-icons-adobeillustrator",
  "i-simple-icons-amazon",
  "i-simple-icons-akaunting",
  "i-simple-icons-alchemy",
  "i-simple-icons-amp",
  "i-simple-icons-google",
  "i-simple-icons-facebook",
  "i-simple-icons-vite",
  "i-simple-icons-nike",
  "i-simple-icons-apple",
  "i-simple-icons-microsoft",
  "i-simple-icons-twitter",
  "i-simple-icons-linkedin",
  "i-simple-icons-instagram",
  "i-simple-icons-youtube",
  "i-simple-icons-whatsapp",
  "i-simple-icons-telegram",
  "i-simple-icons-tiktok",
  "i-simple-icons-snapchat",
  "i-simple-icons-pinterest",
  "i-simple-icons-twitch",
  "i-simple-icons-discord",
  "i-simple-icons-reddit",
  "i-simple-icons-medium",
  "i-simple-icons-spotify",
  "i-simple-icons-netflix",
  "i-simple-icons-hulu",
];
</script>
