<template>
    <div class="bg-dark-50 dark:bg-dark-950">
        <UContainer>
            <div class="relative w-full flex flex-col items-center justify-center gap-y-2 py-24">
                <div class="w-auto mx-auto">
                    <UBadge size="lg" variant="soft">
                        Contact us
                    </UBadge>
                </div>
                <h2 class="text-5xl font-bold text-center  text-dark-900 dark:text-dark-50">
                    We are here to help you
                </h2>
                <p class="text-lg text-center font-normal text-dark-900/60 dark:text-dark-50/60 mt-2">
                    Got questions or need assistance? Feel free to reach out to us. <br>
                    We're just a message away!
                </p>
                <div class="w-full relative mt-12">
                    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                        <div class="col-span-full">
                            <UFormField label="Name" name="fullname" size="xl" required>
                                <UInput v-model="state.fullname" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField label="Email" name="email" size="xl" required>
                                <UInput v-model="state.email" type="email" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full md:col-span-6">
                            <UFormField label="Phone" name="phone" size="xl" required>
                                <UFieldGroup size="xl" class="w-full">
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
                            <UFormField label="Company" name="company" size="xl" required>
                                <UInput v-model="state.company" type="text" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField label="Preferred Communication Method" name="communication" size="xl" required>
                                <URadioGroup v-model="state.communication" :items="items" />
                            </UFormField>
                        </div>
                        <div v-if="state.communication === 'Other'" class="col-span-full">
                            <UFormField label="Other Method" name="other" size="xl" required>
                                <UInput v-model="state.other" type="text" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField label="Subject" name="subject" size="xl" required>
                                <UInput v-model="state.subject" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField label="Message" name="message" size="xl" required>
                                <UTextarea v-model="state.message" :rows="6" type="textarea" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField name="agree" size="xl">
                                <UCheckbox v-model="state.agree" required>
                                    <template #label>
                                        I agree with the
                                        <ULink to="#">
                                            privacy policy
                                        </ULink>
                                    </template>
                                </UCheckbox>
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UButton block type="submit" size="xl" class="cursor-pointer">
                                Send message
                            </UButton>
                        </div>
                    </UForm>
                </div>
            </div>
        </UContainer>
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

const items = ref(['Email', 'Phone', 'Other'])
const countryCode = ref('US')
const toast = useToast()

const country = computed(() => phoneCodes.find(c => c.code === countryCode.value))
const dialCode = computed(() => country.value?.dialCode ?? '+1')

const state = reactive({
    fullname: undefined,
    email: undefined,
    phone: undefined,
    company: undefined,
    communication: undefined,
    subject: undefined,
    agree: undefined,
    other: undefined,
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
    if (!state.communication) errors.push({ name: 'communication', message: 'Field required' })
    if (!state.subject) errors.push({ name: 'subject', message: 'Field required' })
    if (!state.message) errors.push({ name: 'message', message: 'Field required' })
    if (!state.agree) errors.push({ name: 'agree', message: 'Field required' })
    if (state.communication === 'Other' && !state.other) errors.push({ name: 'other', message: 'Field required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    toast.add({ title: 'Done!', description: 'The message has been submitted', color: 'success' })
    state.fullname = undefined
    state.email = undefined
    state.phone = undefined
    state.company = undefined
    state.communication = undefined
    state.subject = undefined
    state.agree = undefined
    state.message = undefined
    state.other = undefined
}
</script>