<template>
    <footer class="w-full relative bg-dark-50 dark:bg-dark-950">
        <div class="flex flex-col">
            <div
                class="border-b border-dark-950/10 dark:border-dark-50/10 flex flex-col gap-y-8 lg:flex-row lg:items-center lg:justify-between pb-12 px-4 pt-4">
                <div class="flex flex-col items-start gap-y-8">
                    <div class="h-10 w-auto">
                        <NuxtImg
                            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
                            class="size-full object-contain object-center" loading="lazy"
                            alt="Your company logo" :placeholder="[50, 25, 75, 5]" format="webp" />
                    </div>
                    <div class="flex flex-wrap gap-x-4 gap-y-2">
                        <template v-for="(nav, index) in navigation" :key="index">
                            <UButton :to="nav.link" target="_blank" variant="link" color="neutral"
                                class="cursor-pointer p-0">
                                {{ nav.label }}
                            </UButton>
                        </template>

                    </div>
                </div>
                <div class="relative w-full lg:w-auto">
                    <!-- Demo newsletter UI — wire up UForm + API or remove before production -->
                    <div class="flex flex-col sm:flex-row sm:items-end gap-4 w-full max-w-md lg:max-w-lg">
                        <UFormField label="Join to our newsletter" name="email" size="lg" class="w-full min-w-0 flex-1">
                            <UInput v-model="state.email" placeholder="Enter your email" class="w-full" />
                        </UFormField>
                        <UTooltip text="Subscribe to newsletter">
                            <UButton type="button" color="primary" variant="solid" :disabled="!state.email" size="lg"
                                class="cursor-pointer w-full sm:w-auto shrink-0">
                                Subscribe
                            </UButton>
                        </UTooltip>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between pt-12 px-4 pb-4 w-full">
                <div class="w-full">
                    <UButton type="button" variant="link" color="neutral" class="p-0" aria-readonly="true">
                        ©LandiNuxt is a Open Source Project by Eco Development Studios
                    </UButton>
                </div>
                <div class="h-auto flex flex-wrap gap-x-4 gap-y-2 w-full sm:justify-end">
                    <template v-for="(nav, index) in bottom_navigation" :key="index">
                        <UButton :to="nav.link" target="_blank" variant="link" color="neutral"
                            class="cursor-pointer p-0">
                            {{ nav.label }}
                        </UButton>
                    </template>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// Replace: logo URL/alt, navigation links, newsletter handler, copyright text.
const state = reactive({
    email: undefined,
})

const navigation = [
    {
        label: "Development",
        link: "#",
    },
    {
        label: "Design",
        link: "#",
    },
    {
        label: "Mobile Apps",
        link: "#",
    },
    {
        label: "Imagene Data",
        link: "#",
    },
];

const bottom_navigation = [
    {
        label: "About",
        link: "#",
    },
    {
        label: "Privacy Policy",
        link: "#",
    },
    {
        label: "Contact",
        link: "#",
    },
    {
        label: "Website",
        link: "#",
    },
];
</script>
