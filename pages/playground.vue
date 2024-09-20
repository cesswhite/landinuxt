<template>
  <div class="relative flex h-dvh w-full bg-white dark:bg-black">
    <div class="relative z-10 flex h-full w-full">
      <div class="w-full md:w-1/2">
        <NuxtImg
          class="h-full w-full object-cover object-center saturate-150"
          src="https://images.unsplash.com/photo-1512103154942-f12b1bff1c36?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
      <div class="w-full md:w-1/2">
        <NuxtImg
          class="h-full w-full object-cover object-center saturate-150"
          src="https://images.unsplash.com/photo-1512102935621-443f9165ad73?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          loading="lazy"
          alt="my-photo-work"
          :placeholder="[50, 25, 75, 5]"
        />
      </div>
    </div>
    <div
      class="? absolute bottom-12 z-20 mx-auto flex w-full items-center justify-center"
    >
      <h1 class="w-1/2 text-center font-serif text-7xl font-normal">
        Unlock Your Modeling Potential
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "playground",
});
</script>
