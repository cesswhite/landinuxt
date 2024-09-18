<template>
  <UContainer>
    <div class="flex h-full min-h-dvh font-sans">
      <div
        class="mx-auto flex w-full flex-col items-center justify-center md:w-1/2"
      >
        <div
          class="text-primary-500 dark:text-primary-500 ring-primary-500/50 hover:ring-primary-600/90 dark:ring-primary-500/50 dark:hover:ring-primary-500/80 relative rounded-full px-2 py-1 text-center text-sm leading-6 ring-1 md:px-3"
        >
          Hand-crafter components for landing pages
        </div>
        <h1
          class="mt-4 text-center text-5xl font-bold tracking-tight text-gray-950 sm:text-7xl dark:text-gray-50"
        >
          Build fast
          <br />
          Landing Pages with
          <br />Nuxt Ecosystem
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/50 mt-6 text-center text-lg leading-8 2xl:text-xl"
        >
          Unlock the full potential of your landing pages with a powerful set of
          tools, including
          <span clas="text-xs inline-block dark:!text-red-500 p-1">NuxtImg</span
          >, NuxtMarquee, NuxtFonts, and NuxtUI, optimized for fast and
          efficient development.
        </p>
        <div
          class="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <UButton variant="solid" to="/components" size="lg">
            Explore components
          </UButton>
          <UButton variant="ghost" size="lg"> More info </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
