<template>
    <div
        class="w-full min-h-dvh h-auto relative bg-dark-50 dark:bg-dark-950 flex items-center justify-center overflow-x-hidden">
        <div class="absolute w-[1440px] h-full z-10 md:w-[1720px] xl:w-full">
            <svg class="w-full h-full" viewBox="0 0 1024 672" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="242" cy="-172" r="844" fill="url(#paint0_radial_1812_79)" />
                <defs>
                    <radialGradient id="paint0_radial_1812_79" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(928 834) rotate(-135) scale(993.485)">
                        <stop
                            :stop-color="$colorMode.value === 'dark' ? 'var(--color-primary-500)' : 'var(--color-primary-600)'" />
                        <stop offset="1"
                            :stop-color="$colorMode.value === 'dark' ? 'var(--color-dark-950)' : 'var(--color-dark-50)'"
                            stop-opacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
        <div class="relative z-20 py-28 md:py-64">
            <UContainer>
                <div class="size-full">
                    <div class="flex flex-col gap-y-4 md:w-10/12">
                        <h1
                            class="text-5xl lg:text-6xl text-primary-950 dark:text-primary-50 font-semibold font-family-inter tracking-tighter text-pretty">
                            Create stunning digital invitations <br>
                            for your special moments
                        </h1>
                        <p class="text-xl text-primary-950/60 dark:text-primary-50/60 w-full md:w-9/12 text-justify">
                            Design and share personalized digital invitations for weddings, birthdays, and events
                            effortlessly.
                            Impress your guests with templates tailored to your needs and celebrate in style.
                        </p>
                        <div class="flex flex-col md:flex-row gap-4">
                            <UInput variant="subtle" size="xl" placeholder="Enter your email" class="w-full md:w-96">
                            </UInput>
                            <UButton variant="subtle" size="xl" class="flex items-center justify-center">
                                Get Started
                            </UButton>
                        </div>
                    </div>

                </div>
                <div class="mt-24 relative">
                    <NuxtImg format="webp" class="w-full object-contain md:object-cover object-center" loading="lazy"
                        src="https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/desktop_1_nkxrfn.webp" />
                    <div class="absolute -bottom-2 -left-2 h-44 md:h-80 v lg:h-[420px]">
                        <NuxtImg format="webp" class="size-full object-cover object-center" loading="lazy"
                            src="https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/mobile_1_klvrnd.webp" />
                    </div>
                    <div class="absolute -top-2 -right-2 h-44 md:h-80 v lg:h-[420px]">
                        <NuxtImg format="webp" class="size-full object-cover object-center" loading="lazy"
                            src="https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/mobile_2_nucfcz.webp" />
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>