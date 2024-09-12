<template>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }">
        <UButton aria-label="button to switch theme dark to light" variant="link" color="primary" size="lg"
            icon="i-clarity-color-palette-solid" />
        <template #colors>
            <div class="w-full grid grid-cols-5 gap-2 relative z-40">
                <template v-for="(color, index) in colors" :key="index">
                    <div class="col-span-1 flex items-center justify-center">
                        <button @click="setPrimaryColor(color)" class="size-6 rounded-full"
                            :class="[getPrimaryColor(color)]" />
                    </div>
                </template>
            </div>
        </template>
    </UDropdown>
</template>

<script setup lang="ts">
const items = [
    [{
        label: '',
        slot: 'colors',
    }]
]

onMounted(() => {
    const primaryColor = localStorage.getItem('primaryColor')
    if (primaryColor) {
        appConfig.ui.primary = primaryColor
    }
})

const appConfig = useAppConfig()
const colors = computed(() => appConfig.ui.colors.filter(color => color !== 'primary'))

const getPrimaryColor = (color: string) => { return `bg-${color}-500` }

async function setPrimaryColor(color: string) {
    appConfig.ui.primary = color
    localStorage.setItem('primaryColor', color)
}
</script>