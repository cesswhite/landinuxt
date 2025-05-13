<template>
<div class="h-auto min-h-dvh w-full flex flex-col items-center justify-center">
        <div
          class="w-96 rounded-lg bg-dark-50 dark:bg-dark-900 px-4 py-12 ring-1 ring-dark-200/70 dark:ring-dark-800 shadow-2xl shadow-dark-950/20">
          <div class="flex flex-col items-center justify-center">
            <div class="size-8 mb-4">
              <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
                class="size-full object-contain object-center" loading="lazy" alt="my-company-logo-description"
                :placeholder="[50, 25, 75, 5]" format="webp" />
            </div>
            <h1 class="w-full text-center font-bold text-lg text-dark-950 dark:text-dark-50">Welcome back</h1>
            <p class="text-sm text-center text-dark-950/60 dark:text-dark-50">
              Please enter your email and password to access your account.
            </p>
          </div>
          <div class="mt-4">
            <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
              <div class="col-span-full">
                <UFormField label="Email" name="email" size="lg">
                  <UInput v-model="state.email" type="email" class="w-full" />
                </UFormField>
              </div>
              <div class="col-span-full">
                <UFormField label="Password" name="password" size="lg">
                  <UInput v-model="state.password" type="password" class="w-full" />
                </UFormField>
              </div>
              <div class="col-span-full mt-4">
                <div class="flex items-center justify-end mb-4">
                  <UButton to="#" size="sm" variant="link" color="primary" class="cursor-pointer">
                    Forgot password?
                  </UButton>
                </div>
                <UButton block type="submit" size="lg" class="cursor-pointer" color="primary">
                  Sign In
                </UButton>
                <div class="my-2">
                  <USeparator label="Or" />
                </div>
                <div class="flex flex-col gap-y-2">
                  <UButton block type="submit" size="lg"
                    class="cursor-pointer bg-dark-50 text-dark-900 border border-dark-200 hover:bg-dark-100 hover:text-dark-950 dark:bg-dark-950 dark:border-dark-300/10 dark:text-dark-50/80 dark:hover:bg-dark-900 dark:hover:text-dark-50"
                    label="Sign in with Google">
                    <template #leading>
                      <UIcon name="i-simple-icons-google" class="size-3" />
                    </template>
                  </UButton>
                  <UButton block type="submit" size="lg" class="cursor-pointer" color="neutral"
                    label="Sign in with GitHub">
                    <template #leading>
                      <UIcon name="i-simple-icons-github" class="size-3" />
                    </template>
                  </UButton>
                </div>
                <div class="mt-8">
                  <small class="text-dark-950/50 dark:text-dark-50/50 text-xs text-center inline-block w-full">
                    Don't have an account? <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">Sign up
                    </NuxtLink>
                  </small>
                </div>
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
    password: undefined
  })
  
  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.email) errors.push({ name: 'email', message: 'Field required' })
    if (!state.password) errors.push({ name: 'password', message: 'Field required' })
    return errors
  }
  
  async function onSubmit(event: FormSubmitEvent<any>) {
    state.email = undefined
    state.password = undefined
  }
  </script>