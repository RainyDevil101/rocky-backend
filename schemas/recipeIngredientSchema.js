import z from 'zod';

export const recipeIngredientSchema = z.object({
  quantity: z.number()
    .min(0, {
      message: 'Package weight is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Package weight must not exceed 100000.00.',
    }),
    
    recipe_id: z.string({
      required_error: 'Recipe id is required.',
      invalid_type_error: 'Must be uuid.'
    })
    .uuid(),

    ingredient_id: z.string({
      required_error: 'Ingredient id is required.',
      invalid_type_error: 'Must be uuid.'
    })
    .uuid(),

});