import z from 'zod';

export const ingredientSchema = z.object({
  name: z.string()
  .min(1, {
    message: 'Name is required and must be a non-empty string.',
  })
  .max(255, {
    message: 'Name must no exceed 255 characters.',
  })
});