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
import type { Repository } from "../../../types/index";

const _repositories = ref<Repository[]>([
    {
        name: 'Kalibra',
        url: 'https://buy.polar.sh/polar_cl_sgamgcxuNdvD8nI8jv1krHrblvaZtDk6pkB411CUsy5',
        description: 'Nuxt template for AI image generation',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/kalibra_ad3nig.webp',
        isPremium: true
    },
    {
        name: 'v4.20',
        url: 'https://github.com/cesswhite/v4.20',
        description: 'Minimal, fast Nuxt starter for developers',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/v4.20_qxnmfj.webp',
        isPremium: false
    },
    {
        name: 'Portfolio | Minimal Template',
        url: 'https://github.com/cesswhite/portfolio',
        description: 'Simple portfolio template for minimalists',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/portfolio_bjpfwp.webp',
        isPremium: false
    },
    {
        name: 'Pausa | Auth Template',
        url: 'https://github.com/cesswhite/pausa',
        description: 'Auth template with Supabase',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/pausa_jwdd5x_vvkje3.webp',
        isPremium: false
    },
    {
        name: 'Lotus | QR Management',
        url: 'https://github.com/cesswhite/lotus-qr-management',
        description: 'Simple QR Code Management',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/lotus_cufka0.webp',
        isPremium: false
    },
    {
        name: 'Nuxoki',
        url: 'https://github.com/cesswhite/nuxoki',
        description: 'Template with Flexoxi color palette',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/nuxoki_heuhuk.webp',
        isPremium: false
    },
    {
        name: 'Hato | Minimal Template',
        url: 'https://github.com/cesswhite/hato-minimal-template',
        description: 'Minimal landing or one-page template',
        image: 'https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/hato_k9q4rw.webp',
        isPremium: false
    },


])

</script>