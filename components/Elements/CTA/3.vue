<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full grid grid-cols-12 rounded-xl overflow-hidden">
        <div class="col-span-full md:col-span-5 h-96">
            <NuxtImg class="size-full object-center object-cover" alt="my-product-cta"
                src="https://images.unsplash.com/photo-1730407401172-aeed1b1ace5b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div class="col-span-full md:col-span-7 flex flex-col gap-y-4 justify-center items-center p-8 min-h-96">
            <span
                class="inline-block text-center mx-auto font-instrument tracking-wide text-primary-600 dark:text-primary-500">
                Minimal by Design
            </span>
            <h1 class="text-dark-950 dark:text-dark-50 text-2xl md:text-3xl font-light font-lora text-center w-full">
                Engineered in Hidalgo, Mexico, this product blends pure, subtle sweetness with a streamlined, minimal
                finish.
            </h1>
            <UButton variant="link" to="#" color="primary" size="xl" class="font-lora mx-auto inline-block text-center">
                Where precision meets aesthetic, learn more
            </UButton>
        </div>
    </div>
</template>