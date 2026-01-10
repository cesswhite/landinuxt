# create - Auth Component

## Component Overview

This authentication component features a clean registration form with email and password confirmation fields, alongside a prominent display area for showcasing your company's brand imagery

## Critical Instructions for Claude

### Step 1: Read the LLM Instructions File

**IMPORTANT**: Before implementing this component, you MUST read and understand the `llms.txt` file in this same directory. This file contains:

- Complete implementation rules and guidelines
- Reference documentation links (Nuxt UI, Nuxt 4, Tailwind CSS v4)
- Detailed component code reference
- Step-by-step implementation guide
- Technical implementation details

**Action Required**: 
1. Locate and read the `llms.txt` file in this component's directory
2. Review all sections, especially "Implementation Rules and Guidelines"
3. Understand the reference code structure
4. Note the documentation URLs for reference during implementation

### Step 2: Verify Your Skills

**IMPORTANT**: Before starting implementation, review the `Skills.md` file in this directory to verify you have the required technical knowledge.

**Action Required**:
1. Read the `Skills.md` file completely
2. Self-assess your proficiency in each skill area:
   - Core Framework Knowledge (Vue 3, Nuxt 4, Nuxt UI v4, Tailwind CSS v4)
   - Advanced Technical Skills (TypeScript, Modern CSS, Responsive Design, Accessibility)
   - Performance Optimization
   - Component Architecture
3. If you lack proficiency in any essential skill, refer to the documentation links in `llms.txt` to fill knowledge gaps
4. Only proceed with implementation once you're confident in your skills

### Step 3: Implementation Context

You are helping to implement a auth component for a **Nuxt 4** landing page. This component should:

- Match the design shown in the reference image exactly
- Follow the code structure provided in `llms.txt`
- Adhere to all rules and guidelines specified in `llms.txt`
- Use the technical skills outlined in `Skills.md`

## Implementation Requirements

### Framework & Tools
1. **Use Nuxt 4** (not Nuxt 3) with Composition API (`<script setup lang="ts">`)
2. **Implement using Nuxt UI v4 components** exclusively
3. **Apply Tailwind CSS v4 utility classes** for all styling
4. **Ensure full responsiveness** across all screen sizes (mobile-first)
5. **Support dark mode** using Tailwind's `dark:` prefix
6. **Include proper accessibility attributes** (ARIA labels, semantic HTML)
7. **Optimize images** using `NuxtImg` component (never use `<img>` tags)
8. **Follow Vue 3 and Nuxt 4 best practices** as outlined in `llms.txt`

### Code Quality Standards
- Write clean, readable, and maintainable code
- Use TypeScript for type safety
- Follow the component structure patterns shown in `llms.txt`
- Leverage Nuxt 4's auto-imports (no manual imports needed)
- Ensure proper semantic HTML structure
- Include appropriate ARIA attributes for accessibility

## Reference Code

The complete reference code is available in the `llms.txt` file. Use it as your primary reference for:

- Component structure and organization
- Tailwind CSS class usage
- Nuxt UI component implementation
- Responsive design patterns
- Dark mode implementation
- Accessibility features

```vue
<template>
  <div
    class="grid h-auto min-h-screen w-full grid-cols-12 items-center justify-center gap-2 bg-white dark:bg-black"
  >
    <div
      class="relative col-span-full flex h-full flex-col items-center justify-center rounded-lg md:col-span-6"
    >
      <div
        class="relative flex w-full flex-col gap-y-12 px-2 py-32 md:w-11/12 md:px-4 md:py-24 lg:w-10/12 xl:w-8/12"
      >
        <div class="flex flex-col items-start justify-center">
          <h1
            class="text-dark-950 dark:text-dark-50 w-full text-left text-xl font-bold"
          >
            Create an account
          </h1>
          <p class="text-dark-950/60 dark:text-dark-50/60 text-left text-base">
            Create your account and start managing your business from anywhere -
            easily, quickly, and efficiently.
          </p>
        </div>
        <div class="relative w-full">
          <UForm
            :validate="validate"
            :state="state"
            class="grid grid-cols-12 gap-4"
            @submit="onSubmit"
          >
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
                <UInput
                  v-model="state.password"
                  placeholder="Password"
                  :type="show ? 'text' : 'password'"
                  :ui="{ trailing: 'pe-1' }"
                  class="w-full"
                >
                  <template #trailing>
                    <UButton
                      color="neutral"
                      variant="link"
                      size="sm"
                      :icon="show ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                      :aria-label="show ? 'Hide password' : 'Show password'"
                      :aria-pressed="show"
                      aria-controls="password"
                      @click="show = !show"
                    />
                  </template>
                </UInput>
              </UFormField>
            </div>
            <div class="col-span-full md:col-span-6">
              <UFormField
                label="Confirm Password"
                name="confirm_password"
                size="xl"
              >
                <UInput
                  v-model="state.confirm_password"
                  placeholder="Confirm Password"
                  :type="showConfirm ? 'text' : 'password'"
                  :ui="{ trailing: 'pe-1' }"
                  class="w-full"
                >
                  <template #trailing>
                    <UButton
                      color="neutral"
                      variant="link"
                      size="sm"
                      :icon="showConfirm ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                      :aria-label="
                        showConfirm ? 'Hide password' : 'Show password'
                      "
                      :aria-pressed="showConfirm"
                      aria-controls="password"
                      @click="showConfirm = !showConfirm"
                    />
                  </template>
                </UInput>
              </UFormField>
            </div>
            <div class="col-span-full mt-12">
              <UButton
                block
                type="submit"
                size="xl"
                class="cursor-pointer"
                color="primary"
              >
                Sign Up
              </UButton>
              <div class="mt-4">
                <small
                  class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm"
                >
                  Already have an account?
                  <NuxtLink
                    to="#"
                    class="text-primary-500 dark:text-primary-400"
                    >Sign in
                  </NuxtLink>
                </small>
              </div>
            </div>
          </UForm>
        </div>
      </div>
      <div class="relative bottom-12 left-0 w-full pb-4 md:absolute">
        <small
          class="text-dark-950/50 dark:text-dark-50/50 inline-block w-full text-center text-sm"
        >
          By creating an account, you agree to our
          <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
            Terms of Service
          </NuxtLink>
          and
          <NuxtLink to="#" class="text-primary-500 dark:text-primary-400">
            Privacy Policy
          </NuxtLink>
        </small>
      </div>
    </div>
    <div class="relative col-span-full hidden h-screen md:col-span-6 md:block">
      <div
        class="pointer-events-none absolute bottom-0 left-0 z-20 flex h-1/3 w-full items-end justify-center rounded-lg bg-gradient-to-t from-black/80 via-black/40 to-transparent"
      >
        <div class="flex w-full flex-col gap-y-2 px-4 pb-12 2xl:px-12">
          <h1
            class="text-dark-50 text-center text-3xl font-bold tracking-tight lg:text-4xl"
          >
            The best way to manage your business from anywhere
          </h1>
          <p
            class="text-dark-50/60 mx-auto text-center font-normal tracking-tight md:text-lg/6"
          >
            Eco Development Studios is a digital agency specializing in
            innovative solutions that drive business growth through custom
            software development, strategic marketing, and comprehensive digital
            transformation services.
          </p>
        </div>
      </div>
      <div class="relative z-10 h-full overflow-hidden rounded-lg p-2">
        <NuxtImg
          src="https://images.unsplash.com/photo-1568402102990-bc541580b59f"
          class="size-full rounded-lg object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const state = reactive({
  name: undefined,
  email: undefined,
  password: undefined,
  confirm_password: undefined,
});
const show = ref(false);
const showConfirm = ref(false);
const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ name: "name", message: "Field required" });
  if (!state.email) errors.push({ name: "email", message: "Field required" });
  if (!state.password)
    errors.push({ name: "password", message: "Field required" });
  if (!state.confirm_password)
    errors.push({ name: "confirm_password", message: "Field required" });
  if (state.password !== state.confirm_password)
    errors.push({
      name: "confirm_password",
      message: "Passwords do not match",
    });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  state.email = undefined;
  state.password = undefined;
  state.confirm_password = undefined;
  state.name = undefined;
}
</script>
```

## Implementation Workflow

### Pre-Implementation Checklist
- [ ] Read and understood `llms.txt` file completely
- [ ] Reviewed and verified skills in `Skills.md` file
- [ ] Analyzed reference image for visual requirements
- [ ] Understood the reference code structure
- [ ] Have access to Nuxt UI, Nuxt 4, and Tailwind CSS v4 documentation

### Implementation Steps
1. **Analyze Requirements**: Review the reference image and understand the visual design
2. **Review Reference Code**: Study the code structure in `llms.txt` to understand patterns
3. **Check Skills**: Verify you have all required skills from `Skills.md`
4. **Implement Component**: Create the component following all rules from `llms.txt`
5. **Ensure Responsiveness**: Test at all breakpoints (mobile, tablet, desktop)
6. **Test Dark Mode**: Verify appearance in both light and dark modes
7. **Verify Accessibility**: Test with keyboard navigation and screen readers
8. **Optimize Performance**: Ensure images are optimized and code is efficient
9. **Code Review**: Review your implementation against the rules in `llms.txt`
10. **Final Testing**: Test all functionality and visual appearance

### Quality Assurance
- Component matches the reference image pixel-perfectly
- All responsive breakpoints work correctly
- Dark mode displays properly
- Accessibility standards are met (WCAG 2.1 AA)
- Code follows all rules from `llms.txt`
- Performance is optimized (lazy loading, image optimization)
- TypeScript types are properly defined
- Code is clean, readable, and maintainable

## Important Notes

- **Always refer to `llms.txt`** for the most up-to-date implementation rules and guidelines
- **Verify your skills** using `Skills.md` before starting implementation
- **Use the reference documentation** links provided in `llms.txt` when you need clarification
- **Follow Nuxt 4 best practices** as outlined in the official documentation
- **Test thoroughly** at different screen sizes and in both light/dark modes
- **Prioritize accessibility** - ensure your implementation is usable by everyone
- **Maintain code quality** - write code that is maintainable and follows best practices

## Getting Help

If you encounter issues during implementation:

1. Re-read the relevant sections in `llms.txt`
2. Check the official documentation links provided in `llms.txt`
3. Review the `Skills.md` file to identify any knowledge gaps
4. Refer to the reference code in `llms.txt` for implementation patterns
5. Ensure you're following all 12 implementation rules from `llms.txt`
