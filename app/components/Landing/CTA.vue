<template>
    <div
        class="from-primary-800 via-primary-500 to-primary-300 relative flex h-auto w-full flex-col items-start justify-between gap-y-4 bg-linear-to-tr p-8 lg:p-14 xl:flex-row xl:items-center xl:gap-y-0 rounded-xl">
        <div class="flex flex-col items-start justify-start gap-y-2">
            <h1 class="text-dark-50 text-3xl font-bold">
                Explore Components &<br>
                Speed Up Your Development
            </h1>
            <p class="text-dark-50/70 text-base font-medium w-full lg:w-1/2">
                Discover our collection of ready-to-use components, optimized with Nuxt UI v4. Copy, paste, and
                customize easily to create effective landing pages in minutes.
            </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3">
            <UButton to="/nuxt-landing-components" trailing-icon="i-heroicons-arrow-right" block variant="solid"
                size="xl" class="bg-dark-50/90 hover:bg-dark-50 text-primary-500 rounded-lg px-8">
                Nuxt Components
            </UButton>
            <UButton to="/components" trailing-icon="i-heroicons-arrow-right" variant="outline" block size="xl"
                class="bg-dark-50/20 hover:bg-dark-50/30 text-dark-50 border-dark-50/30 rounded-lg px-6">
                Browse All Components
            </UButton>
        </div>
    </div>
</template>