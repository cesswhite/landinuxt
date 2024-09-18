import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
          fontFamily: {
            inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
            lora: ['"Lora"', ...defaultTheme.fontFamily.serif],
          },
        },
      },
}
