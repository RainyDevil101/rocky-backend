import { Router } from 'express';
import { RecipeController } from '../controllers/index.js';

export const recipeRouter = Router();

// /locations

recipeRouter.route('/')
  .get(RecipeController.getAll)
  .post(RecipeController.create);

// /locations/:id

recipeRouter.route('/:id')
  .get(RecipeController.getById)
  .patch(RecipeController.update)
  .delete(RecipeController.delete);