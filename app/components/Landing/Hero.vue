<template>
  <UContainer>
    <div class="flex py-32 md:py-0 h-auto md:h-[70vh] lg:h-[80vh] font-sans w-full relative">
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
        <h1
          class="mt-4 text-center font-bold tracking-tight text-dark-950 text-5xl lg:text-6xl xl:text-7xl dark:text-neutral-50">
          Effortless sites.
          <br />
          Instantly beautiful.
        </h1>
        <p
          class="text-dark-950/60 dark:text-dark-50/50 mt-2 text-center text-lg/6 2xl:text-xl w-full md:w-10/12 lg:w-1/2">
          Unlock the power of Nuxt with free, modern UI components and landing sections. Build fast. Look stunning.
          Launch with confidence.
        </p>
        <div class="mt-8 flex flex-col-reverse items-center justify-center gap-4">
          <UButton to="/instructions" variant="ghost" size="xl"> Instructions </UButton>
          <UButton variant="solid" to="/components" size="xl" class="rounded-full px-8">
            Explore 90+ Free Components Now
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>
