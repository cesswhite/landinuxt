<template>
  <UDropdownMenu :items="items">
    <UButton aria-label="button to switch theme dark to light" variant="link" color="primary" size="lg"
      icon="i-clarity-color-palette-solid" />
    <template #colors>
      <div class="relative z-40 grid w-full grid-cols-5 gap-2">
        <template v-for="(color, index) in primaryColors" :key="index">
          <div class="col-span-1 flex items-center justify-center">
            <UButton variant="link" @click.stop.prevent="setPrimaryColor(color)">
              <span class="inline-block size-8 rounded-full"
                :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`" :style="{
                  '--color-light': `var(--color-${color}-400)`,
                  '--color-dark': `var(--color-${color}-500)`
                }" />
            </UButton>
          </div>
        </template>
      </div>
    </template>
    <template #gray>
      <div class="relative z-40 grid w-full grid-cols-5 gap-2">
        <template v-for="(color, index) in neutralColors" :key="index">
          <div class="col-span-1 flex items-center justify-center">
            <UButton variant="link" square @click.stop.prevent="setNeutralColor(color)">
              <span class="inline-block size-8 rounded-full"
                :class="`bg-[var(--color-light)] dark:bg-[var(--color-dark)]`" :style="{
                  '--color-light': `var(--color-${color}-400)`,
                  '--color-dark': `var(--color-${color}-500)`
                }" />
            </UButton>
          </div>
        </template>
      </div>
    </template>
  </UDropdownMenu>
</template>

<script setup lang="ts">
const items = [
  [
    {
      label: "",
      slot: "colors",
    },
    {
      label: "",
      slot: "gray",
    },
  ],
];


const primaryColors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']

const neutralColors = ['slate', 'gray', 'zinc', 'neutral', 'stone']


const appConfig = useAppConfig();


onMounted(() => {
  const primaryColor = localStorage.getItem("nuxt-ui-primary");
  const neutralColor = localStorage.getItem("nuxt-ui-neutral");

  if (primaryColor) {
    appConfig.ui.colors.primary = primaryColor;
  }

  if (neutralColor) {
    appConfig.ui.colors.neutral = neutralColor;
  }
});


async function setPrimaryColor(color: string) {
  appConfig.ui.colors.primary = color;
  window.localStorage.setItem('nuxt-ui-primary', appConfig.ui.colors.primary)
}

async function setNeutralColor(color: string) {
  appConfig.ui.colors.neutral = color;
  window.localStorage.setItem('nuxt-ui-neutral', appConfig.ui.colors.neutral)
}
</script>
