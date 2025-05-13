<template>
    <UContainer>
        <div class="relative w-full grid grid-cols-12 gap-8 py-24">
            <div class="col-span-full md:col-span-6">
                <div class="w-full flex h-auto flex-col items-start justify-between">
                    <div class="relative">
                        <h2 class="text-4xl font-semibold text-dark-900 dark:text-dark-50">
                            We are here to help you
                        </h2>
                        <p class="text-lg font-normal text-dark-900/60 dark:text-dark-50/60 mt-4">
                            Got questions or need assistance? Feel free to reach out to us. <br>
                            We're just a message away!
                        </p>
                        <div class="flex items-center justify-start w-full mt-8">
                            <div
                                class="size-8 flex items-center justify-center rounded-md bg-primary-500/20 dark:bg-primary-600/40">
                                <UIcon name="i-heroicons-envelope-solid"
                                    class="size-4 text-primary-900/80 dark:text-primary-50/60" />
                            </div>
                            <UButton :to="`mailto:${email}`" variant="link" color="neutral" size="xl">
                                {{ email }}
                            </UButton>
                        </div>
                        <div class="flex items-center justify-start w-full mt-2">
                            <div
                                class="size-8 flex items-center justify-center rounded-md bg-primary-500/20 dark:bg-primary-600/40">
                                <UIcon name="i-heroicons-phone-solid"
                                    class="size-4 text-primary-900/80 dark:text-primary-50/60" />
                            </div>
                            <UButton :to="`tel:${phone}`" variant="link" color="neutral" size="xl">
                                {{ phone }}
                            </UButton>
                        </div>
                        <div class="flex items-center justify-start w-full mt-2">
                            <div
                                class="size-8 flex items-center justify-center rounded-md bg-primary-500/20 dark:bg-primary-600/40">
                                <UIcon name="i-heroicons-map-pin-solid"
                                    class="size-4 text-primary-900/80 dark:text-primary-50/60" />
                            </div>
                            <UButton to="#" variant="link" color="neutral" size="xl">
                                {{ address }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-full md:col-span-6">
                <iframe class="w-full h-96 rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.5813962729862!2d-98.77224488818499!3d20.067969020004014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67b458ce9ad89ab7%3A0xc30b7153dd77af0c!2sEco%20Development%20Studios!5e0!3m2!1ses-419!2smx!4v1733365718622!5m2!1ses-419!2smx"
                    height="450" width="600" style="border:0;" :allowfullscreen="true" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const email = ref('example@example.com')
const phone = ref('123-456-7890')
const address = ref('123 Main St, Anytown, USA')
</script>