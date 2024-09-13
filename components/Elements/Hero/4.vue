<template>
  <!-- Install npx nuxi@latest module add marquee -->
  <div
    class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-gray-50 pt-32 dark:bg-gray-950"
  >
    <div class="relative z-20 mb-24 w-11/12 md:w-10/12">
      <div class="flex flex-col items-center justify-center">
        <UBadge
          variant="soft"
          color="white"
          class="rounded-full border border-gray-500/20 px-4 py-2 text-center font-normal text-gray-500 md:px-12"
          size="lg"
        >
          Explore our handcrafted components
        </UBadge>
        <h1
          class="mt-4 text-center text-5xl font-normal text-gray-800 sm:text-6xl md:text-7xl dark:text-gray-100"
        >
          Unlock the Power of <br />
          Natural Beauty <br />
          Inside and Out
        </h1>
        <p
          class="dark:text-primary-50/50 mt-4 w-full text-center text-lg font-light leading-8 text-gray-900/50 sm:w-1/2 2xl:w-1/3 2xl:text-xl"
        >
          Explore the limitless possibilities of your construction project with
          our all-encompassing array of tools and services
        </p>
        <div class="mt-8 flex flex-col gap-4">
          <UButton
            block
            variant="solid"
            to="#"
            size="lg"
            icon="i-heroicons-arrow-right"
            trailing
            class="rounded-full px-8 py-4"
          >
            Get started
          </UButton>
          <UButton
            block
            variant="ghost"
            to="#"
            size="lg"
            class="rounded-full px-8 py-4"
            disabled
          >
            Discover Your Dream Home Today
          </UButton>
        </div>
      </div>
    </div>
    <div class="relative z-20 w-full py-2">
      <NuxtMarquee :pauseOnHover="true">
        <div class="flex w-full items-center justify-center gap-12">
          <template v-for="icon in icons">
            <div class="size-auto items-center justify-center p-2">
              <UIcon
                :name="icon"
                class="size-16 text-gray-500/50 dark:text-gray-50/20"
              />
            </div>
          </template>
        </div>
      </NuxtMarquee>
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
