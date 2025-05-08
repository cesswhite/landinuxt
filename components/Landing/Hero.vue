<template>
  <UContainer>
    <div class="flex py-28 md:py-0 h-auto min-h-screen font-sans w-full relative">
      <div class="mx-auto flex w-full flex-col items-center justify-center">
        <div class="mb-8 flex flex-col items-center justify-between h-auto gap-y-2">
          <NuxtLink class="hidden dark:inline-block h-[41px]" href="https://www.uneed.best/tool/landinuxt"
            target="_blank">
            <NuxtImg src="https://www.uneed.best/EMBED1.png" alt="Uneed Embed Badge" format="webp"
              class="size-full object-contain object-center" />
          </NuxtLink>
          <NuxtLink class="dark:hidden inline-block h-[41px] mb-1" href="https://www.uneed.best/tool/landinuxt"
            target="_blank">
            <NuxtImg src="https://www.uneed.best/EMBED1B.png" alt="Uneed Embed Badge" format="webp"
              class="size-full object-contain object-center" />
          </NuxtLink>
          <NuxtLink class="hidden dark:inline-block h-[36px] mb-1p"
            href="https://www.producthunt.com/posts/landinuxt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landinuxt"
            target="_blank">
            <NuxtImg src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=605396&theme=light"
              alt="LandiNuxt - Effortless&#0032;landing&#0032;page&#0032;creation | Product Hunt"
              class="size-full object-contain object-center" format="webp" />
          </NuxtLink>
          <NuxtLink class="dark:hidden inline-block h-[36px] mb-1"
            href="https://www.producthunt.com/posts/landinuxt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landinuxt"
            target="_blank">
            <NuxtImg src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=605396&theme=dark"
              alt="LandiNuxt - Effortless&#0032;landing&#0032;page&#0032;creation | Product Hunt"
              class="size-full object-contain object-center" format="webp" />
          </NuxtLink>
        </div>
        <div
          class="text-primary-500 dark:text-primary-500 ring-primary-500/50 hover:ring-primary-600/90 dark:ring-primary-500/50 dark:hover:ring-primary-500/80 relative rounded-full px-2 py-1 text-center text-sm leading-6 ring-1 md:px-3">
          Build less. Convert more.
        </div>
        <h1
          class="mt-8 text-center text-4xl font-bold tracking-tight text-dark-950 md:text-5xl lg:text-6xl xl:text-7xl dark:text-neutral-50">
          Ship faster.
          <br />
          Cook better UIs.
        </h1>
        <p
          class="text-dark-950/60 dark:text-dark-50/50 mt-6 text-center text-base md:text-lg leading-8 2xl:text-xl w-full md:w-1/2">
          Nuxt-powered componentes and sections to ship faster, no hassle, just clean UI
          with instant results
        </p>
        <div class="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
          <UButton to="/instructions" variant="ghost" size="xl"> Instructions </UButton>
          <UButton variant="solid" to="/components" size="xl">
            Explore 50+ Free Components Now
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
