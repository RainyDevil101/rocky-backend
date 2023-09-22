import { productRouter, recipeRouter, locationRouter, contactRouter, ingredientRouter, recipeIngredientsRouter } from '../routes/index.js';

export const routes = [
  {
    prefix: '/api/products',
    route: productRouter,
  },
  {
    prefix: '/api/recipes',
    route: recipeRouter,
  },
  {
    prefix: '/api/locations',
    route: locationRouter,
  },
  {
    prefix: '/api/contacts',
    route: contactRouter,
  },
  {
    prefix: '/api/ingredients',
    route: ingredientRouter,
  },
  {
    prefix: '/api/recipe-ingredients',
    route: recipeIngredientsRouter,
  },
];
