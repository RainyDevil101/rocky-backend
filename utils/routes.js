import { productRouter, recipeRouter, locationRouter, contactRouter } from '../routes/index.js';

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
];
