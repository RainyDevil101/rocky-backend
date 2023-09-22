import { Router } from 'express';
import { IngredientController } from '../controllers/index.js';

export const ingredientRouter = Router();

// /locations

ingredientRouter.route('/')
  .get(IngredientController.getAll)
  .post(IngredientController.create);

// /locations/:id

ingredientRouter.route('/:id')
  .get(IngredientController.getById)
  .patch(IngredientController.update)
  .delete(IngredientController.delete);