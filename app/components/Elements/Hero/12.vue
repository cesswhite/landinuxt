<template>
    <div class="w-full h-dvh relative">
        <NuxtImg format="webp" class="size-full object-cover object-center" loading="lazy"
            src="https://images.unsplash.com/photo-1554057009-4bb718be3f32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <UContainer>
            <div class="relative w-full">
                <div class="absolute bottom-48 lg:bottom-32">
                    <h1 class="text-5xl md:text-8xl text-dark-50 font-medium">
                        SKIN CARE <br>
                        <span class="text-primary-600 italic font-family-instrument tracking-widest">NOURISHMENT</span>
                        <br>
                        SOLUTION
                    </h1>
                </div>
            </div>
        </UContainer>
        <div class="absolute w-full h-auto lg:h-16 bottom-0 bg-primary-600 py-4 flex items-center">
            <UContainer class="w-full">
                <div class="w-full flex flex-col items-start md:items-center lg:flex-row justify-between gap-2">
                    <div class="flex items-center justify-center gap-x-2 text-base text-primary-950/70">
                        <UIcon name="i-lucide-leaf" />
                        <span class="inline-block font-medium">Made with natural ingredients</span>
                    </div>
                    <div class="flex items-center justify-center gap-x-2 text-base text-primary-950/70">
                        <UIcon name="i-lucide-vegan" />
                        <span class="inline-block font-medium">Vegan-friendly</span>
                    </div>
                    <div class="flex items-center justify-center gap-x-2 text-base text-primary-950/70">
                        <UIcon name="i-lucide-cross" />
                        <span class="inline-block font-medium">Dermatologically tested</span>
                    </div>
                    <div class="flex items-center justify-center gap-x-2 text-base text-primary-950/70">
                        <UIcon name="i-lucide-recycle" />
                        <span class="inline-block font-medium">Eco-conscious packaging</span>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>