import { Router } from 'express';
import { RecipeIngredientsController } from '../controllers/index.js';

export const recipeIngredientsRouter = Router();

// /locations

recipeIngredientsRouter.route('/')
  .get(RecipeIngredientsController.getAll)
  .post(RecipeIngredientsController.create);

// /locations/:id

recipeIngredientsRouter.route('/:id')
  .get(RecipeIngredientsController.getById)
  .patch(RecipeIngredientsController.update)
  .delete(RecipeIngredientsController.delete);