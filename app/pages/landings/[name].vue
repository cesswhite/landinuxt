<template>
    <NuxtLayout name="landings">
        <LandingPagesWrapper :name="name.toString()" :code="_landings.body?.children[0].props?.code">
            <template #component>
                <LazyLandingPages1 v-if="name === 'simple'" />
                <LazyLandingPages2 v-if="name === 'showcase'" />
                <LazyLandingPages3 v-if="name === 'saas'" />
                <LazyLandingPages4 v-if="name === 'agency'" />
            </template>
        </LandingPagesWrapper>
    </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { params } = route
const name = ref(params.name)
const _landings = await queryContent(`/landings/${name.value}`).findOne()
</script>
