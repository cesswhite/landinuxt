<template>
    <UContainer>
        <div class="h-full min-h-dvh flex font-sans">
            <div class="flex flex-col items-center justify-center w-full md:w-1/2 mx-auto">
                <div
                    class="relative text-center rounded-full px-2 md:px-3 py-1 text-sm leading-6 text-primary-500 dark:text-primary-500 ring-1 ring-primary-500/50 hover:ring-primary-600/90 dark:ring-primary-500/50 dark:hover:ring-primary-500/80">
                    Hand-crafter components for landing pages
                </div>
                <h1
                    class="text-5xl text-center font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-7xl mt-4">
                    Build Fast Landing Pages with Nuxt UI
                </h1>
                <p class="mt-6 text-lg 2xl:text-xl leading-8 text-center text-primary-950/60 dark:text-primary-50/50">
                    A curated set of Nuxt 3 and Nuxt UI components, optimized for fast and efficient landing page
                    development.
                </p>
                <div class="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">
                    <UButton variant="solid" to="/components" size="lg">
                        Explore components
                    </UButton>
                    <UButton variant="ghost" size="lg">
                        More info
                    </UButton>
                </div>
            </div>
        </div>
    </UContainer>
</template>