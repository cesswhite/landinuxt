<template>
    <div id="landing-two" class="relative h-auto w-full">
        <!-- HEADER -->
        <div class="fixed top-12 z-50 px-4 w-full">
            <header
                class="relative z-20 flex h-16 w-full items-center justify-between gap-4 rounded-xl bg-dark-50/90 px-4 lg:justify-start dark:bg-dark-950/90">
                <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Groupdark_ljxs2m.png"
                    class="relative z-10 h-7 w-auto object-contain object-center" loading="lazy"
                    alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" />
                <nav class="relative z-10 hidden items-center justify-start gap-2 lg:flex">
                    <UButton variant="link" color="neutral" size="lg" to="#"> Home </UButton>
                    <UButton @click="showMenu = !showMenu" variant="link" color="neutral" size="lg" to="#">
                        <template #trailing>
                            <UIcon v-if="showMenu" name="i-heroicons-chevron-up" class="size-4" />
                            <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
                        </template>
                        Services
                    </UButton>
                    <UButton variant="link" color="neutral" size="lg" to="#"> Tools </UButton>
                    <UButton variant="link" color="neutral" size="lg" to="#">
                        Contact
                    </UButton>
                </nav>
                <USlideover title="Menu" close-icon="i-heroicons-x-mark">
                    <UButton color="neutral" icon="i-heroicons-bars-3" variant="link" size="xl"
                        class="inline-block lg:hidden" />
                    <template #body>
                        <nav class="relative z-10 flex flex-col items-center justify-start gap-2 ">
                            <UButton variant="link" color="neutral" size="lg" to="#">
                                Home
                            </UButton>
                            <UCollapsible class="w-auto">
                                <UButton variant="link" color="neutral" size="lg" to="#">
                                    Services
                                    <template #trailing>
                                        <UIcon v-if="showMenu" name="i-heroicons-chevron-up" class="size-4" />
                                        <UIcon v-else name="i-heroicons-chevron-down" class="size-4" />
                                    </template>
                                </UButton>
                                <template #content>
                                    <div class="flex w-full flex-col gap-y-2">
                                        <UButton variant="link" color="neutral" size="lg" to="#"
                                            class="flex items-center justify-center opacity-75">
                                            Development
                                        </UButton>
                                        <UButton variant="link" color="neutral" size="lg" to="#"
                                            class="flex items-center justify-center opacity-75">
                                            Design
                                        </UButton>
                                        <UButton variant="link" color="neutral" size="lg" to="#"
                                            class="flex items-center justify-center opacity-75">
                                            Mobile Apps
                                        </UButton>
                                    </div>
                                </template>
                            </UCollapsible>
                            <UButton variant="link" color="neutral" size="lg" to="#">
                                Tools
                            </UButton>
                            <UButton variant="link" color="neutral" size="lg" to="#">
                                Contact
                            </UButton>
                        </nav>
                    </template>
                </USlideover>
            </header>
            <Transition enter-active-class="transition-all duration-500" enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100" leave-active-class="transition-all duration-500"
                leave-from-class="opacity-100 " leave-to-class="opacity-0 -translate-y-2" mode="out-in">
                <div v-if="showMenu"
                    class="absolute top-0 left-0 z-10 hidden h-72 w-full border rounded-xl bg-dark-50 pt-16 px-4 lg:flex dark:border-dark-950/50 dark:bg-dark-900">
                    <div class="flex w-3/5 items-center">
                        <template v-for="(service, index) in services" :key="index">
                            <div class="flex flex-col gap-y-2">
                                <div
                                    class="flex size-8 items-center justify-center rounded-md border border-dark-950/20 bg-dark-200/20 p-1 dark:border-dark-700 dark:bg-dark-800">
                                    <UIcon :name="service.icon" class="size-full text-dark-950 dark:text-dark-50" />
                                </div>
                                <span class="text-base font-bold text-dark-950 dark:text-dark-50">
                                    {{ service.name }}
                                </span>
                                <p class="w-4/5 text-sm font-normal text-dark-950/60 dark:text-dark-50/60">
                                    {{ service.description }}
                                </p>
                            </div>
                        </template>
                    </div>
                    <div class="w-2/5 pt-4">
                        <div class="bg-primary-200 dark:bg-primary-700 h-full w-full overflow-hidden rounded-t-xl p-4">
                            <span class="text-base font-bold text-dark-950 dark:text-dark-50">
                                Explore Our Services
                            </span>
                            <p class="w-4/5 text-sm font-normal text-dark-950/60 dark:text-dark-50/60">
                                Discover how our services can help you achieve your business
                                goals.
                            </p>
                            <div class="mt-6 flex h-full">
                                <template v-for="(image, index) in images">
                                    <div
                                        class="flex-1 rotate-4 transform-gpu overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-4 hover:rotate-0">
                                        <NuxtImg :src="image" class="h-full w-full object-cover object-center"
                                            loading="lazy" alt="my-company-logo-description"
                                            :placeholder="[50, 25, 75, 5]" />
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
        <!-- HERO -->
        <div class="relative flex h-full min-h-dvh w-full items-end justify-center">
            <!-- Background Image (try a dark image to see the magic) -->
            <NuxtImg
                class="absolute z-10 h-full w-full object-cover object-center transition-all duration-300 ease-in-out dark:saturate-0"
                src="https://images.unsplash.com/photo-1552858725-2758b5fb1286?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                loading="lazy" alt="my-hero-background" :placeholder="[50, 25, 75, 5]" />
            <div class="relative bottom-24 z-20 w-11/12 md:w-10/12">
                <div class="flex flex-col items-center justify-center">
                    <h1
                        class="font-lora mt-4 text-center text-5xl font-normal text-dark-50/80 sm:text-6xl md:text-7xl dark:text-white">
                        Discover the Magic of <br />
                        Luxurious Comfort
                    </h1>
                    <p
                        class="mt-4 w-full text-center text-lg leading-8 text-dark-50/60 sm:w-1/2 2xl:w-1/3 2xl:text-xl dark:text-dark-50/80">
                        Indulge in the ultimate sleep experience with our wide range of
                        luxurious bedding collections
                    </p>
                    <div class="mt-8 flex gap-4">
                        <UButton variant="solid" color="neutral" to="#" size="lg" class="px-8">
                            Shop now
                        </UButton>
                    </div>
                </div>
            </div>
            <div class="absolute right-4 bottom-4 z-20">
                <UTooltip text="Questions? Contact Us">
                    <UButton class="rounded-full" icon="i-heroicons-question-mark-circle" variant="ghost"
                        color="neutral" />
                </UTooltip>
            </div>
        </div>
        <!-- LOGOS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 py-32">
            <UContainer>
                <div class="grid grid-cols-12 gap-8">
                    <div class="col-span-full md:col-span-6">
                        <h2 class="text-dark-900 dark:text-dark-50 text-5xl font-semibold">
                            Empowering Visionaries Worldwide
                        </h2>
                        <p class="text-dark-900/60 dark:text-dark-50/60 mt-4 text-lg font-normal">
                            More than 5,000 companies trust us to transform their ideas into
                            success stories. Unlock your potential with a reliable partner.
                        </p>
                        <div class="mt-4 flex gap-x-4">
                            <UButton variant="solid" size="lg">
                                Explore the possibilities
                            </UButton>
                            <UButton variant="link" size="lg"> Learn more </UButton>
                        </div>
                    </div>
                    <div class="col-span-full md:col-span-6">
                        <div class="grid grid-cols-12 gap-4">
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-nuxt" class="text-3xl" />
                            </div>
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-supabase" class="text-3xl" />
                            </div>
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-tailwindcss" class="text-3xl" />
                            </div>
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-cloudflare" class="text-3xl" />
                            </div>
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-expo" class="text-3xl" />
                            </div>
                            <div class="col-span-6 flex h-24 items-center justify-start">
                                <UIcon name="i-logos-dev" class="text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </UContainer>
        </div>
        <!-- FEATURES -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full px-4 ">
            <UContainer>
                <div class="grid h-auto w-full grid-cols-12 gap-y-24 py-24 xl:gap-x-24 xl:gap-y-0 xl:px-4">
                    <div class="col-span-full flex flex-col items-start justify-center gap-y-8 xl:col-span-4">
                        <h1
                            class="mx-auto text-left text-3xl lg:text-4xl font-semibold text-dark-950 md:text-center xl:w-full xl:text-left dark:text-dark-50">
                            Unlock Your Project's Full Potential with Expert Services
                        </h1>
                        <p
                            class="mx-auto w-full text-left text-lg text-dark-950/50 md:w-10/12 md:text-center xl:w-full xl:text-left dark:text-dark-50/50">
                            Unlock your website's full user experience potential with our diverse
                            range of feature sections, from minimalist to feature-packed designs,
                            all crafted to convey your brand.
                        </p>
                        <div class="flex w-full items-center justify-start md:justify-center xl:justify-start">
                            <UButton variant="subtle" color="primary" size="lg" to="#">
                                Learn more about features
                            </UButton>
                        </div>
                    </div>
                    <div class="col-span-full grid w-full grid-cols-subgrid gap-y-12 md:gap-x-6 xl:col-span-8">
                        <template v-for="(feat, index) in features" :key="index">
                            <div
                                class="col-span-full flex h-auto flex-col justify-center gap-x-4 gap-y-4 rounded-lg transition-all duration-300 ease-in-out md:col-span-6 md:items-center xl:col-span-4">
                                <div
                                    class="border-primary-500/50 bg-primary-100/10 dark:bg-primary-50/10 flex h-12 w-12 flex-auto items-center justify-center rounded-full border p-3">
                                    <UIcon :name="feat.icon" class="? text-primary-600 dark:text-primary-400 size-8" />
                                </div>
                                <span class="text-xl font-semibold text-dark-950 dark:text-dark-50">{{
                                    feat.title
                                }}</span>
                                <p
                                    class="px-0 text-left text-base font-normal text-dark-950/50 md:px-4 md:px-12 md:text-center dark:text-dark-50/50">
                                    {{ feat.description }}
                                </p>
                            </div>
                        </template>
                    </div>
                </div>
            </UContainer>
        </div>
        <!-- TESTIMONIALS -->
        <div class="bg-dark-50 dark:bg-dark-950 relative h-auto w-full py-32">
            <UCarousel v-slot="{ item }" loop arrows dots :autoplay="{ delay: 6000 }" align="center"
                :items="testimonials" :ui="{
                    item: 'basis-full sm:basis-1/3 md:basis-3/5 relative ps-0 md:ps-4',
                    container: 'flex items-center relative m-0',
                    prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
                    next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
                }">
                <div class="flex h-auto min-h-96 flex-col items-center justify-center rounded-2xl px-8 lg:px-24"
                    :class="item['class-color']">
                    <p class="text-dark-950 text-center text-xl font-medium italic">
                        "{{ item.text }}"
                    </p>
                    <div class="mt-12 flex flex-col items-center justify-center">
                        <span class="text-dark-950 inline-block w-full text-base font-bold">{{
                            item.name
                        }}</span>
                        <span class="text-dark-950/50 inline-block w-full text-center text-base font-bold">{{
                            item.username }}</span>
                    </div>
                </div>
            </UCarousel>
        </div>
        <!-- FEATURES -->
        <div class="flex w-full flex-col bg-dark-50 py-12 dark:bg-dark-950">
            <UContainer>
                <div class="flex w-full flex-col gap-4 md:flex-row md:gap-0">
                    <div class="mx-auto flex w-full flex-col items-center justify-center gap-2 md:w-1/2">
                        <UBadge color="primary" variant="soft"> New Features</UBadge>
                        <h1
                            class="mt-1 text-center text-4xl font-medium text-dark-950 sm:text-4xl md:text-5xl dark:text-dark-50">
                            Unlock Your Fungal Potential
                        </h1>
                    </div>
                </div>
                <div
                    class="mt-12 flex flex-col items-start justify-between gap-x-0 gap-y-8 px-4 md:gap-x-6 md:gap-y-12 lg:flex-row">
                    <template v-for="image in images_features" :key="image.src">
                        <div class="group relative w-full flex-1 overflow-hidden rounded-xl">
                            <div
                                class="absolute bottom-0 z-10 flex h-full w-full flex-col items-start justify-end gap-y-2 bg-gradient-to-t from-dark-950/60 p-8 group-hover:from-dark-950/30">
                                <span class="text-left text-4xl font-semibold text-dark-50">
                                    {{ image.name }}
                                </span>
                                <p class="mx-auto w-full text-left text-base font-normal text-dark-50/60">
                                    {{ image.description }}
                                </p>
                            </div>
                            <NuxtImg :src="image.src"
                                class="h-[420px] w-full object-cover object-center group-hover:saturate-150 md:h-[520px] lg:h-[620px]"
                                loading="lazy" alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" />
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- CTA -->
        <div
            class="bg-dark-50 dark:bg-dark-950 relative grid h-auto w-full grid-cols-12 gap-y-12 overflow-hidden py-32 lg:gap-y-0 ">
            <div class="group relative right-12 col-span-full overflow-hidden lg:col-span-4">
                <NuxtImg class="h-64 w-full rounded-r-2xl object-cover object-center group-hover:saturate-150"
                    loading="lazy" height="200" width="200" alt="my-work"
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div class="col-span-full w-full lg:col-span-4 lg:py-12">
                <div class="relative z-10 flex w-full flex-col gap-y-4">
                    <div class="mx-auto">
                        <UIcon name="i-heroicons-sparkles-solid"
                            class="text-dark-950 dark:text-dark-50 size-12 animate-pulse" />
                    </div>
                    <h1 class="text-dark-950/90 dark:text-dark-50/90 text-center font-serif text-4xl md:text-5xl">
                        Turning
                        <span class="font-instrument text-dark-950 dark:text-dark-50 italic">ideas</span>
                        <br />
                        into
                        <span class="font-instrument text-dark-950 dark:text-dark-50 italic">reality</span>.
                    </h1>
                    <p
                        class="text-dark-950/60 dark:text-dark-50/60 mx-auto px-2 text-center font-serif md:w-1/2 lg:w-full">
                        Discover a seamless blend of creativity and innovation. We bring your
                        vision to life with precision, expertise, and a commitment to
                        excellence in every project.
                    </p>
                    <div class="mx-auto">
                        <UButton block to="#" color="primary" variant="solid" class="px-6" size="lg">
                            Explore Our Services
                        </UButton>
                    </div>
                </div>
            </div>
            <div class="group relative left-12 col-span-full overflow-hidden lg:col-span-4 lg:pt-44">
                <NuxtImg class="h-64 w-full rounded-l-2xl object-cover object-center group-hover:saturate-150"
                    loading="lazy" height="200" width="200" alt="my-work"
                    src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
        </div>
        <!-- FAQ -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-24">
            <UContainer>
                <div class="flex flex-col">
                    <h1 class="text-dark-900 dark:text-dark-100 text-4xl font-semibold">
                        Frequently Asked Questions
                    </h1>
                    <p class="text-dark-950/60 dark:text-dark-50/50 mt-2 w-full text-left text-lg 2xl:text-xl">
                        Explore answers to your most pressing questions about our services
                    </p>
                </div>
                <div class="mt-12 grid w-full grid-cols-12 gap-x-0 gap-y-8 md:gap-x-8">
                    <template v-for="(faq, index) in faqs" :key="index">
                        <div class="col-span-full md:col-span-4">
                            <span class="text-dark-900 dark:text-dark-50 text-base font-semibold">{{ faq.question
                                }}</span>
                            <p class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-base">
                                {{ faq.answer }}
                            </p>
                        </div>
                    </template>
                </div>
            </UContainer>
        </div>
        <!-- CONTACT -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full py-24">
            <UContainer>
                <div class="relative flex w-full flex-col items-center justify-center gap-y-2">
                    <div class="mx-auto w-auto">
                        <UBadge size="lg" variant="soft"> Contact us </UBadge>
                    </div>
                    <h2 class="text-dark-900 dark:text-dark-50 text-center text-5xl font-bold">
                        We are here to help you
                    </h2>
                    <p class="text-dark-900/60 dark:text-dark-50/60 mt-2 text-center text-lg font-normal">
                        Got questions or need assistance? Feel free to reach out to us. <br />
                        We're just a message away!
                    </p>
                    <div class="relative mt-12 w-full">
                        <UForm :validate="validate" :state="state" class="grid grid-cols-12 gap-4" @submit="onSubmit">
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
                                    <UInput v-model="state.phone" type="tel" class="w-full" :ui="{
                                        base: 'pl-24',
                                        leading: 'cursor-pointer ps-0',
                                    }">
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
                                <UFormField label="Preferred Communication Method" name="communication" size="xl"
                                    required>
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
                                    <UTextarea v-model="state.message" :rows="6" type="textarea" class="w-full" />
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
        </div>
        <!-- FOOTER -->
        <div class="bg-dark-50 dark:bg-dark-950 relative w-full pt-32">
            <UContainer>
                <footer class="relative flex h-auto w-full flex-col overflow-hidden px-4 py-2">
                    <div class="grid w-full grid-cols-12">
                        <div class="col-span-full flex flex-col items-start justify-start gap-y-6 lg:col-span-6">
                            <NuxtImg
                                src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683149739/Group_25dark_yrfac5.png"
                                class="h-6 object-contain object-center md:h-10" loading="lazy"
                                alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" />
                            <p
                                class="text-dark-950/50 dark:text-dark-50/50 font-inter inline-block w-full text-sm md:w-1/2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae
                                labore accusamus perspiciatis quasi aperiam amet voluptatibus vero
                                quidem consectetur architecto dolore quaerat, ad id facilis eligendi
                                totam, quas maiores!
                            </p>
                            <div class="">
                                <UButton icon="i-heroicons-arrow-right" trailing variant="link" color="primary"
                                    class="p-0">
                                    Learn more about us
                                </UButton>
                            </div>
                            <div class="text-dark-950/50 dark:text-dark-50/50 flex items-center justify-start text-sm">
                                ©LandiNuxt is a Open Source Project by Eco Development Studios
                            </div>
                        </div>
                        <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
                            <template v-for="(nav, index) in navigation" :key="index">
                                <li class="text-dark-950 dark:text-dark-50 font-inter mb-3 text-base capitalize">
                                    {{ nav.label }}
                                </li>
                                <li v-for="(inner_link, _index) in nav.links" :key="_index">
                                    <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral"
                                        size="lg" class="p-0">
                                        {{ inner_link.label }}
                                    </UButton>
                                </li>
                            </template>
                        </ul>
                        <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
                            <template v-for="(nav, index) in social_media_navigation" :key="index">
                                <li class="text-dark-950 dark:text-dark-50 font-inter mb-3 text-base capitalize">
                                    {{ nav.label }}
                                </li>
                                <li v-for="(inner_link, _index) in nav.links" :key="_index">
                                    <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral"
                                        size="lg" class="p-0 hover:underline">
                                        {{ inner_link.label }}
                                    </UButton>
                                </li>
                            </template>
                        </ul>
                        <ul class="col-span-full mt-6 flex w-full flex-col gap-y-2 lg:col-span-2">
                            <template v-for="(nav, index) in other_navigation" :key="index">
                                <li class="text-dark-950 dark:text-dark-50 font-inter mb-3 text-base capitalize">
                                    {{ nav.label }}
                                </li>
                                <li v-for="(inner_link, _index) in nav.links" :key="_index">
                                    <UButton :to="inner_link.link" target="_blank" variant="link" color="neutral"
                                        size="lg" class="p-0 hover:underline">
                                        {{ inner_link.label }}
                                    </UButton>
                                </li>
                            </template>
                        </ul>
                    </div>

                    <div class="relative -bottom-4 mt-44 w-full">
                        <div class="from-dark-50 dark:from-dark-950 absolute size-full bg-gradient-to-t from-25%" />
                        <NuxtImg src="https://res.cloudinary.com/dpvsklksg/image/upload/v1683150145/Group_26_tooxf6.svg"
                            class="size-full object-contain object-center" loading="lazy"
                            alt="my-company-logo-description" :placeholder="[50, 25, 75, 5]" />
                    </div>
                </footer>
            </UContainer>
        </div>

    </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from "#ui/types";

const showMenu = ref(false);
const images = [
    "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const images_features = [
    {
        src: "https://images.pexels.com/photos/20424275/pexels-photo-20424275/free-photo-of-naturaleza-azul-bosque-abstracto.jpeg",
        name: "Mushroom Exploration",
        description:
            "Embark on a journey to discover the hidden wonders of the fungal kingdom, unlocking the secrets of the forest floor.",
    },
    {
        src: "https://images.pexels.com/photos/18290448/pexels-photo-18290448/free-photo-of-madera-naturaleza-arte-mano.jpeg",
        name: "Fungal Network",
        description:
            "Delve into the intricate networks of mycelium, understanding the symbiotic relationships that shape the ecosystem.",
    },
    {
        src: "https://images.pexels.com/photos/17651134/pexels-photo-17651134/free-photo-of-naturaleza-rojo-azul-verano.jpeg",
        name: "Spore Dispersal",
        description:
            "Witness the fascinating process of spore dispersal, as mushrooms release their reproductive units into the air.",
    },
];
const services = ref([
    {
        icon: "i-heroicons-command-line",
        name: "Development",
        description:
            "Our development services focus on crafting scalable, efficient, and user-friendly solutions tailored to your business needs.",
    },
    {
        icon: "i-heroicons-swatch",
        name: "Design",
        description:
            "Our design team creates visually stunning and intuitive interfaces that enhance user experience and drive engagement.",
    },
    {
        icon: "i-heroicons-device-phone-mobile",
        name: "Mobile Apps",
        description:
            "We develop mobile applications that are fast, secure, and optimized for both iOS and Android platforms.",
    },
]);
const features = [
    {
        icon: "i-heroicons-command-line",
        title: "Development",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-swatch",
        title: "Design",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-device-phone-mobile",
        title: "Mobile Apps",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
    {
        icon: "i-heroicons-cloud",
        title: "Imagene Data",
        description:
            "Comprehensive design services from conceptualization to deployment, integrating the latest technologies to propel your business.",
        link: "#",
    },
];
const testimonials = shallowRef([
    {
        name: "Emily Johnson",
        username: "@emilyj",
        text: "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
        "class-color": "bg-blue-100",
    },
    {
        name: "Ana Rodríguez",
        username: "@anarod",
        text: "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
        "class-color": "bg-green-100",
    },
    {
        name: "Michael Lee",
        username: "@michaellee",
        text: "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
        "class-color": "bg-yellow-100",
    },
    //Add more data
]);
const faqs = ref([
    {
        question: "What services do you offer?",
        answer:
            "We offer a variety of services including web development, digital marketing, and cybersecurity solutions to cater to diverse business needs.",
        open: true,
    },
    {
        question: "How can I contact support?",
        answer:
            "You can contact support via email, phone, or through our website's contact form. Our support team is available 24/7 to assist you with any inquiries or issues.",
        open: false,
    },
    {
        question: "What is your refund policy?",
        answer:
            "Our refund policy is designed to ensure customer satisfaction. If you are not satisfied with our services, you can request a refund within a specified timeframe as outlined in our terms and conditions.",
        open: false,
    },
    {
        question: "Can I cancel my subscription?",
        answer:
            "Yes, you can cancel your subscription at any time by logging into your account and following the cancellation process. Please note that cancellation policies may vary depending on the subscription plan you have chosen.",
        open: false,
    },
    {
        question: "How do I track my order?",
        answer:
            "You can track your order through our website or by contacting support directly. We provide regular updates on order status to ensure you are informed throughout the delivery process.",
        open: false,
    },
    {
        question: "Do you offer any discounts?",
        answer:
            "Yes, we offer various discounts and promotions to our customers. These may include seasonal discounts, loyalty rewards, or special offers for new customers. Please check our website regularly for any available discounts.",
        open: false,
    },
]);
const navigation = [
    {
        label: "Services",
        links: [
            {
                label: "Development",
                link: "#",
            },
            {
                label: "Design",
                link: "#",
            },
            {
                label: "Mobile Apps",
                link: "#",
            },
            {
                label: "Imagene Data",
                link: "#",
            },
        ],
    },
];
const other_navigation = [
    {
        label: "Company",
        links: [
            {
                label: "About",
                link: "#",
            },
            {
                label: "Website",
                link: "#",
            },
            {
                label: "Brand",
                link: "#",
            },
            {
                label: "Gallery",
                link: "#",
            },
            {
                label: "Blog",
                link: "#",
            },
            {
                label: "Services",
                link: "#",
            },
            {
                label: "Careers",
                link: "#",
            },
        ],
    },
];
const social_media_navigation = [
    {
        label: "Social Media",
        links: [
            {
                label: "X",
                link: "https://x.com/",
            },
            {
                label: "Instagram",
                link: "https://instagram.com/",
            },
            {
                label: "Facebook",
                link: "https://facebook.com/",
            },
            {
                label: "LinkedIn",
                link: "https://linkedin.com/",
            },
            {
                label: "YouTube",
                link: "https://youtube.com/",
            },
            {
                label: "GitHub",
                link: "https://github.com/",
            },
        ],
    },
];
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