<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12 px-4">
        <UContainer>
            <h2 class="text-dark-900 dark:text-dark-50 text-center text-5xl font-semibold">
                Our Partners
            </h2>
            <p class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-center text-lg font-normal">
                Explore the possibilities with us, trusted by over +5,000 companies
            </p>
            <div class="mt-12 grid grid-cols-12 gap-4 max-w-2xl mx-auto">
                <div class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-start">
                    <UIcon name="i-logos-nuxt" class="text-3xl" />
                </div>
                <div class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-end">
                    <UIcon name="i-logos-supabase" class="text-3xl" />
                </div>
                <div class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-start">
                    <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                </div>
                <div class="col-span-full flex h-24 items-center justify-center md:col-span-6 md:justify-end">
                    <UIcon name="i-logos-cloudflare" class="text-3xl" />
                </div>
            </div>
        </UContainer>
    </div>
</template>