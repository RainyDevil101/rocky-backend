import { locationSchema, productSchema } from '../schemas/index.js';

export const createValidator = (schema) => async (object) => {
  return schema.safeParseAsync(object);
};

export const validateProduct = createValidator(productSchema);
export const validatePartialProduct = createValidator(productSchema.partial());

export const validateLocation = createValidator(locationSchema);
export const validatePartialLocation = createValidator(locationSchema.partial());

export const validateContact = createValidator(locationSchema);
export const validatePartialContact = createValidator(locationSchema.partial());

export const validateRecipe = createValidator(locationSchema);
export const validatePartialRecipe = createValidator(locationSchema.partial());
