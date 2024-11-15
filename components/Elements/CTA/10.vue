<template>
    <div
        class="relative w-full pb-4 pt-12 px-4 h-auto gap-y-12 md:h-auto md:pb-12 md:px-8 lg:px-0 flex flex-col items-center justify-start bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl lg:rounded-3xl">
        <div class="w-full p-0 lg:pl-12">
            <div class="w-full relative flex flex-col gap-y-4 z-10">
                <UBadge size="lg" color="neutral"
                    class="bg-transparent text-dark-50/50 dark:text-dark-50/50 font-serif">
                    Shaping the Future of Architecture
                </UBadge>
                <h1 class="text-dark-50/80 dark:text-dark-50 text-4xl md:text-5xl font-serif">
                    Elevate Your Vision<br>
                    with <span class="font-instrument italic text-dark-50"> Innovative Home </span> <br>
                    Building Solutions
                </h1>
                <div class="flex flex-col w-full sm:w-1/3 2xl:w-1/5 mt-4">
                    <UButton block to="#" color="neutral" variant="soft" class="px-6" size="lg">
                        Visit Our Creative Hub
                    </UButton>
                </div>
            </div>
        </div>
        <div
            class="relative lg:absolute bottom-0 lg:right-12 w-full lg:w-[520px] h-[420px] rounded-3xl lg:rounded-t-3xl lg:rounded-b-none overflow-hidden">
            <NuxtImg class="h-full w-full object-center object-cover"
                src="https://images.unsplash.com/photo-1570675894641-8860d49afece?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    </div>
</template>