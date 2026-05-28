<template>
    <div class="relative w-full py-24 bg-dark-50 dark:bg-dark-950">
        <UContainer>
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-full md:col-span-5 flex flex-col items-start justify-start gap-4">
                    <h2 class="text-dark-950 dark:text-dark-50 text-4xl font-bold tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p class="text-dark-950/60 dark:text-dark-50/60 w-full text-lg md:text-xl">
                        Find answers to common questions about our products, services, and policies to help you make
                        informed
                        decisions.
                    </p>
                </div>
                <div class="col-span-full md:col-span-7 flex flex-col gap-4">
                    <template v-for="(faq, index) in faqs" :key="index">
                        <div class="w-full">
                            <UCollapsible v-model:open="faq.open">
                                <UButton
                                    class="group flex cursor-pointer items-center justify-between rounded-md py-5 text-lg"
                                    :label="faq.question" color="primary" variant="soft" block size="xl">
                                    <template #trailing>
                                        <UIcon :name="faq.open ? 'i-lucide-minus' : 'i-lucide-plus'" />
                                    </template>
                                </UButton>
                                <template #content>
                                    <p class="text-dark-950/60 dark:text-dark-50/60 text-lg relative w-full py-4 px-3">
                                        {{ faq.answer }}
                                    </p>
                                </template>
                            </UCollapsible>
                        </div>
                    </template>
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
// Replace: FAQ questions/answers with your product copy.
const faqs = ref([
    {
        question: "What services do you offer?",
        answer: "We offer a variety of services including consulting, design, and development tailored to your goals.",
        open: true,
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via email, chat, or the contact form on our website.",
        open: false,
    },
    {
        question: "What is your refund policy?",
        answer: "Our refund policy depends on your plan. Review your terms or contact support for details.",
        open: false,
    },
    {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time from your account settings.",
        open: false,
    },
    {
        question: "How do I track my order?",
        answer: "You can track your order from your account dashboard or using the tracking link in your confirmation email.",
        open: false,
    },
    {
        question: "Do you offer any discounts?",
        answer: "We run seasonal promotions and partner discounts. Subscribe to our newsletter for updates.",
        open: false,
    },
]);
</script>
