import z from 'zod';

export const contactSchema = z.object({
  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
    }),
    
    email: z.string()
    .min(1, {
      message: 'Email is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Email must not exceed 255 characters.',
    })
    .email({
      message: 'Email is not valid.'
    }),
    
    message: z.string()
      .min(1, {
        message: 'Message is required and must be a non-empty string.',
      })
      .max(550, {
        message: 'Message must not exceed 550 characters.',
      }),
});