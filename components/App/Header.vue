<template>
  <div
    class="dark:shadow-primary-900/5 shadow-primary-400/10 fixed left-0 top-0 z-50 w-full bg-gray-50/50 shadow-2xl backdrop-blur dark:bg-gray-950/50"
  >
    <div class="flex items-center justify-between px-4 py-2">
      <div class="flex size-12 items-center justify-center">Logo</div>
      <nav class="flex items-center justify-center">
        <AppSwitchPrimaryColor />
        <AppSwitchMode />
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
