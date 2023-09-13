import { Router } from 'express';
import { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from '../controllers/index.js';

export const recipeRouter = Router();

// /recipes

recipeRouter.route('/')
  .get(getRecipes)
  .post(createRecipe);

// /recipes/:id

recipeRouter.route('/:id')
  .get(getRecipe)
  .patch(updateRecipe)
  .delete(deleteRecipe);