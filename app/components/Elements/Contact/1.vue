<template>
    <div class="relative w-full grid grid-cols-12 gap-4 bg-dark-50 dark:bg-dark-950">
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
                        <UButton :to="`mailto:${email}`" variant="link" color="neutral" size="lg" class="cursor-pointer">
                            {{ email }}
                        </UButton>
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <UIcon name="i-heroicons-phone" class="size-4 text-dark-900/60 dark:text-dark-50/60" />
                        <UButton :to="`tel:${phone}`" variant="link" color="neutral" size="lg" class="cursor-pointer">
                            {{ phone }}
                        </UButton>
                    </div>
                    <div class="flex items-center justify-start w-full">
                        <UIcon name="i-heroicons-map-pin" class="size-4 text-dark-900/60 dark:text-dark-50/60" />
                        <UButton to="#" variant="link" color="neutral" size="lg" class="cursor-pointer">
                            {{ address }}
                        </UButton>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-full md:col-span-6 p-4">
            <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Name" name="fullname" size="lg" required>
                        <UInput v-model="state.fullname" autocomplete="name" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Email" name="email" size="lg" required>
                        <UInput v-model="state.email" type="email" autocomplete="email" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Phone" name="phone" size="lg" required>
                        <UFieldGroup size="lg" class="w-full">
                            <USelectMenu
                                v-model="countryCode"
                                :items="phoneCodes"
                                value-key="code"
                                :search-input="{
                                    placeholder: 'Search country...',
                                    icon: 'i-lucide-search',
                                }"
                                :filter-fields="['name', 'code', 'dialCode']"
                                :content="{ align: 'start' }"
                                :ui="{
                                    base: 'pe-8',
                                    content: 'w-48',
                                    placeholder: 'hidden',
                                    trailingIcon: 'size-4',
                                }"
                                trailing-icon="i-lucide-chevrons-up-down"
                            >
                                <span class="flex size-5 items-center text-lg">
                                    {{ country?.emoji ?? '🇺🇸' }}
                                </span>

                                <template #item-leading="{ item }">
                                    <span class="flex size-5 items-center text-lg">
                                        {{ item.emoji }}
                                    </span>
                                </template>

                                <template #item-label="{ item }">
                                    {{ item.name }} ({{ item.dialCode }})
                                </template>
                            </USelectMenu>

                            <UInput
                                v-model="state.phone"
                                type="tel"
                                inputmode="tel"
                                autocomplete="tel-national"
                                :placeholder="country?.placeholder"
                                :style="{ '--dial-code-length': `${dialCode.length + 1.5}ch` }"
                                :ui="{
                                    base: 'ps-(--dial-code-length)',
                                    leading: 'pointer-events-none text-base text-muted md:text-sm',
                                }"
                                class="w-full"
                            >
                                <template #leading>
                                    {{ dialCode }}
                                </template>
                            </UInput>
                        </UFieldGroup>
                    </UFormField>
                </div>
                <div class="col-span-full md:col-span-6">
                    <UFormField label="Company" name="company" size="lg" required>
                        <UInput v-model="state.company" type="text" autocomplete="organization" class="w-full" />
                    </UFormField>
                </div>
                <div class="col-span-full">
                    <UFormField label="Message" name="message" size="lg" required>
                        <UTextarea v-model="state.message" :rows="6" class="w-full" />
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

type PhoneCode = {
    name: string
    code: string
    emoji: string
    dialCode: string
    placeholder: string
}

const phoneCodes: PhoneCode[] = [
    { name: 'Mexico', code: 'MX', emoji: '🇲🇽', dialCode: '+52', placeholder: '55 1234 5678' },
    { name: 'United States', code: 'US', emoji: '🇺🇸', dialCode: '+1', placeholder: '(555) 123-4567' },
    { name: 'Colombia', code: 'CO', emoji: '🇨🇴', dialCode: '+57', placeholder: '300 123 4567' },
]

const countryCode = ref('US')
const email = ref('example@example.com')
const phone = ref('123-456-7890')
const address = ref('123 Main St, Anytown, USA')
const toast = useToast()

const country = computed(() => phoneCodes.find(c => c.code === countryCode.value))
const dialCode = computed(() => country.value?.dialCode ?? '+1')

const state = reactive({
    fullname: undefined,
    email: undefined,
    phone: undefined,
    company: undefined,
    message: undefined
})

watch(countryCode, () => {
    state.phone = undefined
})

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