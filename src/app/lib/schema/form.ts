import { z } from 'zod'

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name should be at least 2 characters long',
  }),
  surname: z.string().min(2, {
    message: 'Surname should be at least 2 charactes long',
  }),
  email: z
    .string()
    .min(1, {
      message: 'Email should be at least 1 character long',
    })
    .email('This is not a valid email'),
})

export type formSchema = z.infer<typeof formSchema>
