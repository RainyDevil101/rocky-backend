import { createElementRouter } from '../routes/index.js';
import { productsInfo, recipesInfo, locationsInfo, contactsInfo, ingredientsInfo, recipeIngredientsInfo } from '../utils/index.js';
import { contactSchema, ingredientSchema, locationSchema, productSchema, recipeIngredientSchema, recipeSchema } from '../schemas/index.js';

export const routes = [
  {
    prefix: '/api/products',
    route: createElementRouter({ ...productsInfo, schema: productSchema }),
  },
  {
    prefix: '/api/recipes',
    route: createElementRouter({ ...recipesInfo, schema: recipeSchema }),
  },
  {
    prefix: '/api/locations',
    route: createElementRouter({ ...locationsInfo, schema: locationSchema }),
  },
  {
    prefix: '/api/contacts',
    route: createElementRouter({ ...contactsInfo, schema: contactSchema }),
  },
  {
    prefix: '/api/ingredients',
    route: createElementRouter({ ...ingredientsInfo, schema: ingredientSchema }),
  },
  {
    prefix: '/api/recipe-ingredients',
    route: createElementRouter({ ...recipeIngredientsInfo, schema: recipeIngredientSchema }),
  },
];
