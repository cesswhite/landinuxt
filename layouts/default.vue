<template>
    <div class="relative w-full min-h-dvh h-auto bg-dark-50 dark:bg-dark-950">
        <AppHeader />
        <UContainer class="max-w-[1680px]">
            <slot />
        </UContainer>
        <AppFooter />
    </div>
</template>
