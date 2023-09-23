import { Router } from 'express';
import { ElementController } from '../controllers/index.js';

export const createElementRouter = ({ tableName, singleName, fieldNames, schema }) => {

  const elementRouter = Router();

  const elementController = new ElementController({ tableName, singleName, fieldNames, schema });

  // /locations

  elementRouter.route('/')
    .get(elementController.getAll)
    .post(elementController.create);

  // /locations/:id

  elementRouter.route('/:id')
    .get(elementController.getById)
    .patch(elementController.update)
    .delete(elementController.delete);

  return elementRouter;

};