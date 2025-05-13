<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full grid grid-cols-12 h-auto">
        <div
            class="col-span-full md:col-span-7 flex flex-col gap-y-4 justify-center items-start px-8 h-auto py-14 lg:h-96">
            <UBadge variant="soft" size="lg">
                Digitally Crafted Simplicity
            </UBadge>
            <h1 class="text-dark-950 dark:text-dark-50 text-4xl font-light mt-14">
                Designed and developed in Hidalgo
            </h1>
            <p class="text-dark-950/60 dark:text-dark-50/60 text-base font-light font-lora w-full md:w-8/12">
                Our product merges clean aesthetics with the precision of modern digital
                craftsmanship.
                This creation showcases the essence of minimalism with a focus on seamless
                digital integration.
            </p>
            <UButton variant="solid" to="#" color="primary" size="lg">
                Where Design Meets Technology
            </UButton>
        </div>
        <div class="col-span-full md:col-span-5 h-auto lg:h-96">
            <NuxtImg class="size-full object-center object-cover" alt="my-product-cta"
                src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                format="webp" />
        </div>
    </div>
</template>