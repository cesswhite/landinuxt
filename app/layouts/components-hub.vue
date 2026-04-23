<template>
  <div class="flex w-full h-full">
    <USidebar v-model:open="sidebarOpen" collapsible="icon" variant="inset" :ui="componentsHubSidebarUi">
      <template #header="{ open: isOpen }">
        <div class="flex items-center justify-between w-full px-2" :class="{ 'flex-col gap-y-4': !isOpen }">
          <NuxtLink to="/" class="flex w-full h-auto items-center justify-start gap-x-2 min-w-0">
            <div class="size-8 shrink-0">
              <AppLogo />
            </div>
            <template v-if="isOpen">
              <div class="h-5 min-w-0">
                <AppName />
              </div>
            </template>
          </NuxtLink>
          <div v-motion class="inline-flex shrink-0 mt-1" :tapped="toggleButtonTapped">
            <UButton icon="i-lucide-panel-left" :size="isOpen ? 'sm' : 'md'" color="neutral" variant="ghost" square
              class="cursor-pointer" aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
          </div>
        </div>
      </template>

      <template #default="{ open: isOpen }">
        <div v-if="isOpen" class="flex min-h-0 flex-1 flex-col gap-3 mt-8">
          <UNavigationMenu :items="navItems" orientation="vertical" class="min-h-0 min-w-0 flex-1 overflow-y-auto"
            :ui="{ root: 'min-h-0', link: 'p-1.5 overflow-hidden' }" />
        </div>
      </template>

      <template #footer>
        <div class="px-2">
          <UTooltip text="Go back to the previous page">
            <UButton block square leading-icon="i-lucide-arrow-left" color="neutral" variant="subtle"
              class="cursor-pointer rounded-xl" @click="router.back()" />
          </UTooltip>
        </div>
      </template>
    </USidebar>

    <!--CONTENT CONTAINER-->
    <div
      class="flex min-h-0 min-w-0 flex-1 flex-col overflow-y-scroll overflow-x-hidden bg-white dark:bg-black p-2 relative h-screen">
      <!--HEADER CONTAINER-->
      <div
        class="sticky top-0 left-0 h-12 w-full z-10 shrink-0 backdrop-blur-2xl bg-dark-50/95 dark:bg-dark-900/95 rounded-2xl ring-1 ring-dark-950/10 shadow shadow-dark-950/10 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black">
        <div class="flex items-center justify-between h-full px-2">

          <AppSwitchMode />
        </div>
      </div>

      <!--CONTENT/BODY-->
      <div class="flex-1 w-full h-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePreferredReducedMotion } from "@vueuse/core";
import type { NavigationMenuItem } from "@nuxt/ui";
import type { Elements } from "../../types/index";

const config = useRuntimeConfig();
const route = useRoute();
const router = useRouter();
const reduceMotion = usePreferredReducedMotion();

const sidebarOpen = ref(true);

const componentsHubSidebarUi = {
  gap: "relative w-(--sidebar-width) bg-transparent transition-none",
  container:
    "fixed bottom-0 p-2 left-0 z-10 hidden h-full w-(--sidebar-width) transition-none lg:flex bg-white dark:bg-black",
  inner:
    "size-full py-2 max-h-full rounded-2xl bg-dark-50 dark:bg-dark-900 ring-1 shadow-md ring-dark-950/10 shadow-dark-950/10 dark:ring-dark-50/15 dark:shadow-2xs dark:shadow-black ",
  body: "min-h-0 overflow-y-auto p-0",
  header: "shrink-0 p-0 min-h-0",
  footer: "shrink-0 p-0",
} as const;

const toggleButtonTapped = computed(() => {
  if (reduceMotion.value) {
    return { scale: 1 };
  }
  return {
    scale: 0.96,
    transition: {
      duration: 100,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  };
});

const categories = await fetchElementsCategories();

const search = ref("");

const filteredCategories = computed(() => {
  const needle = search.value.trim().toLowerCase();
  if (!needle) {
    return categories;
  }
  return categories.filter((c) => {
    const label = categoryNavLabel(c.name).toLowerCase();
    return c.name.toLowerCase().includes(needle) || label.includes(needle);
  });
});

function categoryNavLabel(name: Elements): string {
  if (name === "cta") {
    return "CTA";
  }
  if (name === "faq") {
    return "FAQ";
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const navItems = computed<NavigationMenuItem[]>(() =>
  filteredCategories.value.map((c) => ({
    label: categoryNavLabel(c.name),
    to: `/components/${c.name}`,
    badge: String(c.total).padStart(2, "0"),
    active: route.path === `/components/${c.name}`,
  })),
);

useSeoMeta({
  title:
    "All Nuxt Landing Components | Hero, Features, Pricing, FAQ, CTA, Headers, Footers | LandiNuxt",
  description:
    "Browse 100+ pre-built Nuxt landing page components. Hero sections, features, pricing tables, FAQ sections, CTAs, headers, footers, testimonials, contact forms, and more. Copy-paste ready, fully compatible with Nuxt UI v4.",
  ogTitle: "All Nuxt Landing Components | LandiNuxt",
  ogDescription:
    "Browse 100+ pre-built Nuxt landing page components. Hero, features, pricing, FAQ, CTA, headers, footers, and more. Copy-paste ready for Nuxt UI v4.",
  ogImage: "/og-landinuxt.jpg",
  ogUrl: `${config.public.siteUrl || "https://www.landinuxt.com"}${route.path}`,
  twitterCard: "summary_large_image",
  twitterTitle: "All Nuxt Landing Components | LandiNuxt",
  twitterDescription:
    "Browse 100+ pre-built Nuxt landing page components. Copy-paste ready for Nuxt UI v4.",
  twitterImage: "/og-landinuxt.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>
