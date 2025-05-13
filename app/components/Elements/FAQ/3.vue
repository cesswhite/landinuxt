<template>
    <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-12 px-4">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-4xl font-semibold text-dark-900 dark:text-dark-100">
                    Frequently Asked Questions
                </h1>
                <p class="text-primary-950/60 dark:text-primary-50/50 mt-2 w-full text-left text-lg 2xl:text-xl">
                    Explore answers to your most pressing questions about our services
                </p>
            </div>
            <div class="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-8 mt-12 w-full">
                <template v-for="(faq, index) in faqs" :key="index">
                    <div class="col-span-full md:col-span-4">
                        <span class="text-base font-semibold text-dark-900 dark:text-dark-50">{{ faq.question }}</span>
                        <p class="mt-2 text-base text-dark-900/60 dark:text-dark-50/60">{{ faq.answer }}</p>
                    </div>
                </template>
            </div>
        </UContainer>
    </div>
</template>

<script setup lang="ts">
const faqs = ref([
    { question: 'What services do you offer?', answer: 'We offer a variety of services including web development, digital marketing, and cybersecurity solutions to cater to diverse business needs.', open: true },
    { question: 'How can I contact support?', answer: 'You can contact support via email, phone, or through our website\'s contact form. Our support team is available 24/7 to assist you with any inquiries or issues.', open: false },
    { question: 'What is your refund policy?', answer: 'Our refund policy is designed to ensure customer satisfaction. If you are not satisfied with our services, you can request a refund within a specified timeframe as outlined in our terms and conditions.', open: false },
    { question: 'Can I cancel my subscription?', answer: 'Yes, you can cancel your subscription at any time by logging into your account and following the cancellation process. Please note that cancellation policies may vary depending on the subscription plan you have chosen.', open: false },
    { question: 'How do I track my order?', answer: 'You can track your order through our website or by contacting support directly. We provide regular updates on order status to ensure you are informed throughout the delivery process.', open: false },
    { question: 'Do you offer any discounts?', answer: 'Yes, we offer various discounts and promotions to our customers. These may include seasonal discounts, loyalty rewards, or special offers for new customers. Please check our website regularly for any available discounts.', open: false },
]);
</script>