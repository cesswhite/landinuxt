<template>
    <div id="landing-one" class="w-full relative h-auto">
        <!-- HEADER -->
        <header
            class="relative top-0 z-50 flex w-full items-center justify-between bg-dark-50/10 backdrop-blur-sm py-4 px-4 dark:bg-dark-950/10">
            <div class="size-8">
                <NuxtImg src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
                    class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
                    :placeholder="[50, 25, 75, 5]" format="webp" />
            </div>
            <nav class="hidden items-center justify-start md:flex">
                <UButton variant="link" color="neutral" size="lg" to="#"> Home </UButton>
                <UButton variant="link" color="neutral" size="lg" to="#"> About </UButton>
                <UButton variant="link" color="neutral" size="lg" to="#">
                    Services
                </UButton>
                <UButton variant="link" color="neutral" size="lg" to="#">
                    Contact
                </UButton>
                <UButton variant="link" color="neutral" size="lg" to="#"> Blog </UButton>
            </nav>
            <USlideover title="Menu" close-icon="i-heroicons-x-mark">
                <div class="inline-block md:hidden">
                    <UButton icon="i-heroicons-bars-3" variant="link" color="neutral" size="lg" />
                </div>
                <template #body>
                    <nav class="flex w-full flex-col">
                        <UButton block variant="link" color="neutral" size="lg" to="#">
                            Home
                        </UButton>
                        <UButton block variant="link" color="neutral" size="lg" to="#">
                            About
                        </UButton>
                        <UButton block variant="link" color="neutral" size="lg" to="#">
                            Services
                        </UButton>
                        <UButton block variant="link" color="neutral" size="lg" to="#">
                            Contact
                        </UButton>
                        <UButton block variant="link" color="neutral" size="lg" to="#">
                            Blog
                        </UButton>
                    </nav>
                </template>
            </USlideover>
        </header>
        <!-- HERO -->
        <div
            class="relative flex h-full min-h-dvh w-full flex-col items-center justify-center bg-dark-50 pt-32 dark:bg-dark-950">
            <div class="relative w-11/12 md:w-10/12">
                <div class="flex flex-col items-center justify-center">
                    <h1
                        class="mt-4 text-center font-sans text-8xl font-bold text-dark-900 sm:text-6xl md:text-9xl dark:text-white">
                        Explore. <br />
                        Amaze.
                    </h1>
                    <p
                        class="mt-4 w-full text-center text-lg leading-8 text-dark-900/60 sm:w-1/2 2xl:w-1/3 2xl:text-xl dark:text-dark-50/60">
                        Embark on an unforgettable adventure safari with our expert guides
                    </p>
                    <div class="mt-8 flex flex-col gap-4 md:flex-row">
                        <UButton variant="solid" color="neutral" to="#" size="lg" class="px-8">
                            Book a tour now
                        </UButton>
                        <UButton variant="link" color="neutral" to="#" size="lg" class="px-8">
                            Discover more
                        </UButton>
                    </div>
                </div>
            </div>
            <div class="mt-12 flex w-full flex-wrap items-center justify-center gap-4">
                <template v-for="icon in icons">
                    <div class="flex size-auto items-center justify-center p-2">
                        <UIcon :name="icon" class="mx-auto size-10 text-dark-500/50 dark:text-dark-50/20" />
                    </div>
                </template>
            </div>
            <div class="xl:max-w-7xl relative z-10 mt-12 mx-auto w-full p-4 md:p-2">
                <NuxtImg class="h-[520px] w-full object-cover object-center lg:h-[640px] 2xl:h-[720px]"
                    src="https://images.unsplash.com/photo-1580145575237-75fec2a0320b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    loading="lazy" alt="my-hero-background" :placeholder="[50, 25, 75, 5]" format="webp" />
            </div>
        </div>
        <!-- LOGOS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 pt-32">
            <UContainer>
                <h2 class="text-dark-950 dark:text-dark-50 text-center text-5xl font-semibold">
                    Our partners
                </h2>
                <p class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-center text-lg font-normal">
                    Explore the possibilities with us, trusted by over +5,000 companies
                </p>
                <div class="mt-12">
                    <UMarquee pause-on-hover>
                        <div class="flex items-center gap-x-8">
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="flex h-24 w-full items-center justify-center">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                        </div>
                    </UMarquee>
                </div>
            </UContainer>
        </div>
        <!-- FEATURES -->
        <div class="flex w-full flex-col gap-12 rounded-xl bg-dark-50 md:gap-24 dark:bg-dark-950 pt-32">
            <UContainer>
                <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                    <div class="flex w-full flex-col gap-2 md:w-1/2">
                        <UBadge variant="soft" class="bg-transparent text-center" size="lg">
                            Embark on a Wild Adventure
                        </UBadge>
                        <h1 class="text-7xl font-semibold text-dark-950 dark:text-dark-50">
                            Safari Tour Experience
                        </h1>
                    </div>
                    <div class="flex w-full items-center justify-start md:w-1/2">
                        <p class="font-base w-full text-dark-950/60 dark:text-dark-50/80">
                            Join us on an unforgettable safari tour, where you'll explore the
                            untamed wilderness and get up close with incredible wildlife.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col items-start justify-between gap-x-16 gap-y-8 md:flex-row mt-12">
                    <template v-for="image in images" :key="image.src">
                        <div class="flex flex-1 flex-col gap-2">
                            <div
                                class="flex h-96 w-full items-center justify-center rounded-md bg-dark-200/20 p-1 dark:bg-dark-800">
                                <NuxtImg :src="image.src" class="size-full rounded-sm object-cover object-center"
                                    loading="lazy" alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]"
                                    format="webp" />
                            </div>
                            <span class="text-2xl font-medium text-dark-950 md:text-4xl dark:text-dark-50">
                                {{ image.label }}
                            </span>
                            <p class="w-full text-base font-normal text-dark-950/60 dark:text-dark-50/60">
                                {{ image.description }}
                            </p>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- TESTIMONIALS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full pt-32">
            <div class="flex flex-col items-center justify-center gap-y-2">
                <UBadge variant="soft" class="bg-transparent px-4 text-center md:px-12" size="lg">
                    Trusted by Thousands Worldwide
                </UBadge>
                <h1 class="text-dark-900 dark:text-dark-100 text-center text-4xl font-semibold sm:text-4xl md:text-4xl">
                    See What Our Clients Have to Say
                </h1>
            </div>
            <UContainer>
                <div class="font-family-inter mt-8 grid grid-cols-12 gap-4 p-4 md:mt-24">
                    <template v-for="(col, index) in testimonials" :key="index">
                        <div class="col-span-full flex h-full flex-col gap-4 even:mt-4 md:col-span-4">
                            <template v-for="(testimonial, _index) in col" :key="_index">
                                <div
                                    class="border-dark-200 bg-dark-100 hover:bg-dark-200/70 dark:bg-dark-800/50 dark:border-dark-800 dark:hover:bg-dark-800/70 rounded-2xl border p-4 transition-all duration-300 ease-in-out">
                                    <p class="text-dark-950/80 dark:text-dark-50/60 text-base font-normal">
                                        {{ testimonial.text }}
                                    </p>
                                    <div class="mt-20">
                                        <span
                                            class="text-dark-950 dark:text-dark-50 inline-block w-full text-sm font-bold">{{
                                                testimonial.name }}</span>
                                        <span
                                            class="text-dark-950/60 dark:text-dark-50/60 inline-block w-full text-sm font-normal">{{
                                                testimonial.username }}</span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- FAQ -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 pt-32">
            <UContainer>
                <div class="flex flex-col items-center justify-center">
                    <UBadge variant="subtle" size="lg"> FAQ </UBadge>
                    <h1 class="text-dark-900 dark:text-dark-100 mt-2 text-center text-4xl font-semibold">
                        Frequently Asked Questions
                    </h1>
                    <p
                        class="text-primary-950/60 dark:text-primary-50/50 mt-2 w-full text-center text-lg leading-8 sm:w-1/2 2xl:w-1/3 2xl:text-xl">
                        Explore answers to your most pressing questions about our services
                    </p>
                </div>
                <div class="mt-12 flex flex-col gap-y-4">
                    <template v-for="(faq, index) in faqs" :key="index">
                        <div class="mx-auto w-full md:max-w-xl">
                            <UCollapsible class="flex flex-col gap-2" :defaultOpen="faq.open">
                                <UButton class="group cursor-pointer" :label="faq.question" color="neutral"
                                    variant="soft" trailing-icon="i-lucide-chevron-down" :ui="{
                                        trailingIcon:
                                            'group-data-[state=open]:rotate-180 transition-transform duration-200',
                                    }" block size="xl" />
                                <template #content>
                                    <p class="text-dark-900/60 dark:text-dark-50/60 relative w-full px-4">
                                        {{ faq.answer }}
                                    </p>
                                </template>
                            </UCollapsible>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- CONTACT -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4">
            <UContainer>
                <div class="relative w-full py-24">
                    <h2 class="text-dark-900 dark:text-dark-50 text-center text-4xl font-bold">
                        We are here to help you
                    </h2>
                    <p class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-center text-lg font-normal">
                        Got questions or need assistance? Feel free to reach out to us. <br />
                        We're just a message away!
                    </p>
                    <div class="relative mt-12 w-full">
                        <UForm :validate="validate" :state="state_form" class="grid grid-cols-12 gap-4"
                            @submit="onSubmit">
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Name" name="fullname" size="lg">
                                    <UInput v-model="state_form.fullname" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Email" name="email" size="lg">
                                    <UInput v-model="state_form.email" type="email" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Phone" name="phone" size="lg">
                                    <UInput v-model="state_form.phone" type="tel" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full md:col-span-6">
                                <UFormField label="Company" name="company" size="lg">
                                    <UInput v-model="state_form.company" type="text" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-full">
                                <UFormField label="Message" name="message" size="lg">
                                    <UTextarea v-model="state_form.message" :rows="6" type="textarea" class="w-full" />
                                </UFormField>
                            </div>
                            <div class="col-span-6 col-start-7 flex justify-end">
                                <UButton block type="submit" size="lg" class="cursor-pointer">
                                    Send message
                                </UButton>
                            </div>
                        </UForm>
                    </div>
                </div>
            </UContainer>
        </div>
        <!-- CTA -->
        <div class="bg-dark-50 dark:bg-dark-950 pt-24">
            <UContainer>
                <div
                    class="from-primary-800 via-primary-500 to-primary-300 relative flex h-auto w-full flex-col items-start justify-between gap-y-4 rounded-xl bg-linear-to-tr p-8 lg:p-14 xl:flex-row xl:items-center xl:gap-y-0">
                    <div class="flex flex-col items-start justify-start gap-y-2">
                        <h1 class="text-dark-50 text-3xl font-bold">
                            Explore Components. <br />
                            Speed Up Your Development
                        </h1>
                        <p class="text-dark-50/70 w-full text-base font-medium lg:w-1/2">
                            Discover our collection of ready-to-use components, optimized with Nuxt
                            UI v4. Copy, paste, and customize easily to create effective landing
                            pages in minutes.
                        </p>
                    </div>
                    <UButton to="/components" trailing-icon="i-heroicons-arrow-right" variant="solid" size="xl"
                        class="bg-dark-50/90 hover:bg-dark-50 text-primary-500 px-6">
                        Connect
                    </UButton>
                </div>
            </UContainer>
        </div>
        <!-- FOOTER -->
        <footer class="relative w-full bg-dark-50 dark:bg-dark-950 pt-32">
            <UContainer>
                <div class="flex flex-col">
                    <div
                        class="flex items-center justify-between border-b border-dark-950/10 pt-4 px-4 pb-12 dark:border-dark-50/10">
                        <div class="flex flex-col items-start gap-y-8">
                            <div class="h-10 w-auto">
                                <NuxtImg
                                    src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
                                    class="size-full object-contain object-center" loading="lazy"
                                    alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" format="webp" />
                            </div>
                            <div class="flex gap-x-4">
                                <template v-for="(nav, index) in navigation" :key="index">
                                    <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                                        {{ nav.label }}
                                    </UButton>
                                </template>
                            </div>
                        </div>
                        <div class="relative">
                            <div class="flex items-end gap-x-4">
                                <UFormField label="Join to our newsletter" name="email" size="lg" class="w-96">
                                    <UInput v-model="state.email" placeholder="Enter your email" class="w-full" />
                                </UFormField>
                                <UTooltip text="Subscribe to newsletter">
                                    <UButton type="submit" color="primary" variant="solid" :disabled="!state.email"
                                        size="lg">
                                        Subscribe
                                    </UButton>
                                </UTooltip>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-full items-center justify-between pt-12 px-4 pb-4">
                        <div class="w-full">
                            <UButton type="button" variant="link" color="neutral" class="p-0" aria-readonly="true">
                                ©LandiNuxt is a Open Source Project by Eco Development Studios
                            </UButton>
                        </div>
                        <div class="flex h-auto w-full justify-end gap-x-4">
                            <template v-for="(nav, index) in bottom_navigation" :key="index">
                                <UButton :to="nav.link" target="_blank" variant="link" color="neutral" class="p-0">
                                    {{ nav.label }}
                                </UButton>
                            </template>
                        </div>
                    </div>
                </div>
            </UContainer>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const icons = [
    "i-simple-icons-adobeillustrator",
    "i-simple-icons-amazon",
    "i-simple-icons-google",
    "i-simple-icons-facebook",
    "i-simple-icons-vite",
    "i-simple-icons-nike",
    "i-simple-icons-apple",
    "i-simple-icons-microsoft",
    "i-simple-icons-twitter",
];
const images = [
    {
        src: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        label: "Dunes",
        description:
            "A breathtaking panorama of endless sand dunes stretching towards the horizon, bathed in the warm light of a vibrant blue sky.",
    },
    {
        src: "https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        label: "Cacti",
        description:
            "A majestic stand of towering cacti, set against a backdrop of crystal-clear blue skies and expansive desert landscapes that seem to stretch on forever.",
    },
    {
        src: "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        label: "Sunset",
        description:
            "A serene and peaceful sunset over the desert, casting a warm, golden orange glow over the landscape, as the day slowly gives way to the tranquility of night.",
    },
];
const testimonials = shallowRef([
    [
        {
            name: "Emily Johnson",
            username: "@emilyj",
            text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        },
        {
            name: "David Wilson",
            username: "@davidw",
            text: "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
        },
        {
            name: "Laura Fernández",
            username: "@laurafern",
            text: "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
        },
    ],
    [
        {
            name: "Laura Fernández",
            username: "@laurafern",
            text: "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
        },
        {
            name: "Emily Johnson",
            username: "@emilyj",
            text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        },
        {
            name: "David Wilson",
            username: "@davidw",
            text: "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
        },
    ],
    [
        {
            name: "David Wilson",
            username: "@davidw",
            text: "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
        },
        {
            name: "Laura Fernández",
            username: "@laurafern",
            text: "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
        },
        {
            name: "Emily Johnson",
            username: "@emilyj",
            text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        },
    ],
]);
const faqs = ref([
    {
        question: "What services do you offer?",
        answer: "We offer a variety of services including...",
        open: true,
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via...",
        open: false,
    },
    {
        question: "What is your refund policy?",
        answer: "Our refund policy is...",
        open: false,
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time...",
        open: false,
    },
    {
        question: "How do I track my order?",
        answer:
            "You can track your order through our website or by contacting support...",
        open: false,
    },
    {
        question: "Do you offer any discounts?",
        answer: "Yes, we offer various discounts and promotions...",
        open: false,
    },
]);
const state = reactive({
    email: undefined,
});
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
const state_form = reactive({
    fullname: undefined,
    email: undefined,
    phone: undefined,
    company: undefined,
    message: undefined,
});
const toast = useToast();

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.fullname)
        errors.push({ name: "fullname", message: "Field required" });
    if (!state.email) errors.push({ name: "email", message: "Field required" });
    if (!state.phone) errors.push({ name: "phone", message: "Field required" });
    if (!state.company)
        errors.push({ name: "company", message: "Field required" });
    if (!state.message)
        errors.push({ name: "message", message: "Field required" });
    return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
    toast.add({
        title: "Done!",
        description: "The message has been submitted",
        color: "success",
    });
    state_form.fullname = undefined;
    state_form.email = undefined;
    state_form.phone = undefined;
    state_form.company = undefined;
    state_form.message = undefined;
}
</script>
