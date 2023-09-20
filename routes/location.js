import { Router } from 'express';
import { LocationController } from '../controllers/index.js';

export const locationRouter = Router();

// /locations

locationRouter.route('/')
  .get(LocationController.getAll)
  .post(LocationController.create);
  
// /locations/:id

locationRouter.route('/:id')
  .get(LocationController.getById)
  .patch(LocationController.update)
  .delete(LocationController.delete);