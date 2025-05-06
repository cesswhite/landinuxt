<template>
    <div class="h-auto w-full grid grid-cols-12 items-center justify-center bg-white dark:bg-black gap-2 min-h-screen">
        <div class="col-span-full md:col-span-6 rounded-lg flex flex-col relative items-center justify-center h-full">
            <div
                class="relative flex flex-col gap-y-12 w-full py-32 px-2 md:px-4 md:w-11/12 lg:w-10/12 xl:w-8/12 md:py-24">
                <div class="flex flex-col items-start justify-center">
                    <h1 class="w-full text-left font-bold text-xl text-dark-950 dark:text-dark-50">
                        Create an account
                    </h1>
                    <p class="text-base text-left text-dark-950/60 dark:text-dark-50/60">
                        Create your account and start managing your business from anywhere - easily, quickly, and
                        efficiently.
                    </p>
                </div>
                <div class="w-full relative">
                    <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
                        <div class="col-span-full">
                            <UFormField label="Name" name="name" size="xl">
                                <UInput v-model="state.name" type="text" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full">
                            <UFormField label="Email" name="email" size="xl">
                                <UInput v-model="state.email" type="email" class="w-full" />
                            </UFormField>
                        </div>
                        <div class="col-span-full md:col-span-6">
                            <UFormField label="Password" name="password" size="xl">
                                <UInput v-model="state.password" placeholder="Password"
                                    :type="show ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full">
                                    <template #trailing>
                                        <UButton color="neutral" variant="link" size="sm"
                                            :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                            :aria-label="show ? 'Hide password' : 'Show password'" :aria-pressed="show"
                                            aria-controls="password" @click="show = !show" />
                                    </template>
                                </UInput>
                            </UFormField>
                        </div>
                        <div class="col-span-full md:col-span-6">
                            <UFormField label="Confirm Password" name="confirm_password" size="xl">
                                <UInput v-model="state.confirm_password" placeholder="Confirm Password"
                                    :type="showConfirm ? 'text' : 'password'" :ui="{ trailing: 'pe-1' }" class="w-full">
                                    <template #trailing>
                                        <UButton color="neutral" variant="link" size="sm"
                                            :icon="showConfirm ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                                            :aria-label="showConfirm ? 'Hide password' : 'Show password'"
                                            :aria-pressed="showConfirm" aria-controls="password"
                                            @click="showConfirm = !showConfirm" />
                                    </template>
                                </UInput>
                            </UFormField>
                        </div>
                        <div class="col-span-full mt-12">
                            <UButton block type="submit" size="xl" class="cursor-pointer" color="primary">
                                Sign Up
                            </UButton>
                            <div class="mt-4">
                                <small
                                    class="text-dark-950/50 dark:text-dark-50/50 text-sm text-center inline-block w-full">
                                    Already have an account? <NuxtLink to="#"
                                        class="text-primary-500 dark:text-primary-400">Sign in
                                    </NuxtLink>
                                </small>
                            </div>
                        </div>
                    </UForm>
                </div>
            </div>
            <div class="relative md:absolute bottom-12 pb-4 left-0 w-full">
                <small class="text-dark-950/50 dark:text-dark-50/50 text-sm text-center inline-block w-full">
                    By creating an account, you agree to our
                    <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
                        Terms of Service
                    </NuxtLink> and
                    <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
                        Privacy Policy
                    </NuxtLink>
                </small>
            </div>
        </div>
        <div class="col-span-full hidden md:block md:col-span-6 relative h-screen">
            <div
                class="absolute z-20 bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg pointer-events-none flex items-end justify-center">
                <div class="w-full px-4 2xl:px-12 flex flex-col gap-y-2 pb-12">
                    <h1 class="text-dark-50 text-3xl lg:text-4xl font-bold text-center tracking-tight">
                        The best way to manage your business from anywhere
                    </h1>
                    <p class="text-dark-50/60 md:text-lg/6 tracking-tight font-normal text-center mx-auto">
                        Eco Development Studios is a digital agency specializing in innovative solutions that drive
                        business
                        growth
                        through custom software development, strategic marketing, and comprehensive digital
                        transformation
                        services.
                    </p>
                </div>
            </div>
            <div class="rounded-lg relative z-10 h-full overflow-hidden p-2">
                <NuxtImg src="https://images.unsplash.com/photo-1568402102990-bc541580b59f"
                    class="size-full object-cover rounded-lg" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types'

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined,
    confirm_password: undefined
})
const show = ref(false)
const showConfirm = ref(false)
const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ name: 'name', message: 'Field required' })
    if (!state.email) errors.push({ name: 'email', message: 'Field required' })
    if (!state.password) errors.push({ name: 'password', message: 'Field required' })
    if (!state.confirm_password) errors.push({ name: 'confirm_password', message: 'Field required' })
    if (state.password !== state.confirm_password) errors.push({ name: 'confirm_password', message: 'Passwords do not match' })
    return errors
}

async function onSubmit(event: FormSubmitEvent<any>) {
    state.email = undefined
    state.password = undefined
    state.confirm_password = undefined
    state.name = undefined
}
</script>