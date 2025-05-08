<template>
    <div class="w-full">
        <div class="grid w-full grid-cols-12 gap-4">
            <template v-for="(_comp, index) in _repositories" :key="index">
                <RepositoriesTile :data="_comp" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Repository } from "~/types/index";

const _repositories = ref<Repository[]>([
    {
        name: 'Kalibra',
        url: 'https://buy.polar.sh/polar_cl_sgamgcxuNdvD8nI8jv1krHrblvaZtDk6pkB411CUsy5',
        description: 'Clean, modern, and fully functional Nuxt template designed for building AI-powered image generation',
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/kalibra.webp',
        isPremium: true
    },
    {
        name: 'v4.20',
        url: 'https://github.com/cesswhite/v4.20',
        description: 'Minimal, blazing fast, and designed with developers in mind, v4.20 is your go-to starting point for modern web projects with Nuxt',
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/v4.20.webp',
        isPremium: false
    },
    {
        name: 'Lotus | QR Management',
        url: 'https://github.com/cesswhite/lotus-qr-management',
        description: 'Local QR code management made simple with Nuxt 3, UQR, and Nuxt UI: an intuitive and efficient solution for all your QR code needs',
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/lotus.webp',
        isPremium: false
    },
    {
        name: 'Nuxoki',
        url: 'https://github.com/cesswhite/nuxoki',
        description: 'Elevate your projects with this minimalistic Nuxt 3 template, designed to seamlessly integrate the Flexoxi color palette',
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/nuxoki.webp',
        isPremium: false
    },
    {
        name: 'Hato | Minimal Template',
        url: 'https://github.com/cesswhite/hato-minimal-template',
        description: 'A minimal and elegant template, created with the purpose of serving as a landing page or one-page template',
        image: 'https://res.cloudinary.com/dpvsklksg/image/upload/landinuxt/hato_slb8jj.webp',
        isPremium: false
    },

])

</script>