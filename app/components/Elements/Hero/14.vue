<template>
    <div class="w-full h-auto relative bg-dark-50 dark:bg-dark-950 flex items-center justify-center overflow-x-hidden">
        <UCarousel v-slot="{ item }" loop fade :autoplay="{ delay: 5000 }" :items="images"
            :ui="{ container: 'h-full', item: 'basis-full h-dvh ?' }">
            <NuxtImg class="w-full h-full object-cover object-center" :src="item" height="1024" width="1920"
                loading="lazy" alt="my-hero-background" :placeholder="[50, 25, 75, 5]" format="webp" />
        </UCarousel>
        <div class="absolute mx-auto">
            <UContainer>
                <h1 class="text-dark-50 text-6xl text-center font-medium tracking-tighter leading-12">
                    Experience Luxury <br>
                    In All Its Glory
                </h1>
                <div class="mt-32">
                    <div
                        class="p-4 w-full rounded-full bg-dark-50/10 dark:bg-dark-950/50 backdrop-blur-sm  grid grid-cols-12 gap-4">
                        <div class="col-span-3">
                            <USelect v-model="hotel" size="lg" icon="i-lucide-hotel" :items="items_hotel" :ui="{
                                leadingIcon: 'shrink-0 text-dark-50/80',
                                content: 'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50'
                            }" class="w-full rounded-full bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70" />
                        </div>
                        <div class="col-span-3">
                            <USelect v-model="city" size="lg" icon="i-lucide-hotel" :items="items_city" :ui="{
                                leadingIcon: 'shrink-0 text-dark-50/80',
                                content: 'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50'
                            }" class="w-full rounded-full bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70" />
                        </div>
                        <div class="col-span-3">
                            <USelect v-model="location" size="lg" icon="i-lucide-hotel" :items="items_location" :ui="{
                                leadingIcon: 'shrink-0 text-dark-50/80',
                                content: 'bg-dark-50/40 ring-dark-50/40 backdrop-blur-sm dark:bg-dark-950/50 dark:hover:bg-dark-950/70 dark:ring-dark-950/50'
                            }" class="w-full rounded-full bg-dark-50/20 hover:bg-dark-50/40 ring-dark-50/20 dark:ring-dark-950/50 dark:bg-dark-950/50 dark:hover:bg-dark-950/70" />
                        </div>
                        <div class="col-span-3">
                            <UButton size="lg" block class="rounded-full">
                                Find property
                            </UButton>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
const items_hotel = ref(['Hilton', 'Marriott', 'Hyatt', 'Ritz-Carlton']);
const hotel = ref(items_hotel.value[0]);

const items_city = ref(['New York', 'Los Angeles', 'Chicago', 'Miami']);
const city = ref(items_city.value[0]);

const items_location = ref(['Downtown', 'Airport', 'Suburbs', 'Beachfront']);
const location = ref(items_location.value[0]);

const images = ref([
    'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
])
</script>