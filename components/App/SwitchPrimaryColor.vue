<template>
  <UDropdownMenu :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }">
    <UButton aria-label="button to switch theme dark to light" variant="link" color="primary" size="lg"
      icon="i-clarity-color-palette-solid" />
    <template #colors>
      <div class="relative z-40 grid w-full grid-cols-5 gap-2">
        <template v-for="(color, index) in primaryColors" :key="index">
          <div class="col-span-1 flex items-center justify-center">
            <UButton color="neutral" variant="link" square @click.stop.prevent="setPrimaryColor(color)">
              <span class="inline-block size-6 rounded-full" :class="`bg-[--color-light] dark:bg-[--color-dark]`"
                :style="{
                  '--color-light': `var(--color-${color}-500)`,
                  '--color-dark': `var(--color-${color}-400)`
                }" />
            </UButton>
          </div>
        </template>
      </div>
    </template>
    <template #gray>
      <div class="relative z-40 grid w-full grid-cols-5 gap-2">
        <template v-for="(color, index) in grayColors" :key="index">
          <div class="col-span-1 flex items-center justify-center">
            <UButton color="neutral" variant="link" square @click.stop.prevent="setGrayColor(color)">
              <span class="inline-block size-6 rounded-full" :class="`bg-[--color-light] dark:bg-[--color-dark]`"
                :style="{
                  '--color-light': `var(--color-${color}-500)`,
                  '--color-dark': `var(--color-${color}-400)`
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

const grayColors = ['slate', 'cool', 'zinc', 'neutral', 'stone']


onMounted(() => {
  const primaryColor = localStorage.getItem("primaryColor");
  const grayColor = localStorage.getItem("grayColor");
  if (primaryColor) {
    appConfig.ui.colors.primary = primaryColor;
  }

  if (grayColor) {
    appConfig.ui.colors.gray = grayColor;
  }
});

const appConfig = useAppConfig();

const getPrimaryColor = (color: string) => {
  return `bg-${color}-500`;
};

async function setPrimaryColor(color: string) {
  appConfig.ui.colors.primary = color;
  localStorage.setItem("primaryColor", color);
}

const getGrayColor = (color: string) => {
  return `bg-${color}-500`;
};

async function setGrayColor(color: string) {
  appConfig.ui.colors.gray = color;
  localStorage.setItem("grayColor", color);
}
</script>
