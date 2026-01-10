<template>
    <div
        class="bg-dark-50 relative w-full h-auto py-24 md:h-[640px] flex items-center group grayscale-75 hover:saturate-150 hover:grayscale-0 bg-[url('https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-left-top transition-all duration-700 ease-in-out will-change-auto">
        <div
            class="absolute h-full w-full bg-gradient-to-r from-dark-50 dark:from-dark-950 z-0 lg:group-hover:backdrop-blur-sm transition-all duration-700 ease-in-out will-change-auto" />
        <UContainer>
            <div class="w-full lg:w-1/2 relative flex flex-col gap-y-4 z-10 will-change-auto">
                <UBadge size="sm" color="neutral" class="bg-transparent text-dark-500 dark:text-dark-50/50">
                    Design Studio
                </UBadge>
                <h1 class="text-dark-950 dark:text-dark-50 text-5xl md:text-6xl font-extrabold text-left uppercase">
                    Create Your <br>
                    Perfect Living Space
                </h1>
                <p
                    class="text-dark-950/80 dark:text-dark-50/70 text-lg md:text-xl font-normal font-family-inter text-left w-full mt-4">
                    Transform your home with our powerful design tool, trusted by over 250,000 users to visualize,
                    customize,
                    and
                    bring their ideal living room to life. Elevate your interior design skills and unlock the potential
                    of your
                    space with ease.
                </p>
                <div class="flex flex-col w-full md:flex-row gap-4 mt-4 md:w-8/12 lg:w-full">
                    <UButton block to="#" color="primary" variant="solid" class="rounded-full py-3 px-6">
                        Explore Our Design Studio
                    </UButton>
                    <UButton block to="#" color="neutral" variant="outline" class="rounded-full py-3 px-6">
                        Discover Your Dream Space
                    </UButton>
                </div>
            </div>
        </UContainer>
    </div>
</template>