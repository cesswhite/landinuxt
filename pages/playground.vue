<template>
  <NuxtLayout name="playground">
    <div class="relative w-full h-auto">
      <div class="flex flex-col items-center justify-center gap-y-2">
        <UBadge variant="soft" class="bg-transparent px-4 text-center md:px-12" size="lg">
          Trusted by Thousands Worldwide
        </UBadge>
        <h1 class="text-center text-4xl font-semibold text-dark-900 sm:text-4xl md:text-4xl dark:text-dark-100">
          See What Our Clients Have to Say
        </h1>
      </div>
      <UContainer>
        <div class="grid grid-cols-12 gap-4 mt-24 p-4 font-inter">
          <template v-for="(col, index) in testimonials" :key="index">
            <div class="h-full col-span-full md:col-span-4 flex flex-col gap-4 even:mt-4">
              <template v-for="(testimonial, _index) in col" :key="_index">
                <div
                  class="rounded-2xl border border-dark-200 p-4 bg-dark-100/30 hover:bg-dark-100/80 dark:bg-dark-800/50 dark:border-dark-800 dark:hover:bg-dark-800/70 transition-all duration-300 ease-in-out">
                  <p class="font-normal text-base text-dark-950/80 dark:text-dark-50/60">
                    {{ testimonial.text }}
                  </p>
                  <div class="mt-20">
                    <span class="inline-block w-full font-bold text-sm text-dark-950 dark:text-dark-50">{{
                      testimonial.name }}</span>
                    <span class="inline-block w-full font-normal text-sm text-dark-950/60 dark:text-dark-50/60">{{
                      testimonial.username
                    }}</span>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </div>
      </UContainer>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">const testimonials = shallowRef([
  [
    {
      "name": "Emily Johnson",
      "username": "@emilyj",
      "text": "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!"
    },
    {
      "name": "Ana Rodríguez",
      "username": "@anarod",
      "text": "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!"
    },
    {
      "name": "Michael Lee",
      "username": "@michaellee",
      "text": "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects."
    },
  ],
  [
    {
      "name": "Laura Fernández",
      "username": "@laurafern",
      "text": "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil."
    },
    {
      "name": "John Davis",
      "username": "@johndavis",
      "text": "I was able to launch my site in just a few hours thanks to the incredible components provided. A game changer!"
    },
    {
      "name": "Luis Pérez",
      "username": "@luisp",
      "text": "Pude lanzar mi sitio en solo unas horas gracias a los increíbles componentes que ofrecen. ¡Un cambio total!"
    },
  ],
  [
    {
      "name": "David Wilson",
      "username": "@davidw",
      "text": "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project."
    },
    {
      "name": "Ricardo Sánchez",
      "username": "@ricardos",
      "text": "¡Superó todas mis expectativas! La interfaz es hermosa y las características son justo lo que necesitaba para mi proyecto."
    },
    {
      "name": "Olivia Martinez",
      "username": "@oliviam",
      "text": "As a designer, I found it very easy to customize and integrate with my existing projects. Absolutely love it!"
    },
  ]
]);
</script>
