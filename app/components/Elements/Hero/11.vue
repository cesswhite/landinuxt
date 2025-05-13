<template>
    <div v-motion-fade :delay="100" :duration="1250"
        class="relative flex flex-col h-full min-h-dvh w-full items-center justify-center bg-dark-50 dark:bg-dark-950 py-24">
        <div class="relative z-20 w-11/12 md:w-10/12">
            <div class="flex flex-col items-center justify-center">
                <h1
                    class="mt-4 text-center text-5xl font-semibold text-dark-900 sm:text-6xl md:text-7xl dark:text-dark-100">
                    Manage your <span
                        class="bg-gradient-to-b bg-clip-text text-transparent font-bold from-primary-500 from-0% via-primary-400 via-60% to-primary-300 to-100%">
                        content effortlessly</span> with our powerful CMS
                </h1>
                <p
                    class="text-primary-950/60 dark:text-primary-50/50 mt-4 text-center text-lg leading-8 2xl:text-xl w-full md:w-1/2">
                    Streamline your content creation, editing, and publishing with our intuitive CMS. Collaborate
                    easily, keep
                    your site up-to-date, and enhance your digital presence.
                </p>
                <div class="my-8">
                    <UButton variant="solid" to="#" size="xl">
                        Learn more about
                    </UButton>
                </div>
            </div>

        </div>
        <div class="grid grid-cols-12 gap-x-4 items-center w-[1200px] xl:w-[1800px] 2xl:w-[2500px]">
            <div class="col-span-3 p-2 bg-primary-500/10 dark:bg-primary-600/10">
                <NuxtImg class="h-[580px] w-full object-center object-cover"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    format="webp" />
            </div>
            <div class="col-span-6 p-2 bg-primary-500/10 dark:bg-primary-600/10">
                <NuxtImg class="h-[600px] w-full object-center object-cover"
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    format="webp" />
            </div>
            <div class="col-span-3 p-2 bg-primary-500/10 dark:bg-primary-600/10">
                <NuxtImg class="h-[580px] w-full object-center object-cover"
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    format="webp" />
            </div>
        </div>
    </div>
</template>