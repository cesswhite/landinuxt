<template>
  <div class="flex w-full h-full">
    <USidebar v-model:open="sidebarOpen" collapsible="icon" rail :ui="{
      container:
        'fixed bottom-0 p-2 left-0 z-10 hidden h-full w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear lg:flex',
      inner:
        'size-full max-h-full ? rounded-xl',
      body: 'min-h-0 gap-3 overflow-y-auto py-3',
      header: 'min-h-12 shrink-0',
      footer: 'shrink-0',
    }">
      <template #header>
        <div class="w-full">
          <NuxtLink to="/" class="flex w-full h-8 items-center justify-start gap-x-2">
            <div class="size-8">
              <AppLogo />
            </div>
            <template v-if="sidebarOpen">
              <div class="h-5">
                <AppName />
              </div>
            </template>
          </NuxtLink>
        </div>
      </template>

      <template #default>
        <div class="flex min-h-0 flex-1 flex-col gap-3">
          <!--           <UInput v-model="search" placeholder="Search" icon="i-lucide-search" size="sm" class="w-full shrink-0" /> -->
          <UNavigationMenu :items="navItems" orientation="vertical" class="min-h-0 min-w-0 flex-1 overflow-y-auto"
            :ui="{ root: 'min-h-0', link: 'p-1.5 overflow-hidden' }" />
        </div>
      </template>

      <template #footer>
        <UButton to="/contribution" block trailing-icon="i-lucide-arrow-right" color="neutral" variant="subtle"
          label="Contribution" class="cursor-pointer" />
      </template>
    </USidebar>

    <div class="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden bg-dark-50 dark:bg-dark-950 h-full p-2">
      <div class="flex h-12 shrink-0 items-center gap-2 border-b border-default px-3 lg:px-4">
        <UButton icon="i-lucide-panel-left" color="neutral" variant="ghost" square class="cursor-pointer"
          aria-label="Toggle sidebar" @click="sidebarOpen = !sidebarOpen" />
      </div>

      <div class="h-screen flex-1 overflow-y-auto p-2 bg-dark-50 dark:bg-dark-950">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import type { Elements } from "../../types/index";

const config = useRuntimeConfig();
const route = useRoute();

const sidebarOpen = ref(true);

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
