# enterprise - Contact Component

## Component Overview

This contact section includes a form with validation and a toast notification, accompanied by an image showcasing an enterprise image

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

You are helping to implement a contact component for a **Nuxt 4** landing page. This component should:

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
