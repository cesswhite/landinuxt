import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*',
      schema: z.object({
        parent: z.string().optional(),
        component: z.number().optional(),
        dark: z.boolean().optional(),
        animated: z.boolean().optional(),
        preview: z.boolean().optional(),
        copied: z.boolean().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
