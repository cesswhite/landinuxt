<template>
    <div class="h-auto w-full flex items-center justify-center bg-white dark:bg-black gap-2 min-h-screen">
        <div
            class="w-full rounded-md md:w-96 bg-dark-50 dark:bg-dark-900 p-4 flex flex-col items-center justify-center">
            <div class="flex items-center justify-center size-8 rounded-full bg-dark-200/60 dark:bg-dark-800">
                <UIcon name="i-lucide-lock" class="text-dark-950/60 dark:text-dark-50/60" />
            </div>
            <h1 class="w-full text-center font-bold text-lg text-dark-950 dark:text-dark-50">
                Reset Password
            </h1>
            <p class="text-base text-center text-dark-950/60 dark:text-dark-50/60">
                Enter your email to reset your password
            </p>
            <div class="mt-4 w-full">
                <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                    <div class="col-span-full">
                        <UFormField label="Email" name="email" size="lg">
                            <UInput v-model="state.email" type="email" class="w-full" />
                        </UFormField>
                    </div>
                    <div class="col-span-full mt-2">
                        <UButton block type="submit" size="lg" class="cursor-pointer">
                            Reset Password
                        </UButton>
                        <small
                            class="text-dark-950/50 dark:text-dark-50/50 inline-block text-sm text-center mt-2 w-full">
                            Back to <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">Sign
                                in</NuxtLink>
                        </small>
                    </div>
                </UForm>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    email: undefined,
})
const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ name: 'email', message: 'Field required' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    state.email = undefined
}
</script>