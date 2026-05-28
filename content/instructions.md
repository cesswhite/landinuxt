**LandiNuxt** provides pre-built, copy-paste components to help you create stunning landing pages in no time, fully integrated with the **Nuxt ecosystem**. Our components rely heavily on **Nuxt UI**, so it's crucial to install it for proper functionality.

## Requirements

### Key Technologies:

- **Nuxt UI**
- **Nuxt Image**
- **Vue Use Motion**

We will add more modules and Nuxt libraries in the future.

## Installing Nuxt UI 🔧

To get started, you need to install Nuxt UI. Follow the official setup guide:
[Nuxt UI Installation Guide](https://ui.nuxt.com/docs/getting-started/installation/nuxt)

## Built-in Configuration of Nuxt UI ⚙️

Nuxt UI comes with pre-configured settings for **Color Mode**, **Fonts**, and **TailwindCSS**. We highly recommend keeping the default setup, as our components are optimized to work with these settings. They seamlessly adapt to the color mode, and some components use Nuxt fonts.

- [Fonts Configuration](https://ui.nuxt.com/docs/getting-started/integrations/fonts)
- [Color Mode Configuration](https://ui.nuxt.com/docs/getting-started/integrations/color-mode/nuxt)

> **Important:** If you disable any of these modules in your configuration, you might encounter compatibility issues with some components.

## Current Font Setup 🎨

Below are the font families currently used in our components. Feel free to add these to your CSS if needed:

```css
--font-family-inter: "Inter", sans-serif;
--font-family-lora: "Lora", serif;
--font-family-instrument: "Instrument Serif", serif;
--font-family-roboto: "Roboto", sans-serif;
```

For more details on theming, visit the [Nuxt UI Theme Guide](https://ui.nuxt.com/docs/getting-started/theme/design-system).

## Integrate Custom CSS Variables 🎨

Integrate these CSS custom variables to ensure the style design functions as intended

```css
--color-primary-50: var(--ui-color-primary-50);
--color-primary-100: var(--ui-color-primary-100);
--color-primary-200: var(--ui-color-primary-200);
--color-primary-300: var(--ui-color-primary-300);
--color-primary-400: var(--ui-color-primary-400);
--color-primary-500: var(--ui-color-primary-500);
--color-primary-600: var(--ui-color-primary-600);
--color-primary-700: var(--ui-color-primary-700);
--color-primary-800: var(--ui-color-primary-800);
--color-primary-900: var(--ui-color-primary-900);
--color-primary-950: var(--ui-color-primary-950);

--color-dark-50: var(--ui-color-neutral-50);
--color-dark-100: var(--ui-color-neutral-100);
--color-dark-200: var(--ui-color-neutral-200);
--color-dark-300: var(--ui-color-neutral-300);
--color-dark-400: var(--ui-color-neutral-400);
--color-dark-500: var(--ui-color-neutral-500);
--color-dark-600: var(--ui-color-neutral-600);
--color-dark-700: var(--ui-color-neutral-700);
--color-dark-800: var(--ui-color-neutral-800);
--color-dark-900: var(--ui-color-neutral-900);
--color-dark-950: var(--ui-color-neutral-950);
```

This is designed to maintain a consistent design principle with classes: primary/dark. With this, we can use classes like this

```html
<h1 class="text-primary-400 dark:text-primary-500">Eco Development Studios</h1>
or
<h1 class="text-dark-950 dark:text-dark-50">Eco Development Studios</h1>
```

> **Important:** To avoid conflicts with default values, we do not use 'gray' or 'neutral' names.

For more details on theming, visit the [Nuxt UI Theme Guide](https://ui.nuxt.com/docs/getting-started/theme/design-system).

## Additional Required Modules 📦

In addition to Nuxt UI, you'll need the following modules for full component functionality:

- **Nuxt Image**: [Installation Instructions](https://image.nuxt.com/get-started/installation)
- **Vue Use Motion**: [Setup Guide](https://motion.vueuse.org/getting-started/nuxt)

## Using Our Components 🎉

Once everything is set up, copy the `.vue` file from LandiNuxt into your project. Each section is a **single self-contained Vue file** using Nuxt UI and Tailwind CSS.

## Component conventions 📐

Every copy-paste section in `app/components/Elements/` follows these rules:

- **Stack**: Vue SFC + Nuxt UI + Tailwind utility classes only.
- **Colors**: Use `primary-*` and `dark-*` design tokens (defined in `main.css`). Do not use `white`, `black`, `gray-*`, `blue-*`, or other raw Tailwind palette names.
- **No shared style utils** inside numbered components — configuration that affects visuals (e.g. `UMarquee` fade) lives inline in the same file.
- **Script optional**: Static sections can be template-only; add `<script setup>` when the demo needs forms, carousels, or sample data.
- **Hub vs section**: Files like `Wrapper.vue`, `Tile.vue`, and `ContentList.vue` power the component gallery and are not copy-paste targets.

## Per-section dependencies

Before pasting a section, install what it uses. Global setup (Nuxt UI, tokens, fonts) is required for **all** sections.

| Category / pattern | Extra modules | Notes |
| --- | --- | --- |
| **All sections** | Nuxt UI, Tailwind, token CSS from below | Color mode support uses `dark:` variants |
| **Hero, Headers, Gallery, Footers, CTA, …** with images | `@nuxt/image` | Uses `NuxtImg` |
| **Hero 2, 9, 11 · Features 3, 14 · …** | `@vueuse/motion` | Uses `v-motion` / `v-motion-fade` |
| **Logos 2, 5, 6 · Hero 4, 8 · …** | Nuxt UI `UMarquee` | Inline `:ui` fade must match section `bg-dark-50 dark:bg-dark-950` |
| **FAQ, Auth, Contact, …** | Nuxt UI forms | `UForm`, `UInput`, etc. |
| **Headers 7** | — | Scoped CSS for mega-menu transition (exception) |

Check the section file for `NuxtImg`, `v-motion`, `UMarquee`, or `UForm` to confirm dependencies.

## How to Contribute 🤝

We welcome contributions from the community! Here’s how you can help:

1. **Fork the Repository**: Start by forking the LandiNuxt repository to your own GitHub account.

2. **Clone Your Fork**: Clone your forked repository to your local machine:

   ```bash
   git clone https://github.com/your-username/landinuxt.git
   ```

3. **Create a Branch**: Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Changes**: Implement your changes and ensure they align with our coding standards and best practices.

5. **Commit Your Changes**: Commit your changes with a clear and descriptive message:

   ```bash
   git commit -m "Add a feature that does XYZ"
   ```

6. **Push to Your Fork**: Push your changes back to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**: Go to the original LandiNuxt repository and open a pull request. Provide a detailed description of your changes and why they should be merged.

8. **Engage with Feedback**: Be open to feedback and make any necessary adjustments to your pull request.

For detailed instructions on how to contribute to LandiNuxt, please visit our [Contribution Guide](../contribution).

Thank you for considering contributing to LandiNuxt! Your help is greatly appreciated.
