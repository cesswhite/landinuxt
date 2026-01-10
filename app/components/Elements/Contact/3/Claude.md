# enterprise - Contact Component

## Component Overview

This contact section includes a form with validation and a toast notification, accompanied by an image showcasing an enterprise image

## Implementation Guidelines for Claude

### Context
You are helping to implement a contact component for a Nuxt 3 landing page. This component should match the design shown in the reference image (if provided) and follow the code structure below.

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
    class="flex w-full flex-col-reverse gap-8 px-4 py-12 md:grid md:grid-cols-12"
  >
    <div class="relative col-span-full md:col-span-6">
      <h2 class="text-dark-900 dark:text-dark-50 text-4xl font-bold">
        We are here to help you
      </h2>
      <p class="text-lgfont-normal text-dark-900/60 dark:text-dark-50/60 mt-2">
        Got questions or need assistance? Feel free to reach out to us. <br />
        We're just a message away!
      </p>
      <div class="relative mt-12 w-full">
        <UForm
          :validate="validate"
          :state="state"
          class="grid grid-cols-12 gap-4"
          @submit="onSubmit"
        >
          <div class="col-span-full md:col-span-6">
            <UFormField label="Name" name="fullname" size="lg" required>
              <UInput v-model="state.fullname" class="w-full" />
            </UFormField>
          </div>
          <div class="col-span-full md:col-span-6">
            <UFormField label="Email" name="email" size="lg" required>
              <UInput v-model="state.email" type="email" class="w-full" />
            </UFormField>
          </div>
          <div class="col-span-full md:col-span-6">
            <UFormField label="Phone" name="phone" size="lg" required>
              <UInput v-model="state.phone" type="tel" class="w-full" />
            </UFormField>
          </div>
          <div class="col-span-full md:col-span-6">
            <UFormField label="Company" name="company" size="lg" required>
              <UInput v-model="state.company" type="text" class="w-full" />
            </UFormField>
          </div>
          <div class="col-span-full">
            <UFormField label="Message" name="message" size="lg" required>
              <UTextarea
                v-model="state.message"
                :rows="6"
                type="textarea"
                class="w-full"
              />
            </UFormField>
          </div>
          <div class="col-span-full">
            <UFormField name="agree" size="lg">
              <UCheckbox v-model="state.agree" required>
                <template #label>
                  I agree with the
                  <ULink to="#"> privacy policy </ULink>
                </template>
              </UCheckbox>
            </UFormField>
          </div>
          <div class="col-span-full">
            <UButton block type="submit" size="lg" class="cursor-pointer">
              Send message
            </UButton>
          </div>
        </UForm>
      </div>
    </div>
    <div class="relative col-span-full md:col-span-6">
      <NuxtImg
        format="webp"
        class="h-96 w-full rounded-md object-cover object-center md:h-full"
        src="https://images.unsplash.com/photo-1707051703895-ea022c66c428?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        loading="lazy"
        alt="my-enterprise-image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  fullname: undefined,
  email: undefined,
  phone: undefined,
  company: undefined,
  agree: false,
  message: undefined,
});
const toast = useToast();

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.fullname)
    errors.push({ name: "fullname", message: "Field required" });
  if (!state.email) errors.push({ name: "email", message: "Field required" });
  if (!state.phone) errors.push({ name: "phone", message: "Field required" });
  if (!state.company)
    errors.push({ name: "company", message: "Field required" });
  if (!state.agree) errors.push({ name: "agree", message: "Field required" });
  if (!state.message)
    errors.push({ name: "message", message: "Field required" });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  toast.add({
    title: "Done!",
    description: "The message has been submitted",
    color: "success",
  });
  state.fullname = undefined;
  state.email = undefined;
  state.phone = undefined;
  state.company = undefined;
  state.agree = false;
  state.message = undefined;
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
