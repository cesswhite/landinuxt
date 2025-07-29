<template>
    <div id="landing-two" class="relative h-auto w-full">
        <!-- HEADER -->
        <header class="fixed top-12 z-50 flex w-full items-center justify-between py-2 px-4">
            <div class="size-8">
                <NuxtImg src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
                    class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]" format="webp" />
            </div>
            <div
                class="hidden items-center justify-center center-center rounded-full border border-dark-200/60 bg-dark-50/30 py-1 px-24 backdrop-blur md:flex dark:border-dark-500/5 dark:bg-dark-900/90">
                <nav class="flex w-full items-center justify-center gap-2">
                    <UButton variant="ghost" color="primary" size="lg" to="#" class="rounded-full px-4">
                        Home
                    </UButton>
                    <UButton variant="ghost" color="primary" size="lg" to="#" class="rounded-full px-4">
                        About
                    </UButton>
                    <UButton variant="ghost" color="primary" size="lg" to="#" class="rounded-full px-4">
                        Pricing
                    </UButton>
                    <UButton variant="ghost" color="primary" size="lg" to="#" class="rounded-full px-4">
                        Contact
                    </UButton>
                </nav>
            </div>
            <div class="flex w-auto gap-4">
                <UButton icon="i-heroicons-user-solid" class="hidden rounded-full md:flex" size="lg">
                    Create Account
                </UButton>
                <USlideover title="Menu" close-icon="i-heroicons-x-mark">
                    <div class="inline-block md:hidden">
                        <UButton icon="i-heroicons-bars-3" variant="link" color="primary" size="lg" />
                    </div>
                    <template #body>
                        <nav class="flex w-full flex-col gap-2">
                            <UButton block variant="ghost" color="primary" size="lg" to="#">
                                Home
                            </UButton>
                            <UButton block variant="ghost" color="primary" size="lg" to="#">
                                About
                            </UButton>
                            <UButton block variant="ghost" color="primary" size="lg" to="#">
                                Pricing
                            </UButton>
                            <UButton block variant="ghost" color="primary" size="lg" to="#">
                                Contact
                            </UButton>
                            <UButton block icon="i-heroicons-user-solid" size="lg">
                                Create Account
                            </UButton>
                        </nav>
                    </template>
                </USlideover>
            </div>
        </header>
        <!-- HERO -->
        <div class="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-dark-50 dark:bg-dark-950">
            <!-- SVG Container -->
            <div
                class="absolute z-10 h-dvh w-[820px] pt-24 opacity-70 saturate-200 md:w-[1080px] lg:w-full lg:pt-[400px] xl:pt-0 dark:opacity-90">
                <svg class="h-full w-full" viewBox="0 0 1834 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_3106_1413)">
                        <path class="fill-primary-500"
                            d="M2043.57 646.103C1998.53 578.986 1921.39 545.06 1845.18 558.851L759.526 755.313C541.677 794.736 536.297 1124.82 752.689 1174.82L2193.64 1507.76C2373.22 1549.25 2505.73 1334.72 2398.87 1175.5L2043.57 646.103Z" />
                    </g>
                    <g filter="url(#filter1_f_3106_1413)">
                        <path class="fill-primary-400"
                            d="M2023.6 770.094C1978.55 702.977 1901.41 669.051 1825.2 682.842L739.547 879.304C521.698 918.727 516.318 1248.82 732.71 1298.81L2173.66 1631.75C2353.24 1673.24 2485.75 1458.71 2378.89 1299.49L2023.6 770.094Z" />
                    </g>
                    <g style="mix-blend-mode: plus-lighter" filter="url(#filter2_f_3106_1413)">
                        <path class="fill-white"
                            d="M1900.49 905.625C1837.91 854.458 1754.25 844.366 1685.31 879.668L703.319 1382.59C506.27 1483.5 596.866 1800.96 818.457 1786.04L2294.03 1686.71C2477.92 1674.33 2542.51 1430.59 2394.07 1309.21L1900.49 905.625Z" />
                    </g>
                    <defs>
                        <filter id="filter0_f_3106_1413" x="0.827881" y="-36.5913" width="3028.72" height="2141.98"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="296.204" result="effect1_foregroundBlur_3106_1413" />
                        </filter>
                        <filter id="filter1_f_3106_1413" x="217.812" y="324.363" width="2554.79" height="1668.05"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="177.722" result="effect1_foregroundBlur_3106_1413" />
                        </filter>
                        <filter id="filter2_f_3106_1413" x="239.247" y="503.372" width="2592.35" height="1638.62"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="177.722" result="effect1_foregroundBlur_3106_1413" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div class="relative z-30">
                <div class="flex flex-col items-center justify-center px-4">
                    <!-- You can change the gradient color and direction easy in https://www.onamu.dev/ -->
                    <h1
                        class="via-primary-900/90 to-primary-600/90 dark:via-primary-200/90 dark:to-primary-400/90 font-family-inter mt-4 bg-gradient-to-br from-dark-950/90 from-55% via-70% to-85% bg-clip-text text-center text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl dark:from-dark-50/90">
                        Embark on a Journey to <br />
                        Space Exploration
                    </h1>
                    <p
                        class="text-primary-950/60 dark:text-primary-50/60 mt-4 w-full text-center text-lg leading-8 md:w-3/5 2xl:text-xl">
                        Join our startup and experience the thrill of traveling to space with
                        our innovative solutions.
                    </p>
                    <div class="mt-4 flex gap-4">
                        <UButton variant="solid" color="neutral" to="#" size="lg" class="px-12"
                            icon="i-heroicons-rocket-launch-solid">
                            Launch rocket
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <!-- LOGOS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full  py-24">
            <UContainer>
                <h2 class="text-dark-900 dark:text-dark-50 text-left text-4xl font-bold sm:text-4xl md:text-5xl">Our
                    Partners
                </h2>
                <p class="text-dark-950/60 dark:text-dark-50/60 mt-2 text-left text-lg font-normal">
                    Explore the possibilities with us, trusted by over +5,000 companies
                </p>
                <div class="mt-12">
                    <NuxtMarquee :pauseOnHover="true" direction="right" gradient
                        :gradientColor="$colorMode.value === 'dark' ? 'var(--color-dark-950)' : 'var(--color-dark-50)'">
                        <div class="flex items-center gap-x-8">
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                        </div>
                    </NuxtMarquee>
                </div>
                <div class="mt-4">
                    <NuxtMarquee :pauseOnHover="true" direction="left" gradient
                        :gradientColor="$colorMode.value === 'dark' ? 'var(--color-dark-950)' : 'var(--color-dark-50)'">
                        <div class="flex items-center gap-x-8">
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                        </div>
                    </NuxtMarquee>
                </div>
            </UContainer>
        </div>
        <!-- FEATURES -->
        <div class="flex w-full flex-col bg-dark-50 py-24 dark:bg-dark-950">
            <UContainer>
                <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                    <div class="mx-auto flex w-full flex-col items-center justify-center gap-2 md:w-1/2">
                        <UBadge variant="outline" color="primary"
                            class="flex items-center justify-center gap-4 rounded-full px-4 md:px-12" size="lg">
                            <UIcon name="i-heroicons-solid-sparkles" size="size-4" />
                            Beautifully crafted components
                        </UBadge>
                        <h1
                            class="mt-2 text-center text-4xl font-semibold text-dark-950 sm:text-4xl md:text-5xl dark:text-dark-50">
                            Build your Dream Home
                        </h1>
                        <p class="text-dark-950/60 dark:text-dark-50/60 mt-2 w-full px-8 text-center text-lg md:px-0">
                            Unlock your construction project's full potential with our
                            comprehensive suite of tools and services
                        </p>
                    </div>
                </div>
                <div
                    class="mt-24 flex flex-col items-start justify-between gap-x-0 gap-y-24 px-4 md:mt-12 md:gap-x-6 md:gap-y-12 lg:flex-row xl:px-24">
                    <template v-for="image in images" :key="image.src">
                        <div class="flex flex-1 flex-col">
                            <NuxtImg :src="image.src" format="webp"
                                class="mx-auto h-72 w-full rounded-xl object-cover object-center md:w-96 2xl:w-full"
                                loading="lazy" alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" />
                            <span
                                class="text-center text-2xl font-medium text-dark-950 dark:text-dark-50 inline-block mt-2">
                                {{ image.name }}
                            </span>
                            <p
                                class="mx-auto w-full text-center text-base font-normal text-dark-950/60 md:w-1/2 lg:w-full dark:text-dark-50/60 mt-2">
                                {{ image.description }}
                            </p>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- CTA -->
        <div class="bg-primary-700 relative w-full py-32">
            <div class="flex flex-col gap-y-4">
                <h1 class="text-dark-50 text-center text-4xl sm:text-4xl md:text-5xl font-bold">
                    Unlock Your Startup Success
                </h1>
                <p class="text-dark-50/70 mx-auto w-full text-center text-lg font-normal md:w-1/2">
                    Unlock your Startup full potential with our guidance <br />
                    you can achieve a new milestone
                </p>
                <div class="mx-auto w-auto">
                    <UButton to="#" size="lg" variant="solid" class="text-dark-50 bg-primary-900 hover:bg-primary-950">
                        Discover more about
                    </UButton>
                </div>
            </div>
        </div>
        <!-- TESTIMONIALS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full  py-24">
            <UContainer>
                <div class="relative h-auto w-full px-4 py-24">
                    <h1
                        class="text-dark-950 dark:text-dark-50 text-left text-3xl font-semibold sm:text-4xl md:text-5xl">
                        Trusted by businesses and <br />
                        individuals worldwide.
                    </h1>
                    <div class="mt-12 grid grid-cols-12 gap-4">
                        <template v-for="(testimonial, index) in testimonials">
                            <div class="col-span-full gap-4 lg:col-span-4">
                                <div
                                    class="border-dark-950/10 dark:border-dark-600/30 shadow-dark-950/5 dark:shadow-primary-500/5 flex h-full flex-col items-start justify-between rounded-2xl border p-4 shadow-xl">
                                    <div class="flex w-full items-start">
                                        <UIcon name="i-heroicons-star-20-solid"
                                            class="text-yellow-500/80 dark:text-yellow-600/80" />
                                        <UIcon name="i-heroicons-star-20-solid"
                                            class="text-yellow-500/80 dark:text-yellow-600/80" />
                                        <UIcon name="i-heroicons-star-20-solid"
                                            class="text-yellow-500/80 dark:text-yellow-600/80" />
                                        <UIcon name="i-heroicons-star-20-solid"
                                            class="text-yellow-500/80 dark:text-yellow-600/80" />
                                        <UIcon name="i-heroicons-star-20-solid"
                                            class="text-yellow-500/40 dark:text-yellow-600/40" />
                                    </div>
                                    <p class="text-dark-950/60 dark:text-dark-50/60 mt-8 text-base">
                                        {{ testimonial.text }}
                                    </p>
                                    <div class="mt-12 flex w-full items-center gap-x-4">
                                        <div class="inline w-auto">
                                            <UAvatar :alt="testimonial.name" size="md" class="bg-primary-500"
                                                :ui="{ fallback: 'text-dark-50/90' }" />
                                        </div>
                                        <div class="flex flex-col">
                                            <span class="text-dark-950/80 dark:text-dark-50/90 text-sm font-medium">
                                                {{ testimonial.name }}
                                            </span>
                                            <span class="text-dark-950/60 dark:text-dark-50/60 text-sm font-medium">
                                                {{ testimonial.username }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </UContainer>
        </div>
        <!-- FAQ -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full  py-24">
            <UContainer>
                <div class="flex flex-col">
                    <h1 class="text-dark-900 dark:text-dark-100 text-4xl md:text-5xl font-semibold">
                        Frequently Asked Questions
                    </h1>
                </div>
                <div class="mt-12 flex flex-col gap-y-4">
                    <template v-for="(faq, index) in faqs" :key="index">
                        <div class="w-full">
                            <UCollapsible class="flex flex-col gap-2" :defaultOpen="faq.open">
                                <UButton @click="faq.open = !faq.open"
                                    class="group border-dark-200 flex cursor-pointer items-center justify-between rounded-none border-b pb-2"
                                    :label="faq.question" color="neutral" variant="link" block size="xl">
                                    <template #trailing>
                                        <UIcon :name="faq.open ? 'i-heroicons-minus' : 'i-heroicons-plus'" />
                                    </template>
                                </UButton>
                                <template #content>
                                    <p class="text-dark-900/50 dark:text-dark-50/50 relative w-full px-4">
                                        {{ faq.answer }}
                                    </p>
                                </template>
                            </UCollapsible>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- CONTACT -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full  py-24">
            <UContainer>
                <div class="relative grid w-full grid-cols-12 gap-4">
                    <div class="col-span-full p-4 md:col-span-6">
                        <div class="flex h-auto w-full flex-col items-start justify-between">
                            <div class="relative">
                                <h2 class="text-dark-900 dark:text-dark-50 text-4xl md:text-5xl font-semibold">
                                    We are here to help you
                                </h2>
                                <p class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-lg font-normal">
                                    Got questions or need assistance? Feel free to reach out to us.
                                    <br />
                                    We're just a message away!
                                </p>
                                <div class="mt-8 flex w-full items-center justify-start">
                                    <UIcon name="i-heroicons-envelope"
                                        class="text-dark-900/60 dark:text-dark-50/60 size-4" />
                                    <UButton :to="`mailto:${email}`" variant="link" color="neutral" size="lg">
                                        {{ email }}
                                    </UButton>
                                </div>
                                <div class="flex w-full items-center justify-start">
                                    <UIcon name="i-heroicons-phone"
                                        class="text-dark-900/60 dark:text-dark-50/60 size-4" />
                                    <UButton :to="`tel:${phone}`" variant="link" color="neutral" size="lg">
                                        {{ phone }}
                                    </UButton>
                                </div>
                                <div class="flex w-full items-center justify-start">
                                    <UIcon name="i-heroicons-map-pin"
                                        class="text-dark-900/60 dark:text-dark-50/60 size-4" />
                                    <UButton to="#" variant="link" color="neutral" size="lg">
                                        {{ address }}
                                    </UButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full p-4 md:col-span-6">
                        <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Name" name="fullname" size="lg">
                                    <UInput v-model="state.fullname" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Email" name="email" size="lg">
                                    <UInput v-model="state.email" type="email" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Phone" name="phone" size="lg">
                                    <UInput v-model="state.phone" type="tel" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Company" name="company" size="lg">
                                    <UInput v-model="state.company" type="text" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full">
                                <UFormField label="Message" name="message" size="lg">
                                    <UTextarea v-model="state.message" :rows="6" type="textarea" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-6 col-start-7 flex justify-end">
                                <UButton block type="submit" size="lg" class="cursor-pointer">
                                    Send message
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                </div>
            </UContainer>
        </div>
        <!-- FOOTER -->
        <footer
            class="relative bg-dark-50 dark:bg-dark-950 w-full border-t border-dark-950/10 py-12 dark:border-dark-50/50 pt-24">
            <UContainer>
                <div class="flex flex-col-reverse items-start justify-between gap-y-12 md:flex-row md:items-end">
                    <div class="flex w-full flex-col md:w-1/2">
                        <span class="inline-block text-sm text-dark-950/50 dark:text-dark-50/50">
                            (000) 000-0000
                        </span>
                        <span class="inline-block text-sm text-dark-950/50 dark:text-dark-50/50">
                            ©2024 Spotlight All rights reserved
                        </span>
                    </div>
                    <div class="flex w-full items-start justify-start gap-x-24 sm:justify-end md:w-1/2">
                        <div class="flex flex-col gap-y-2">
                            <template v-for="(nav, index) in navigation" :key="index">
                                <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                                    {{ nav.label }}
                                </UButton>
                            </template>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <template v-for="(b_nav, index) in bottom_navigation" :key="index">
                                <UButton :to="b_nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                                    {{ b_nav.label }}
                                </UButton>
                            </template>
                        </div>
                        <div class="flex flex-col gap-y-2">
                            <template v-for="(social, index) in social_network_navigation" :key="index">
                                <UButton :to="social.link" target="_blank" variant="link" color="neutral" class="p-0">
                                    {{ social.label }}
                                </UButton>
                            </template>
                        </div>
                    </div>
                </div>
            </UContainer>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const images = [
    {
        src: "https://images.pexels.com/photos/16062771/pexels-photo-16062771/free-photo-of-ordenador-personal.jpeg",
        name: "Digital Innovation",
        description:
            "Unlock your agency's digital potential with cutting-edge solutions tailored to drive growth and innovation.",
    },
    {
        src: "https://images.pexels.com/photos/18338405/pexels-photo-18338405/free-photo-of-ordenador-placa-base-cpu-intel.jpeg",
        name: "Data Analytics",
        description:
            "Gain insights into your agency's performance with advanced data analytics tools, empowering data-driven decision-making.",
    },
    {
        src: "https://images.pexels.com/photos/8100067/pexels-photo-8100067.jpeg",
        name: "Cybersecurity",
        description:
            "Protect your agency's digital assets with robust cybersecurity measures, ensuring the integrity of sensitive information.",
    },
];
const testimonials = shallowRef([
    {
        name: "Emily Johnson",
        username: "@emilyj",
        text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        title: "Business Transformation",
        img: "https://images.unsplash.com/photo-1512291313931-d4291048e7b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ana Rodríguez",
        username: "@anarod",
        text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
        title: "Negocio Transformado",
        img: "https://images.unsplash.com/photo-1640622659613-26d7d08893e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Emily Johnson",
        username: "@emilyj",
        text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        title: "Business Transformation",
        img: "https://images.unsplash.com/photo-1512291313931-d4291048e7b6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Ana Rodríguez",
        username: "@anarod",
        text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
        title: "Negocio Transformado",
        img: "https://images.unsplash.com/photo-1640622659613-26d7d08893e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    //Add More data
]);
const faqs = ref([
    {
        question: "What services do you offer?",
        answer:
            "We offer a variety of services including web development, digital marketing, and cybersecurity solutions to cater to diverse business needs.",
        open: true,
    },
    {
        question: "How can I contact support?",
        answer:
            "You can contact support via email, phone, or through our website's contact form. Our support team is available 24/7 to assist you with any inquiries or issues.",
        open: false,
    },
    {
        question: "What is your refund policy?",
        answer:
            "Our refund policy is designed to ensure customer satisfaction. If you are not satisfied with our services, you can request a refund within a specified timeframe as outlined in our terms and conditions.",
        open: false,
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            "Yes, you can cancel your subscription at any time by logging into your account and following the cancellation process. Please note that cancellation policies may vary depending on the subscription plan you have chosen.",
        open: false,
    },
    {
        question: "How do I track my order?",
        answer:
            "You can track your order through our website or by contacting support directly. We provide regular updates on order status to ensure you are informed throughout the delivery process.",
        open: false,
    },
    {
        question: "Do you offer any discounts?",
        answer:
            "Yes, we offer various discounts and promotions to our customers. These may include seasonal discounts, loyalty rewards, or special offers for new customers. Please check our website regularly for any available discounts.",
        open: false,
    },
]);
const navigation = [
    {
        label: "Development",
        link: "#",
    },
    {
        label: "Design",
        link: "#",
    },
    {
        label: "Mobile Apps",
        link: "#",
    },
    {
        label: "Imagene Data",
        link: "#",
    },
];

const bottom_navigation = [
    {
        label: "About",
        link: "#",
    },
    {
        label: "Privacy Policy",
        link: "#",
    },
    {
        label: "Contact",
        link: "#",
    },
    {
        label: "Website",
        link: "#",
    },
    {
        label: "Brand",
        link: "#",
    },
    {
        label: "Gallery",
        link: "#",
    },
    {
        label: "Blog",
        link: "#",
    },
    {
        label: "Services",
        link: "#",
    },
    {
        label: "Careers",
        link: "#",
    },
];

const social_network_navigation = [
    {
        label: "X",
        link: "https://x.com/",
    },
    {
        label: "IG",
        link: "https://x.com/",
    },
    {
        label: "FB",
        link: "https://x.com/",
    },
    {
        label: "IN",
        link: "https://x.com/",
    },
];
const state = reactive({
    fullname: undefined,
    email: undefined,
    phone: undefined,
    company: undefined,
    message: undefined,
});
const email = ref("example@example.com");
const phone = ref("123-456-7890");
const address = ref("123 Main St, Anytown, USA");
const toast = useToast();

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.fullname)
        errors.push({ name: "fullname", message: "Field required" });
    if (!state.email) errors.push({ name: "email", message: "Field required" });
    if (!state.phone) errors.push({ name: "phone", message: "Field required" });
    if (!state.company)
        errors.push({ name: "company", message: "Field required" });
    if (!state.message)
        errors.push({ name: "message", message: "Field required" });
    return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
    toast.add({
        title: "Done!",
        description: "The message has been submitted",
        color: "success",
    });
    state.fullname = undefined;
    state.email = undefined;
    state.phone = undefined;
    state.company = undefined;
    state.message = undefined;
}
</script>