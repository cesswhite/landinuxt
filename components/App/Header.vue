<template>
  <header class="fixed left-0 top-0 z-50 w-full bg-dark-50/70 dark:bg-dark-950/70 backdrop-blur-md">
    <div class="flex items-center justify-between px-4 py-2 relative z-10">
      <div class="flex size-8 items-center justify-center">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
      </div>
      <nav class="flex items-center justify-center">
        <UButton to="https://github.com/cesswhite/landingnuxt" target="_blank" icon="i-mdi-github" variant="link"
          color="primary" size="lg" />
        <AppSwitchPrimaryColor />
        <AppSwitchMode />
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
