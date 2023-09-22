import z from 'zod';

export const recipeSchema = z.object({

  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
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

  created_by: z.string()
    .min(1, {
      message: 'Created by is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Created by must not exceed 255 characters.',
    }),

  id_product: z.string({
    required_error: 'Ingredient id is required.',
    invalid_type_error: 'Must be uuid.'
  })
    .uuid(),

});