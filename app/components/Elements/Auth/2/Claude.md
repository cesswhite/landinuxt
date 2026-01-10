# logo - Auth Component

## Component Overview

This login form displays a logo, title, and description. It also provides additional login options, including Google and GitHub

## Implementation Guidelines for Claude

### Context
You are helping to implement a auth component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

### Requirements
1. Use Nuxt 3 with Composition API (script setup)
2. Implement using Nuxt UI v4 components
3. Apply Tailwind CSS v4 utility classes for styling
4. Ensure full responsiveness across all screen sizes
5. Support dark mode using Tailwind's dark: prefix
6. Include proper accessibility attributes
7. Optimize images using NuxtImg component
8. Follow Vue 3 best practices

### Reference Code

```vue
<template>
  <div
    class="flex h-auto min-h-dvh w-full flex-col items-center justify-center"
  >
    <div
      class="bg-dark-50 dark:bg-dark-900 ring-dark-200/70 dark:ring-dark-800 shadow-dark-950/20 w-96 rounded-lg px-4 py-12 shadow-2xl ring-1"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="mb-4 size-8">
          <NuxtImg
            src="https://res.cloudinary.com/dkr1hluva/image/upload/landinuxt/icon-neutral_hxtgng.webp"
            class="size-full object-contain object-center"
            loading="lazy"
            alt="my-company-logo-description"
            :placeholder="[50, 25, 75, 5]"
            format="webp"
          />
        </div>
        <h1
          class="text-dark-950 dark:text-dark-50 w-full text-center text-lg font-bold"
        >
          Welcome back
        </h1>
        <p class="text-dark-950/60 dark:text-dark-50 text-center text-sm">
          Please enter your email and password to access your account.
        </p>
      </div>
      <div class="mt-4">
        <UForm
          :validate="validate"
          :state="state"
          class="grid grid-cols-12 gap-4"
          @submit="onSubmit"
        >
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
            <div class="mb-4 flex items-center justify-end">
              <UButton
                to="#"
                size="sm"
                variant="link"
                color="primary"
                class="cursor-pointer"
              >
                Forgot password?
              </UButton>
            </div>
            <UButton
              block
              type="submit"
              size="lg"
              class="cursor-pointer"
              color="primary"
            >
              Sign In
            </UButton>
            <div class="my-2">
              <USeparator label="Or" />
            </div>
            <div class="flex flex-col gap-y-2">
              <UButton
                block
                type="submit"
                size="lg"
                class="bg-dark-50 text-dark-900 border-dark-200 hover:bg-dark-100 hover:text-dark-950 dark:bg-dark-950 dark:border-dark-300/10 dark:text-dark-50/80 dark:hover:bg-dark-900 dark:hover:text-dark-50 cursor-pointer border"
                label="Sign in with Google"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-google" class="size-3" />
                </template>
              </UButton>
              <UButton
                block
                type="submit"
                size="lg"
                class="cursor-pointer"
                color="neutral"
                label="Sign in with GitHub"
              >
                <template #leading>
                  <UIcon name="i-simple-icons-github" class="size-3" />
                </template>
              </UButton>
            </div>
            <div class="mt-8">
              <small
                class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-xs"
              >
                Don't have an account?
                <NuxtLink to="#" class="text-primary-500 dark:text-primary-400"
                  >Sign up
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
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  email: undefined,
  password: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ name: "email", message: "Field required" });
  if (!state.password)
    errors.push({ name: "password", message: "Field required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  state.email = undefined;
  state.password = undefined;
}
</script>
```

### Implementation Steps
1. Review the reference image to understand the visual design
2. Analyze the provided code structure
3. Implement the component matching the design and code patterns
4. Ensure responsive behavior matches the reference
5. Test dark mode compatibility
6. Verify accessibility features

### Notes
- Pay special attention to spacing, typography, and color usage
- Ensure the component is pixel-perfect to the reference image
- Maintain code quality and readability
- Use semantic HTML elements where appropriate
