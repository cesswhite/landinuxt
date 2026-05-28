<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12 px-4">
        <UContainer>
            <h2 class="text-dark-900 dark:text-dark-50 text-left text-4xl font-bold">
                Our Partners
            </h2>
            <p class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-left text-lg font-normal">
                Explore the possibilities with us, trusted by over +5,000 companies
            </p>
            <div class="mt-12">
                <UMarquee pause-on-hover :ui="{
                    root: 'before:!from-dark-50 after:!from-dark-50 dark:before:!from-dark-950 dark:after:!from-dark-950',
                }">
                    <div class="flex items-center gap-x-8">
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-nuxt" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-supabase" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-cloudflare" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-nuxt" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-supabase" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-cloudflare" class="text-3xl" />
                        </div>
                    </div>
                </UMarquee>
            </div>
            <div class="mt-4">
                <UMarquee pause-on-hover reverse :ui="{
                    root: 'before:!from-dark-50 after:!from-dark-50 dark:before:!from-dark-950 dark:after:!from-dark-950',
                }">
                    <div class="flex items-center gap-x-8">
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-nuxt" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-supabase" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-cloudflare" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-nuxt" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-supabase" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                        </div>
                        <div class="w-full flex h-24 items-center justify-center">
                            <UIcon name="i-logos-cloudflare" class="text-3xl" />
                        </div>
                    </div>
                </UMarquee>
            </div>
        </UContainer>
    </div>
</template>
