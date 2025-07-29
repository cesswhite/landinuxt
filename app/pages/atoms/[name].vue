<template>
    <NuxtLayout name="atoms">
        <AtomsWrapper :name="name.toString()" :code="_atoms?.body?.children[0]?.props?.code">
            <template #component>
                <LazyAtomsLogo v-if="name === 'logo'" />
            </template>
        </AtomsWrapper>
    </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const name = computed(() => route.params.name as string)
const _atoms = await queryContent(`/atoms/${name.value}`).findOne()
</script>
