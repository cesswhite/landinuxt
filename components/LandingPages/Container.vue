<template>
    <div class="w-full">
        <div class="grid w-full grid-cols-12 gap-4">
            <template v-for="(_comp, index) in _components" :key="index">
                <LandingPagesTile :data="_comp" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Landing } from "~/types/index";

const _components = ref<Landing[]>([
    {
        name: "simple",
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/landing_1.png'
    },
    {
        name: "showcase",
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/landing_2.png'
    },
]);
</script>