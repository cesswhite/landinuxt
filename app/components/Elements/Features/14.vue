<template>
    <section id="features" class="w-full h-auto lg:h-[calc(100dvh*1.5)] xl:h-[calc(100dvh*2.5)] relative py-24">
        <div class="absolute top-0 left-0 w-full h-full">
            <NuxtImg
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lifestyle photoshoot with natural light" width="100%" height="100dvh" loading="lazy"
                class="absolute inset-0 w-full h-full object-cover object-center" format="webp" quality="100" />
        </div>
        <div class="w-full text-center mx-auto relative z-10">
            <h1 class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center w-full text-dark-50">
                Photoshoots, made effortless.
            </h1>
            <p class="text-2xl md:text-3xl lg:text-4xl text-center text-dark-50/70 w-4/5! lg:w-1/2 mt-2 mx-auto">
                Book a session. Show up. Get stunning photos.
            </p>
        </div>

        <div class="relative mt-96 lg:mt-0 lg:absolute lg:bottom-36 left-0 w-full">
            <div class="max-w-7xl mx-auto">
                <div
                    class="w-full sm:w-4/5 md:w-full h-full grid grid-cols-12 gap-y-12 px-4 md:gap-x-12 mx-auto 2xl:px-0">
                    <template v-for="(feature, index) in features" :key="index">
                        <div v-motion-fade-visible class="col-span-full md:col-span-6 xl:col-span-4">
                            <UIcon :name="feature.icon" class="text-dark-50 text-3xl" />
                            <p class="text-lg text-dark-50/95 w-full max-w-3xl mx-auto text-left font-medium">
                                <span class="text-dark-50 inline-block font-bold">
                                    {{ feature.title }}
                                </span>
                                {{ feature.description }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
interface Feature {
    icon: string
    title: string
    description: string
}

const features: Feature[] = [
    {
        icon: 'i-mdi-camera-outline',
        title: 'Look your best, naturally.',
        description: 'Guided posing and flattering light — so your photos feel like you, on your best day.',
    },
    {
        icon: 'i-mdi-map-marker-radius-outline',
        title: 'Studio or on location.',
        description: 'City streets, beaches, cafés, or your space — we shoot wherever your story looks right.',
    },
    {
        icon: 'i-mdi-tune-variant',
        title: 'Styling that clicks.',
        description: 'Outfit guidance and quick touch-ups — small details that make every frame feel intentional.'
    },
    {
        icon: 'i-mdi-share-variant',
        title: 'Ready to share.',
        description: 'Social-sized exports and high-res files — perfect for Instagram, portfolios, and press kits.',
    },
    {
        icon: 'i-mdi-palette-outline',
        title: 'A style for every vibe.',
        description: 'Headshots, lifestyle, couples, brands — clean, modern edits that match your mood.',
    },
    {
        icon: 'i-mdi-lightning-bolt-outline',
        title: 'Fast turnaround.',
        description: 'Get your gallery quickly, pick favorites, and download in one place — simple from start to finish.',
    }
]
</script>