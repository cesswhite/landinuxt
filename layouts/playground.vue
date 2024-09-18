<template>
  <div class="relative h-auto min-h-dvh w-full bg-gray-50 dark:bg-gray-950">
    <div class="fixed right-0 top-2 z-50 w-auto">
      <AppSwitchPrimaryColor />
      <AppSwitchMode />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
