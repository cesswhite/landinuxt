<template>
    <div class="relative w-full grid grid-cols-12 gap-4">
        <div class="col-span-full md:col-span-6 p-4">
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
                        <UIcon name="i-heroicons-envelope" class="size-4 text-dark-900/60 dark:text-dark-50/60" />
                        <UButton :to="`mailto:${email}`" variant="link" color="neutral" size="lg">
                            {{ email }}
                        </UButton>
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <UIcon name="i-heroicons-phone" class="size-4 text-dark-900/60 dark:text-dark-50/60" />
                        <UButton :to="`tel:${phone}`" variant="link" color="neutral" size="lg">
                            {{ phone }}
                        </UButton>
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <UIcon name="i-heroicons-map-pin" class="size-4 text-dark-900/60 dark:text-dark-50/60" />
                        <UButton to="#" variant="link" color="neutral" size="lg">
                            {{ address }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-6 p-4">
            <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Name" name="fullname" size="lg">
                        <UInput v-model="state.fullname" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Email" name="email" size="lg">
                        <UInput v-model="state.email" type="email" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Phone" name="phone" size="lg">
                        <UInput v-model="state.phone" type="tel" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Company" name="company" size="lg">
                        <UInput v-model="state.company" type="text" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full">
                    <UFormField label="Message" name="message" size="lg">
                        <UTextarea v-model="state.message" :rows="6" type="textarea" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-start-7 col-span-6 flex justify-end">
                    <UButton block type="submit" size="lg" class="cursor-pointer">
                        Send message
                    </UButton>
                </div>
            </UForm>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    fullname: undefined,
    email: undefined,
    phone: undefined,
    company: undefined,
    message: undefined
})
const email = ref('example@example.com')
const phone = ref('123-456-7890')
const address = ref('123 Main St, Anytown, USA')
const toast = useToast()


const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.fullname) errors.push({ name: 'fullname', message: 'Field required' })
    if (!state.email) errors.push({ name: 'email', message: 'Field required' })
    if (!state.phone) errors.push({ name: 'phone', message: 'Field required' })
    if (!state.company) errors.push({ name: 'company', message: 'Field required' })
    if (!state.message) errors.push({ name: 'message', message: 'Field required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    toast.add({ title: 'Done!', description: 'The message has been submitted', color: 'success' })
    state.fullname = undefined
    state.email = undefined
    state.phone = undefined
    state.company = undefined
    state.message = undefined
}
</script>