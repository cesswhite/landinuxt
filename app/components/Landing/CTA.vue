<template>
    <div
        class="from-primary-800 via-primary-500 to-primary-300 relative flex h-auto w-full flex-col items-start justify-between gap-y-4 bg-linear-to-tr p-8 lg:p-14 xl:flex-row xl:items-center xl:gap-y-0 rounded-xl">
        <div class="flex flex-col items-start justify-start gap-y-2">
            <h2 class="text-dark-50 text-3xl font-bold">
                Ship Landings with<br>Agents or CLI
            </h2>
            <p class="text-dark-50/70 text-base font-medium w-full lg:w-1/2">
                Install sections with npx landinuxt add, fetch .txt exports for your agent, or browse
                the hub and copy-paste. Same components, your workflow.
            </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
            <UButton to="/for-agents" trailing-icon="i-lucide-bot" variant="solid" size="xl"
                class="bg-dark-50/90 hover:bg-dark-50 text-primary-500 rounded-lg px-6">
                For AI Agents
            </UButton>
            <UButton to="/components" trailing-icon="i-lucide-arrow-right" variant="outline" size="xl"
                class="rounded-lg border-dark-50/30 px-6 text-dark-50">
                Browse Components
            </UButton>
        </div>
    </div>
</template>