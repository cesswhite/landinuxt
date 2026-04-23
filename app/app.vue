<template>
  <!-- <AppFullLoading /> -->
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup>
const colorMode = useColorMode();

const updateBodyBackground = () => {
  if (import.meta.client) {
    const root = document.documentElement;
    if (colorMode.value === 'dark') {
      const darkColor = getComputedStyle(root).getPropertyValue('--color-dark-950').trim();
      document.body.style.backgroundColor = darkColor || '#000000';
    } else {
      const lightColor = getComputedStyle(root).getPropertyValue('--color-dark-50').trim();
      document.body.style.backgroundColor = lightColor || '#ffffff';
    }
  }
};

// Watch for color mode changes and update body background color
watch(() => colorMode.value, () => {
  updateBodyBackground();
}, { immediate: true });

// Set initial background color on mount
onMounted(() => {
  updateBodyBackground();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 200ms cubic-bezier(0.19, 1, 0.22, 1),
    transform 200ms cubic-bezier(0.19, 1, 0.22, 1);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(4px);
}

@media (prefers-reduced-motion: reduce) {

  .page-enter-active,
  .page-leave-active {
    transition: none;
  }

  .page-leave-to,
  .page-enter-from {
    opacity: 1;
    transform: none;
  }
}
</style>