<template>
    <ClientOnly>
        <UDropdownMenu :items="items">
            <UButton aria-label="button to switch theme dark to light" variant="link" color="primary" size="lg"
                icon="i-lucide-palette" class="cursor-pointer" />
            <template #colors>
                <div class="relative z-40 grid w-full grid-cols-5">
                    <template v-for="(color, index) in primaryColors" :key="index">
                        <div class="col-span-1 flex items-center justify-center">
                            <UTooltip :text="color.charAt(0).toUpperCase() + color.slice(1)" :content="{
                                align: 'center',
                                side: 'top',
                                sideOffset: 8
                            }">
                                <UButton variant="link" @click.stop.prevent="setPrimaryColor(color)"
                                    class="cursor-pointer">
                                    <span class="inline-block size-4 rounded-full"
                                        :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`" :style="{
                                            '--color-light': `var(--color-${color}-400)`,
                                            '--color-dark': `var(--color-${color}-500)`
                                        }" />
                                </UButton>
                            </UTooltip>
                        </div>
                    </template>
                </div>
            </template>
            <template #gray>
                <div class="relative z-40 grid w-full grid-cols-5">
                    <template v-for="(color, index) in neutralColors" :key="index">
                        <div class="col-span-1 flex items-center justify-center">
                            <UTooltip :text="color.charAt(0).toUpperCase() + color.slice(1)" :content="{
                                align: 'center',
                                side: 'top',
                                sideOffset: 8
                            }">
                                <UButton v-if="color === 'neutral'" variant="link" square
                                    @click.stop.prevent="setNeutralColor(color)" class="cursor-pointer">
                                    <span class="inline-block size-4 rounded-full"
                                        :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`" :style="{
                                            '--color-light': `var(--ui-color-${color}-400)`,
                                            '--color-dark': `var(--ui-color-${color}-500)`
                                        }" />
                                </UButton>
                                <UButton v-else variant="link" square @click.stop.prevent="setNeutralColor(color)"
                                    class="cursor-pointer">
                                    <span class="inline-block size-4 rounded-full"
                                        :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`" :style="{
                                            '--color-light': `var(--color-${color}-400)`,
                                            '--color-dark': `var(--color-${color}-500)`
                                        }" />
                                </UButton>
                            </UTooltip>

                        </div>
                    </template>
                </div>
            </template>
        </UDropdownMenu>
    </ClientOnly>
</template>

<script setup lang="ts">
const items = [
    [
        {
            label: "",
            slot: "colors",
        },
        {
            label: "",
            slot: "gray",
        },
    ],
];

const primaryColors = ['rose', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink']

const neutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone']

const appConfig = useAppConfig();

onMounted(() => {
    const primaryColor = localStorage.getItem("nuxt-ui-primary");
    const neutralColor = localStorage.getItem("nuxt-ui-neutral");

    if (primaryColor) {
        appConfig.ui.colors.primary = primaryColor;
    }

    if (neutralColor) {
        appConfig.ui.colors.neutral = neutralColor;
    }
});

async function setPrimaryColor(color: string) {
    appConfig.ui.colors.primary = color;
    window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
}

async function setNeutralColor(color: string) {
    appConfig.ui.colors.neutral = color;
    window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
}
</script>
