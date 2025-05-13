<template>
  <div class="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-dark-50 dark:bg-dark-950">
    <!-- SVG Container -->
    <div
      class="absolute z-10 h-dvh w-[820px] pt-24 opacity-70 saturate-200 md:w-[1080px] lg:w-full lg:pt-[400px] xl:pt-0 dark:opacity-90">
      <svg class="h-full w-full" viewBox="0 0 1834 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_3106_1413)">
          <path class="fill-primary-500"
            d="M2043.57 646.103C1998.53 578.986 1921.39 545.06 1845.18 558.851L759.526 755.313C541.677 794.736 536.297 1124.82 752.689 1174.82L2193.64 1507.76C2373.22 1549.25 2505.73 1334.72 2398.87 1175.5L2043.57 646.103Z" />
        </g>
        <g filter="url(#filter1_f_3106_1413)">
          <path class="fill-primary-400"
            d="M2023.6 770.094C1978.55 702.977 1901.41 669.051 1825.2 682.842L739.547 879.304C521.698 918.727 516.318 1248.82 732.71 1298.81L2173.66 1631.75C2353.24 1673.24 2485.75 1458.71 2378.89 1299.49L2023.6 770.094Z" />
        </g>
        <g style="mix-blend-mode: plus-lighter" filter="url(#filter2_f_3106_1413)">
          <path class="fill-white"
            d="M1900.49 905.625C1837.91 854.458 1754.25 844.366 1685.31 879.668L703.319 1382.59C506.27 1483.5 596.866 1800.96 818.457 1786.04L2294.03 1686.71C2477.92 1674.33 2542.51 1430.59 2394.07 1309.21L1900.49 905.625Z" />
        </g>
        <defs>
          <filter id="filter0_f_3106_1413" x="0.827881" y="-36.5913" width="3028.72" height="2141.98"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="296.204" result="effect1_foregroundBlur_3106_1413" />
          </filter>
          <filter id="filter1_f_3106_1413" x="217.812" y="324.363" width="2554.79" height="1668.05"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="177.722" result="effect1_foregroundBlur_3106_1413" />
          </filter>
          <filter id="filter2_f_3106_1413" x="239.247" y="503.372" width="2592.35" height="1638.62"
            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="177.722" result="effect1_foregroundBlur_3106_1413" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="relative z-30">
      <div class="flex flex-col items-center justify-center px-4">
        <!-- You can change the gradient color and direction easy in https://www.onamu.dev/ -->
        <h1
          class="via-primary-900/90 to-primary-600/90 dark:via-primary-200/90 dark:to-primary-400/90 font-family-inter mt-4 bg-gradient-to-br from-dark-950/90 from-55% via-70% to-85% bg-clip-text text-center text-5xl font-bold text-transparent sm:text-6xl lg:text-7xl dark:from-dark-50/90">
          Embark on a Journey to <br />
          Space Exploration
        </h1>
        <p
          class="text-primary-950/60 dark:text-primary-50/60 mt-4 w-full text-center text-lg leading-8 md:w-3/5 2xl:text-xl">
          Join our startup and experience the thrill of traveling to space with
          our innovative solutions.
        </p>
        <div class="mt-4 flex gap-4">
          <UButton variant="solid" color="neutral" to="#" size="lg" class="px-12"
            icon="i-heroicons-rocket-launch-solid">
            Launch rocket
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
