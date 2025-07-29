<template>
    <div class="relative w-full py-24 px-8">
        <div class="grid grid-cols-12 gap-4 rounded-xl bg-primary-500 dark:bg-primary-600">
            <div class="col-span-full lg:col-span-6 flex flex-col items-start justify-center gap-2 p-8">
                <h2 class="text-dark-50 text-4xl text-center font-bold tracking-tight">
                    Elevate Your Design with Mesh Gradient App
                </h2>
                <p class="text-dark-50/60 text-center w-full text-lg md:text-xl">
                    Create stunning visual effects and unique gradients that will make your projects stand out. Join
                    over 200k
                    designers who've transformed their workflow with our intuitive tools.
                </p>
                <div class="flex flex-col lg:flex-row gap-2 mx-auto">
                    <UButton to="#" size="lg" color="neutral" variant="solid" icon="i-ic-baseline-apple"
                        label="Download App" class="cursor-pointer" />
                    <UButton to="#" size="lg" color="neutral" variant="soft" icon="i-mdi-google-play"
                        label="Download App" class="cursor-pointer" />
                </div>
            </div>
            <div class="col-span-full lg:col-span-6 gap-4 grid grid-cols-subgrid">
                <div class="col-span-full lg:col-span-3">
                    <NuxtImg
                        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/single-2_jqyqd8_bmrdlq.webp"
                        alt="mesh-gradient"
                        class="w-full md:h-96 lg:h-auto object-cover md:object-contain object-bottom rounded-md" />
                </div>
                <div class="col-span-full lg:col-span-3">
                    <NuxtImg
                        src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/single-1_jcfqxi_v7ciwm.webp"
                        alt="mesh-gradient"
                        class="w-full md:h-96 lg:h-auto object-cover md:object-contain object-center rounded-md" />
                </div>
            </div>
        </div>
    </div>
</template>