import { Router } from 'express';
import { ContactController } from '../controllers/index.js';

export const contactRouter = Router();

// /locations

contactRouter.route('/')
  .get(ContactController.getAll)
  .post(ContactController.create);

// /locations/:id

contactRouter.route('/:id')
  .get(ContactController.getById)
  .patch(ContactController.update)
  .delete(ContactController.delete);