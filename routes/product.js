import { Router } from 'express';
import { ProductController } from '../controllers/product.js';

export const productRouter = Router();

// /products 

productRouter.route('/')
  .get(ProductController.getAll)
  .post(ProductController.create);

// /products/:id

productRouter.route('/:id')
  .get(ProductController.getById)
  .patch(ProductController.update)
  .delete(ProductController.delete);