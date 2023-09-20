import z from 'zod';

export const recipeSchema = z.object({
  
  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
    }),

  ingredients: z.string()
    .min(1, {
      message: 'Ingredients is required and must be a non-empty string.',
    })
    .max(550, {
      message: 'Ingredients must not exceed 550 characters.',
    }),

  instructions: z.string()
    .min(1, {
      message: 'Instructions is required and must be a non-empty string.',
    })
    .max(550, {
      message: 'Instructions must not exceed 550 characters.',
    }),

  image: z.string()
    .min(1, {
      message: 'Image is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Image must not exceed 255 characters.',
    }),

});