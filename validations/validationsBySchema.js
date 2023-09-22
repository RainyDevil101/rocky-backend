import { contactSchema, locationSchema, productSchema, recipeSchema } from '../schemas/index.js';

export const createValidator = (schema) => async (object) => {
  return schema.safeParseAsync(object);
};

export const validateProduct = createValidator(productSchema);
export const validatePartialProduct = createValidator(productSchema.partial());

export const validateLocation = createValidator(locationSchema);
export const validatePartialLocation = createValidator(locationSchema.partial());

export const validateContact = createValidator(contactSchema);
export const validatePartialContact = createValidator(contactSchema.partial());
export const validateRecipe = createValidator(recipeSchema);
export const validatePartialRecipe = createValidator(recipeSchema.partial());

export const validateIngredient = createValidator(recipeSchema);
export const validatePartialIngredient = createValidator(recipeSchema.partial());


export const validateRecipeIngredient = createValidator(recipeSchema);
export const validatePartialRecipeIngredient = createValidator(recipeSchema.partial());
