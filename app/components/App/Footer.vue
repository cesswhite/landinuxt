<template>
    <footer class="relative flex h-auto w-full flex-col gap-8 overflow-hidden px-4 py-4 mt-56 md:mt-96">
        <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
            <template v-for="(nav, index) in navigation" :key="index">
                <UButton :to="nav.link" variant="link" color="neutral" class="p-0" size="xs">
                    {{ nav.label }}
                </UButton>
            </template>
        </div>
        <div class="flex flex-col items-center justify-center gap-4 md:flex-row">
            <template v-for="(nav, index) in social_media_navigation" :key="index">
                <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0" size="xs">
                    {{ nav.label }}
                </UButton>
            </template>
        </div>
        <div class="text-dark-950/70 dark:text-dark-50/70 text-center text-xs">
            ©LandiNuxt is a Open Source Project by
            <UButton to="https://ecostudios.dev/" variant="link" size="xs" class="p-0">
                Eco Development Studios
            </UButton>
        </div>
    </footer>
</template>

<script setup lang="ts">
const navigation = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Instructions",
        link: "/instructions",
    },

    {
        label: "Contribution",
        link: "/contribution",
    },
    {
        label: "Components",
        link: "/components",
    },
];

const social_media_navigation = [
    {
        label: "X",
        link: "https://x.com/ecostudios_dev",
    },
    {
        label: "Instagram",
        link: "https://www.instagram.com/ecostudios_dev/",
    },
    {
        label: "Facebook",
        link: "https://www.facebook.com/ecostudios.dev",
    },
    {
        label: "YouTube",
        link: "https://www.youtube.com/channel/UCrLXsqIkrCsRawK2R3HEmbQ",
    },
    {
        label: "GitHub",
        link: "https://github.com/Eco-Dev-Studios",
    },
];
</script>