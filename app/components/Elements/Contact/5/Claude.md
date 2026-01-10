# multi - Contact Component

## Component Overview

This contact section features a multi-form with diverse inputs to collect more data

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
  <UContainer>
    <div
      class="relative flex w-full flex-col items-center justify-center gap-y-2 py-24"
    >
      <div class="mx-auto w-auto">
        <UBadge size="lg" variant="soft"> Contact us </UBadge>
      </div>
      <h2
        class="text-dark-900 dark:text-dark-50 text-center text-5xl font-bold"
      >
        We are here to help you
      </h2>
      <p
        class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-center text-lg font-normal"
      >
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
              <UInput
                v-model="state.phone"
                type="tel"
                class="w-full"
                :ui="{
                  base: 'pl-24',
                  leading: 'cursor-pointer ps-0',
                }"
              >
                <template #leading>
                  <USelect v-model="state.country_code" :items="countries" />
                </template>
              </UInput>
            </UFormField>
          </div>
          <div class="col-span-full md:col-span-6">
            <UFormField label="Company" name="company" size="xl" required>
              <UInput v-model="state.company" type="text" class="w-full" />
            </UFormField>
          </div>
          <div class="col-span-full">
            <UFormField
              label="Preferred Communication Method"
              name="communication"
              size="xl"
              required
            >
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
              <UTextarea
                v-model="state.message"
                :rows="6"
                type="textarea"
                class="w-full"
              />
            </UFormField>
          </div>
          <div class="col-span-full">
            <UFormField name="agree" size="xl">
              <UCheckbox v-model="state.agree" required>
                <template #label>
                  I agree with the
                  <ULink to="#"> privacy policy </ULink>
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
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const items = ref(["Email", "Phone", "Other"]);
const countries = ["MX", "US", "CO"];
const toast = useToast();
const state = reactive({
  fullname: undefined,
  email: undefined,
  country_code: undefined,
  phone: undefined,
  company: undefined,
  communication: undefined,
  subject: undefined,
  agree: undefined,
  other: undefined,
  message: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.fullname)
    errors.push({ name: "fullname", message: "Field required" });
  if (!state.email) errors.push({ name: "email", message: "Field required" });
  if (!state.phone) errors.push({ name: "phone", message: "Field required" });
  if (!state.company)
    errors.push({ name: "company", message: "Field required" });
  if (!state.communication)
    errors.push({ name: "communication", message: "Field required" });
  if (!state.subject)
    errors.push({ name: "subject", message: "Field required" });
  if (!state.message)
    errors.push({ name: "message", message: "Field required" });
  if (!state.agree) errors.push({ name: "agree", message: "Field required" });
  if (state.communication === "Other" && !state.other)
    errors.push({ name: "other", message: "Field required" });
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
  state.communication = undefined;
  state.subject = undefined;
  state.agree = undefined;
  state.message = undefined;
  state.other = undefined;
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
