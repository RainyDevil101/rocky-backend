import { productSchema } from '../schemas/index.js';

export const validateProduct = async (object) => {
  return productSchema.safeParseAsync(object);
};

export const validatePartialProduct = async (object) => {
  return productSchema.partial().safeParseAsync(object);
};