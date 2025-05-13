<template>
    <div class="h-auto min-h-screen w-full flex items-center justify-center">
        <div class="w-full max-w-7xl mx-auto h-full">
            <div class="grid grid-cols-12 gap-4 w-full">
                <div class="col-span-full md:col-span-6 flex justify-center items-center h-screen px-4 sm:h-auto">
                    <div class="flex flex-col gap-y-6 md:gap-y-8">
                        <div>
                            <UBadge color="primary" size="lg" variant="outline">
                                Stunning Mesh Gradients & Effects
                            </UBadge>
                        </div>
                        <h1
                            class="text-pretty text-5xl/10 font-bold tracking-tight text-dark-950 dark:text-dark-50 md:text-6xl lg:text-7xl md:leading-[3.3rem] lg:leading-[3.6rem]">
                            The only way to make your app look
                            <span class="font-family-instrument italic">unique</span>
                        </h1>
                        <p
                            class="text-pretty text-lg font-medium text-dark-950/60 dark:text-dark-50/60 md:text-xl 2xl:text-xl">
                            Create stunning mesh gradients and effects that elevate your app's visual identity,
                            eye-catching
                            interfaces that users will remember and love.
                        </p>
                        <div class="flex gap-4">
                            <UButton to="#" size="lg" color="primary" variant="solid" icon="i-ic-baseline-apple"
                                label="Download App" class="cursor-pointer" />
                            <UButton to="#" size="lg" color="primary" variant="soft" icon="i-mdi-google-play"
                                label="Download App" class="cursor-pointer" />
                        </div>
                        <div class="flex gap-4">
                            <UAvatarGroup>
                                <UAvatar src="https://github.com/cesswhite.png" alt="Cess White" />
                                <UAvatar src="https://github.com/betomoedano.png" alt="Betomoedano" />
                                <UAvatar src="https://github.com/cesswhite.png" alt="Cess White" />
                                <UAvatar src="https://github.com/betomoedano.png" alt="Betomoedano" />
                            </UAvatarGroup>
                            <div class="text-base text-primary-500 dark:text-primary-400 font-medium">
                                200k+ Downloads
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-full md:col-span-6">
                    <NuxtImg loading="lazy" alt="mesh-gradient" format="webp"
                        class="w-full h-full object-cover object-center rounded-md"
                        src="https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/hero-1-demo_c9ywjy.webp" />
                </div>
            </div>
        </div>
    </div>
</template>