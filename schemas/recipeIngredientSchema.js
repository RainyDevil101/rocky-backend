import z from 'zod';

export const recipeIngredientSchema = z.object({
  quantity: z.number()
    .min(0, {
      message: 'Package weight is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Package weight must not exceed 100000.00.',
    }),
    
});