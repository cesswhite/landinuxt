<template>
    <NuxtLayout name="components-hub">
        <div class="relative w-full">
            <ElementsHeader name="Auth" :number="_auth.length"
                description="Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as signin, signup, password recovery, and token management, covering all aspects of the authentication flow." />
            <ElementsContentList path="/auth" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :title="item.title">
                        <template #components>
                            <LazyElementsAuth1 v-if="item.title === ('simple' as AuthTemplates)" />
                            <LazyElementsAuth2 v-if="item.title === ('logo' as AuthTemplates)" />
                            <LazyElementsAuth3 v-if="item.title === ('big' as AuthTemplates)" />
                            <LazyElementsAuth4 v-if="item.title === ('create' as AuthTemplates)" />
                            <LazyElementsAuth5 v-if="item.title === ('reset' as AuthTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ElementsContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { AuthTemplates } from "../../../../types/templates";
const _auth = await queryContent("auth").find();

useComponentsHubCategorySeo('auth')
</script>