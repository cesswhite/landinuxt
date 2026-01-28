<template>
  <NuxtLayout name="playground">
    <div
      class="relative flex w-full min-h-screen overflow-x-auto overflow-y-hidden gap-x-4 md:gap-x-12 snap-x snap-mandatory overscroll-x-auto touch-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 md:px-12">
      <template v-for="(item, idx) in items" :key="idx">
        <div class="shrink-0 snap-center flex items-center justify-center">
          <div
            class="shrink-0 w-96 md:w-[640px] xl:w-[1200px] relative flex flex-col items-center justify-center overflow-hidden user-select-none rounded-4xl flex-none h-[520px] md:h-[640px] xl:h-[720px] 2xl:h-[860px]">
            <div
              class="w-full absolute bottom-0 left-0 z-20 bg-linear-to-t h-96 from-dark-950/20 to-transparent px-4 2xl:px-0">
              <div class="absolute top-0 left-0 size-full mask-t-from-15% backdrop-blur-xl" />
            </div>
            <NuxtImg :src="item.image" :alt="item.alt" width="1200" height="520" sizes="1200px" format="webp"
              class="size-full object-cover object-center center-center z-10" />
            <p
              class="absolute z-30 bottom-0 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center w-full text-dark-50 py-6 md:py-12 lg:py-8 xl:py-12">
              {{ item.text }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const items = [
  {
    text: "History you can feel.",
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?q=80&w=1734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Ancient Mexican ruins',
  },
  {
    text: "City. Flavor. Life.",
    image: 'https://images.unsplash.com/photo-1547995886-6dc09384c6e6?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mexican food experience',
  },
  {
    text: "Welcome to Mexico.",
    image: 'https://images.unsplash.com/photo-1580934738416-ad531f2920f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mexican festival celebration',
  },
  {
    text: "Deep roots. New light.",
    image: 'https://images.unsplash.com/photo-1534312663388-244b6be22824?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Adventure in Mexico',
  },
  {
    text: "Walk. Discover. Connect.",
    image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mexico landscape view',
  },
  {
    text: "Desert air. Pure thrill.",
    image: 'https://images.unsplash.com/photo-1465256410760-10640339c72c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Riviera Maya beach',
  },
  {
    text: "Culture. Unfiltered.",
    image: 'https://images.unsplash.com/photo-1521216774850-01bc1c5fe0da?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Mexico City cultural scene',
  },
]
</script>
