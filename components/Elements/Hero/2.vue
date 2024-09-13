<template>
    <header class="w-full relative flex items-center justify-between bg-white dark:bg-gray-950 px-4 py-2">
        <div class="size-8">
            <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
                class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
                :placeholder="[50, 25, 75, 5]" />
        </div>
        <nav class="hidden md:flex items-center justify-start">
            <UButton variant="link" color="primary" size="lg" to="/">
                Home
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="/">
                About
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="/">
                Services
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="/">
                Contact
            </UButton>
            <UButton variant="link" color="primary" size="lg" to="/">
                Blog
            </UButton>
        </nav>
        <div class="inline-block md:hidden">
            <UButton icon="i-heroicons-bars-3" variant="link" color="primary" size="lg"
                @click="isOpenResponsiveMenu = true" />
        </div>
        <USlideover v-model="isOpenResponsiveMenu">
            <div class="p-4">
                <div class="flex items-center justify-end">
                    <UButton icon="i-heroicons-x-mark" variant="link" color="primary" size="lg"
                        @click="isOpenResponsiveMenu = false" />
                </div>
                <nav class="flex flex-col items-center justify-start w-full mt-12">
                    <UButton block variant="link" color="primary" size="lg" to="/">
                        Home
                    </UButton>
                    <UButton block variant="link" color="primary" size="lg" to="/">
                        About
                    </UButton>
                    <UButton block variant="link" color="primary" size="lg" to="/">
                        Services
                    </UButton>
                    <UButton block variant="link" color="primary" size="lg" to="/">
                        Contact
                    </UButton>
                    <UButton block variant="link" color="primary" size="lg" to="/">
                        Blog
                    </UButton>
                </nav>
            </div>
        </USlideover>
    </header>
</template>

<script setup lang="ts">
const isOpenResponsiveMenu = ref(false)
</script>
