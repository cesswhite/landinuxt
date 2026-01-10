# social - CTA Component

## Description

This CTA component showcases a title, description, and a social profile with minimal data and avatars

## Rules for Implementation

When creating this component, follow these rules:

1. **Framework**: Use Nuxt 3 with Composition API (script setup)
2. **UI Library**: Use Nuxt UI v4 components (UButton, NuxtImg, etc.)
3. **Styling**: Use Tailwind CSS v4 utility classes
4. **Responsive Design**: Ensure the component is fully responsive (mobile-first approach)
5. **Dark Mode**: Make sure the component supports dark mode when applicable
6. **Accessibility**: Include proper ARIA labels and semantic HTML
7. **Performance**: Use lazy loading for images and optimize assets
8. **Code Quality**: Write clean, readable, and maintainable code
9. **TypeScript**: Use TypeScript for type safety (if applicable)
10. **Component Structure**: Follow Vue 3 best practices and composition patterns

## Reference Component Code

This is the complete working code for this component. Use it as a reference:

```vue
<template>
  <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-32">
    <div class="flex flex-col gap-y-4">
      <div class="mx-auto">
        <UBadge variant="soft" size="lg"> ✨ LandiNuxt ✨ </UBadge>
      </div>
      <h1
        class="text-dark-950 dark:text-dark-50 mx-auto w-full text-center text-4xl font-normal lg:w-1/2"
      >
        Boost Your Startup Full Potential and Achieve Unparalleled Success with
        Our Expert Guidance
      </h1>
      <p
        class="text-dark-950/50 dark:text-dark-50/50 mx-auto w-full text-center text-lg font-normal lg:w-1/2"
      >
        Unlock your Startup full potential with our guidance you can achieve a
        new milestone and reach unparalleled success
      </p>
      <div
        class="mx-auto flex w-auto flex-col items-center justify-center gap-y-12"
      >
        <UButton
          size="lg"
          variant="solid"
          trailing-icon="i-heroicons-arrow-right"
        >
          Discover more about
        </UButton>
        <div class="flex flex-col items-center gap-y-2">
          <UAvatarGroup size="sm" :max="8">
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1618835962148-cf177563c6c0?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZSUyMHBvcnRyYWl0fGVufDB8fDB8fHww"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2UlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="my-alt-description"
            />
            <UAvatar
              img-class="object-cover object-center"
              src="https://images.unsplash.com/photo-1552699611-e2c208d5d9cf?w=240&auto=format&fit=cover&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2UlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="my-alt-description"
            />
          </UAvatarGroup>
          <div
            class="text-dark-950/50 dark:text-dark-50/50 text-sm text-pretty"
          >
            <b class="mr-1">5,075,550+ </b> Clients already happy
          </div>
          <div class="flex items-center justify-center">
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/80 dark:text-dark-50/80"
            />
            <UIcon
              name="i-heroicons-star-20-solid"
              class="text-dark-950/40 dark:text-dark-50/40"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

## Code Explanation

This Vue component implements a social for landing pages. It uses Nuxt UI components such as UButton, USlideover, NuxtImg, etc. The code is optimized to be responsive and compatible with dark mode when available.

## Technical Implementation Details

### Key Features:

- **Responsive Layout**: Uses Tailwind's responsive breakpoints (sm:, md:, lg:, xl:, 2xl:)
- **Component Library**: Leverages Nuxt UI v4 for consistent design system
- **Image Optimization**: Uses NuxtImg for automatic image optimization and lazy loading
- **Dark Mode Support**: Includes dark mode classes (dark:) for theme switching
- **Accessibility**: Proper semantic HTML and ARIA attributes

## Usage Instructions

1. Copy the component code above
2. Paste it into your Nuxt 3 project
3. Ensure you have Nuxt UI v4 installed: `npm install @nuxt/ui`
4. Make sure Nuxt Image is configured: `npm install @nuxt/image`
5. Customize the content, colors, and styling to match your needs
6. Test the component in different screen sizes and dark mode

