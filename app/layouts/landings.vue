<template>
    <div class="relative h-auto w-full bg-[#ffffff] dark:bg-[#000000]">
        <div class="fixed top-0 w-full flex items-center justify-end bg-dark-50 dark:bg-dark-950 z-60">
            <UButton @click="$router.push({ path: '/landings' })" icon="i-heroicons-arrow-left" variant="link"
                size="sm" />
            <AppSwitchPrimaryColor />
            <AppSwitchMode />
        </div>
        <slot />
    </div>
</template>