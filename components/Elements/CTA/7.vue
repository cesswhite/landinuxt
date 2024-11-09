<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full grid grid-cols-12 h-auto">
        <div
            class="col-span-full md:col-span-6 flex flex-col gap-y-4 justify-center items-center px-8 h-auto py-14 lg:h-96 bg-primary-200 dark:bg-primary-600">
            <h1 class="text-dark-950 dark:text-dark-50 text-3xl font-bold text-center uppercase">
                Manage your tasks
            </h1>
            <p class="text-dark-950/70 dark:text-dark-50/70 text-base font-light font-lora  text-center xl:w-1/2">
                Unlock your productivity by joining a community of over 250,000 users with Minima
            </p>
            <NuxtLink to="#" target="_blank">
                <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/Download_on_the_App_Store_Badge_US.svg"
                    class="size-auto h-9" />
            </NuxtLink>
        </div>
        <div
            class="col-span-full md:col-span-6 h-auto py-14 flex items-center justify-center bg-primary-50/5 dark:bg-dark-500/5">
            <NuxtImg class="size-32 object-center object-cover rounded-3xl border border-dark-50/5" alt="my-product-cta"
                src="https://res.cloudinary.com/dpvsklksg/image/upload/Minima_1200x1200_jkeyzl.webp" />
        </div>
    </div>
</template>