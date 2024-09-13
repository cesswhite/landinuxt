<template>
    <div class="w-full min-h-dvh h-full relative flex items-center justify-center">
        <!-- Background Image -->
        <NuxtImg class="object-cover object-[right_-14rem_top_0rem] md:object-center absolute w-full h-full"
            src="https://images.unsplash.com/photo-1637552862488-825fdebd3949?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            loading="lazy" alt="my-hero-background" :placeholder="[50, 25, 75, 5]" />
        <!-- Overlay -->
        <div class="w-4/5 h-full absolute top-0 left-0 bg-gradient-to-r from-gray-950/70" />
        <div class="relative z-20 w-10/12">
            <div class="flex flex-col gap-4">
                <h1 class="text-white text-center md:text-left font-semibold text-5xl sm:text-6xl md:text-8xl">
                    Support your <br>
                    friends with <br>
                    heartfelt care
                </h1>
                <div class="w-full sm:w-96 mt-4 mx-auto md:mx-0">
                    <UButton block to="/" size="xl" type="solid" color="primary"
                        class="rounded-full flex items-center justify-center gap-6" aria-label="Explore our proposals">
                        Explore our proposals
                        <template #trailing>
                            <UIcon name="i-heroicons-arrow-right" />
                        </template>
                    </UButton>
                </div>
            </div>
        </div>
    </div>
</template>
