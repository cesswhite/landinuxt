<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12 px-4">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-4xl font-semibold text-dark-900 dark:text-dark-100">
                    Frequently Asked Questions
                </h1>
            </div>
            <div class="flex flex-col gap-y-4 mt-12">
                <template v-for="(faq, index) in faqs" :key="index">
                    <div class="w-full">
                        <UCollapsible class="flex flex-col gap-2" :defaultOpen="faq.open">
                            <UButton @click="faq.open = !faq.open"
                                class="group cursor-pointer flex items-center justify-between pb-2 border-b border-dark-200 rounded-none"
                                :label="faq.question" color="neutral" variant="link" block size="xl">
                                <template #trailing>
                                    <UIcon :name="faq.open ? 'i-heroicons-minus' : 'i-heroicons-plus'" />
                                </template>
                            </UButton>
                            <template #content>
                                <p class="w-full relative px-4 text-dark-900/50 dark:text-dark-50/50">
                                    {{ faq.answer }}
                                </p>
                            </template>
                        </UCollapsible>
                    </div>
                </template>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const faqs = ref([
    { question: 'What services do you offer?', answer: 'We offer a variety of services including...', open: true },
    { question: 'How can I contact support?', answer: 'You can contact support via...', open: false },
    { question: 'What is your refund policy?', answer: 'Our refund policy is...', open: false },
    { question: 'Can I cancel my subscription?', answer: 'Yes, you can cancel your subscription at any time...', open: false },
    { question: 'How do I track my order?', answer: 'You can track your order through our website or by contacting support...', open: false },
    { question: 'Do you offer any discounts?', answer: 'Yes, we offer various discounts and promotions...', open: false },
]);
</script>