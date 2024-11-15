<template>
  <NuxtLayout name="playground">
    <div class="relative w-full h-auto">
      <UCarousel v-slot="{ item }" loop arrows dots :autoplay="{ delay: 6000 }" align="center" :items="testimonials"
        :ui="{
          item: 'basis-full sm:basis-1/3 md:basis-3/5 relative ps-0 md:ps-4',
          container: 'flex items-center relative m-0',
          prev: 'absolute rounded-full z-10 left-4 lg:left-32 xl:left-64 top-1/2 cursor-pointer',
          next: 'absolute rounded-full z-10 right-4 lg:right-32 xl:right-72 top-1/2 cursor-pointer',
        }">
        <div class="px-8 lg:px-24 h-auto min-h-96 flex items-center justify-center flex-col rounded-2xl"
          :class="item['class-color']">
          <p class="text-dark-950 text-xl text-center font-medium italic">
            "{{ item.text }}"
          </p>
          <div class="flex flex-col items-center justify-center mt-12">
            <span class="inline-block w-full font-bold text-base text-dark-950">{{ item.name }}</span>
            <span class="inline-block w-full font-bold text-base text-dark-950/50 text-center">{{ item.username
              }}</span>
          </div>
        </div>
      </UCarousel>

    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const testimonials = shallowRef(
  [
    {
      "name": "Emily Johnson",
      "username": "@emilyj",
      "text": "This service transformed my business. The tools provided are easy to use and incredibly effective. Highly recommend!",
      "class-color": "bg-blue-100"
    },
    {
      "name": "Ana Rodríguez",
      "username": "@anarod",
      "text": "Este servicio ha transformado mi negocio. Las herramientas son fáciles de usar y extremadamente efectivas. ¡Lo recomiendo mucho!",
      "class-color": "bg-green-100"
    },
    {
      "name": "Michael Lee",
      "username": "@michaellee",
      "text": "Amazing experience! The platform is intuitive and helped me save a lot of time on my projects.",
      "class-color": "bg-yellow-100"
    },
    {
      "name": "Laura Fernández",
      "username": "@laurafern",
      "text": "La mejor herramienta que he usado para crear landing pages. Es rápida, confiable, y el equipo de soporte es muy útil.",
      "class-color": "bg-red-100"
    },
    {
      "name": "John Davis",
      "username": "@johndavis",
      "text": "I was able to launch my site in just a few hours thanks to the incredible components provided. A game changer!",
      "class-color": "bg-purple-100"
    },
    {
      "name": "Luis Pérez",
      "username": "@luisp",
      "text": "Pude lanzar mi sitio en solo unas horas gracias a los increíbles componentes que ofrecen. ¡Un cambio total!",
      "class-color": "bg-pink-200"
    },
    {
      "name": "David Wilson",
      "username": "@davidw",
      "text": "Exceeded all my expectations! The UI is beautiful and the features are exactly what I needed for my project.",
      "class-color": "bg-indigo-100"
    },
    {
      "name": "Ricardo Sánchez",
      "username": "@ricardos",
      "text": "¡Superó todas mis expectativas! La interfaz es hermosa y las características son justo lo que necesitaba para mi proyecto.",
      "class-color": "bg-cyan-100"
    },
    {
      "name": "Olivia Martinez",
      "username": "@oliviam",
      "text": "As a designer, I found it very easy to customize and integrate with my existing projects. Absolutely love it!",
      "class-color": "bg-teal-100"
    },
  ]);

</script>
