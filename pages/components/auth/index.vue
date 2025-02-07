<template>
    <NuxtLayout name="default">
        <div class="relative w-full px-4 py-24">
            <ElementsHeader name="Auth" :number="_auth.length"
                description="Enhance your website's user experience with our advanced authentication components. Each component is designed for seamless interaction and to facilitate essential tasks such as login, signup, password recovery, and token management, covering all aspects of the authentication flow." />
            <ContentList path="/auth" v-slot="{ list }">
                <template v-for="(item, index) in list" :key="item._path">
                    <ElementsWrapper :item="item" :code="item.body?.children[0]?.props?.code" :title="item.title">
                        <template #components>
                            <LazyElementsAuth1 v-if="item.title === ('simple' as AuthTemplates)" />
                        </template>
                    </ElementsWrapper>
                </template>
            </ContentList>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import type { AuthTemplates } from "~/types/templates";
const _auth = await queryContent("auth").find();

useSeoMeta({
    title: "Auth Section | LandiNuxt",
});
</script>