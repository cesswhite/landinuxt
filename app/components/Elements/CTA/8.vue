<template>
    <div
        class="from-primary-800 via-primary-500 to-primary-300 relative flex h-auto w-full flex-col items-start justify-between gap-y-4 rounded-xl bg-linear-to-tr p-8 lg:p-14 xl:flex-row xl:items-center xl:gap-y-0">
        <div class="flex flex-col items-start justify-start gap-y-2">
            <h1 class="text-dark-50 text-3xl font-bold">
                Explore Components. <br />
                Speed Up Your Development
            </h1>
            <p class="text-dark-50/70 w-full text-base font-medium lg:w-1/2">
                Discover our collection of ready-to-use components, optimized with Nuxt
                UI v4. Copy, paste, and customize easily to create effective landing
                pages in minutes.
            </p>
        </div>
        <UButton to="/components" trailing-icon="i-heroicons-arrow-right" variant="solid" size="xl"
            class="bg-dark-50/90 hover:bg-dark-50 text-primary-500 rounded-full px-6">
            Connect
        </UButton>
    </div>
</template>