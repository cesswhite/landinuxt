**LandiNuxt** provides pre-built, copy-paste components to help you create stunning landing pages in no time, fully integrated with the **Nuxt ecosystem**. Our components rely heavily on **Nuxt UI v3**, so it's crucial to install it for proper functionality.

## Requirements

### Key Technologies:

- **Nuxt UI v3**
- **Nuxt Image**
- **Nuxt Marquee**
- **Vue Use Motion**

We will added more modules and Nuxt Libraries in the future

## Installing Nuxt UI v3 🔧

To get started, you need to install Nuxt UI v3. Follow the official setup guide:
[Nuxt UI v3 Installation Guide](https://ui3.nuxt.dev/getting-started/installation)

## Built-in Configuration of Nuxt UI v3 ⚙️

Nuxt UI v3 comes with pre-configured settings for **Color Mode**, **Fonts**, and **TailwindCSS**. We highly recommend keeping the default setup, as our components are optimized to work with these settings. They seamlessly adapt to the color mode, and some components use Nuxt fonts.

- [Fonts Configuration](https://ui3.nuxt.dev/getting-started/fonts)
- [Color Mode Configuration](https://ui3.nuxt.dev/getting-started/color-mode)

> **Important:** If you disable any of these modules in your configuration, you might encounter compatibility issues with some components.

## Current Font Setup 🎨

Below are the font families currently used in our components. Feel free to add these to your CSS if needed:

```css
--font-family-inter: "Inter", sans-serif;
--font-family-lora: "Lora", serif;
--font-family-instrument: "Instrument Serif", serif;
--font-family-roboto: "Roboto", sans-serif;
```

For more details on theming, visit the [Nuxt UI Theme Guide](https://ui3.nuxt.dev/getting-started/theme).

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

For more details on theming, visit the [Nuxt UI Theme Guide](https://ui3.nuxt.dev/getting-started/theme#colors).

## Additional Required Modules 📦

In addition to Nuxt UI v3, you’ll need the following modules for full component functionality:

- **Nuxt Image**: [Installation Instructions](https://image.nuxt.com/get-started/installation)
- **Nuxt Marquee**: [Installation Instructions](https://hanzydev.github.io/nuxt-marquee/)
- **Vue Use Motion**: [Setup Guide](https://motion.vueuse.org/getting-started/nuxt)

## Using Our Components 🎉

Once everything is set up, you're ready to go! Just copy and paste the component code from Landinuxt into your project, and you’re all set to create stunning landing pages with ease.
