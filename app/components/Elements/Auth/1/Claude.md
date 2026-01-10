# simple - Auth Component

## Component Overview

This login form displays a simple title with two input fields, ideal for a quick authentication flow.

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
    <div class="h-auto min-h-dvh w-full flex flex-col items-center justify-center">
        <div class="w-full md:w-96 rounded-md bg-dark-50 dark:bg-dark-900 px-4 py-12">
            <h1 class="w-full text-left font-bold text-lg text-dark-950 dark:text-dark-50">Welcome back, login to your
                account</h1>
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
                        <UButton block type="submit" size="lg" class="cursor-pointer">
                            Sign In
                        </UButton>
                        <small class="text-dark-950/50 dark:text-dark-50/50 text-xs">
                            Don't have an account? <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">Sign
                                up</NuxtLink>
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
