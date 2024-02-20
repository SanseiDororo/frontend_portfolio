import { z } from 'zod'

export const locationSchema = z.object({
  location: z.string().min(2, {
    message: 'Location name should be at least 2 characters long',
  }),
})

export type locationSchema = z.infer<typeof locationSchema>
