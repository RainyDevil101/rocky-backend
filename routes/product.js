import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/index.js';
import { testMiddleware } from '../middlewares/testMiddleware.js';

export const productRouter = Router();

// /products 

productRouter.route('/')
  .get(testMiddleware, getProducts)
  .post(createProduct);

// /products/:id

productRouter.route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);