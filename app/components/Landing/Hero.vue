<template>
  <UContainer>
    <div class="relative flex h-auto w-full flex-col py-32 font-sans md:h-[70vh] md:py-0 lg:h-[80vh]">
      <div class="mx-auto flex w-full flex-col items-center justify-center">
        <div class="mb-8 flex h-auto flex-col items-center justify-between gap-y-2">
          <UBadge color="primary" variant="subtle" size="lg" class="mb-2">
            AI Agent Ready
          </UBadge>
          <NuxtLink
            class="mb-1 hidden h-[41px] dark:inline-block"
            href="https://www.uneed.best/tool/landinuxt"
            target="_blank"
          >
            <NuxtImg
              src="https://www.uneed.best/EMBED1.png"
              alt="Uneed Embed Badge"
              format="webp"
              class="size-full object-contain object-center"
            />
          </NuxtLink>
          <NuxtLink
            class="mb-1 inline-block h-[41px] dark:hidden"
            href="https://www.uneed.best/tool/landinuxt"
            target="_blank"
          >
            <NuxtImg
              src="https://www.uneed.best/EMBED1B.png"
              alt="Uneed Embed Badge"
              format="webp"
              class="size-full object-contain object-center"
            />
          </NuxtLink>
          <NuxtLink
            class="mb-1 hidden h-[36px] dark:inline-block"
            href="https://www.producthunt.com/posts/landinuxt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landinuxt"
            target="_blank"
          >
            <NuxtImg
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=605396&theme=light"
              alt="LandiNuxt - Effortless landing page creation | Product Hunt"
              class="size-full object-contain object-center"
              format="webp"
            />
          </NuxtLink>
          <NuxtLink
            class="mb-1 inline-block h-[36px] dark:hidden"
            href="https://www.producthunt.com/posts/landinuxt?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-landinuxt"
            target="_blank"
          >
            <NuxtImg
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=605396&theme=dark"
              alt="LandiNuxt - Effortless landing page creation | Product Hunt"
              class="size-full object-contain object-center"
              format="webp"
            />
          </NuxtLink>
        </div>
        <h1
          class="mt-4 text-center text-5xl font-bold tracking-tight text-dark-950 dark:text-neutral-50 lg:text-6xl xl:text-7xl"
        >
          The AI-Agent-Ready<br class="hidden sm:block" />
          Nuxt Landing Library
        </h1>
        <p
          class="mt-2 w-full text-center text-lg/6 text-dark-950/60 dark:text-dark-50/50 md:w-10/12 lg:w-1/2 2xl:text-xl"
        >
          90+ copy-paste sections on Nuxt UI v4 — each with machine-readable
          <code class="text-sm">.txt</code> exports, CLI install, and prompts for Cursor and Claude.
          Build fast. Ship with agents.
        </p>
        <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <UButton variant="solid" to="/for-agents" size="xl" class="rounded-full px-8">
            For AI Agents
          </UButton>
          <UButton to="/components" variant="outline" size="xl" class="rounded-full px-8">
            Browse Components
          </UButton>
        </div>
        <p class="mt-4 text-center text-sm text-dark-950/50 dark:text-dark-50/40">
          <code class="text-xs">npx landinuxt add hero/simple</code>
        </p>
      </div>
    </div>
  </UContainer>
</template>
