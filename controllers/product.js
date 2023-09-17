import { ProductModel } from '../models/postgresql/index.js';
import { validatePartialProduct, validateProduct } from '../validations/validationsBySchema.js';

export class ProductController {
  static async getAll(req, res) {

    const products = await ProductModel.getAll();

    if (products.error) return res.status(400).json({ message: 'Products not found.' });

    return res.json(products);

  };

  static async getById(req, res) {

    const { id } = req.params;

    const product = await ProductModel.getById({ id });

    if (product.error) return res.status(400).json({ message: 'Product not found.' });

    return res.json(product);

  };

  static async create(req, res) {

    const input = req.body;

    const resultValidation = await validateProduct(input);

    if (resultValidation.error) {

      return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    };

    const productCreated = await ProductModel.create({ input: resultValidation.data });

    if (productCreated.error) return res.status(400).json({ error: productCreated.error });

    return res.json({ message: `Product ${productCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;

    const input = req.body;

    const resultValidation = await validatePartialProduct(input);

    if (resultValidation.error) {
      return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });
    };

    const productUpdated = await ProductModel.update({ id, input: resultValidation.data });

    if (productUpdated.error) return res.status(400).json({ error: productUpdated.error });

    

    return res.json({ message: `Product updated.` });

  };

  static async delete(req, res) {

  };

};