<template>
  <div
    class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-44 lg:py-0 h-auto min-h-dvh flex items-center justify-center">
    <UContainer>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <template v-for="(image, index) in images" :key="index">
          <div class="group relative overflow-hidden rounded-xl cursor-pointer" @click="openLightbox(index)">
            <NuxtImg :src="image.src" :alt="image.alt"
              class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy"
              :placeholder="[50, 25, 75, 5]" format="webp" />
            <div
              class="absolute inset-0 bg-dark-950/0 group-hover:bg-dark-950/40 transition-colors duration-300 flex items-center justify-center">
              <UIcon name="i-heroicons-magnifying-glass-plus"
                class="text-dark-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 size-8" />
            </div>
          </div>
        </template>
      </div>
    </UContainer>
    <UModal v-model:open="isLightboxOpen" fullscreen :ui="{
      body: 'p-0 bg-transparent flex items-center justify-center',

    }">
      <template #content>
        <div class="relative w-full h-dvh flex items-center justify-center bg-dark-950">
          <UButton @click="isLightboxOpen = false" icon="i-heroicons-x-mark" variant="ghost" color="neutral"
            class="absolute right-2 top-2 z-10" />
          <NuxtImg v-if="currentImage" :src="currentImage.src" :alt="currentImage.alt"
            class="w-full h-full object-contain" format="webp" />
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup lang="ts">

const images = [
  {
    src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert landscape with sand dunes",
  },
  {
    src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cacti in desert",
  },
  {
    src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Ocean view",
  },
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Forest path",
  },
];

const isLightboxOpen = ref(false);
const currentIndex = ref(0);

const currentImage = computed(() => {
  return images[currentIndex.value];
});

function openLightbox(index: number) {
  currentIndex.value = index;
  isLightboxOpen.value = true;
}
</script>
