import { ProductModel } from '../models/postgresql/index.js';
import { validateProduct } from '../validations/validationsBySchema.js';

const internalError = { error: 'Internal server error.' };

export class ProductController {
  static async getAll(req, res) {
    try {
      const products = await ProductModel.getAll();
      if (products) return res.json(products);
      res.status(400).json({ message: 'Products not found.' });
    } catch (error) {
      console.log(error);
      return res.status(400).json(internalError);
    }
  };

  static async getById(req, res) {

    const { id } = req.params;

    try {
      const product = await ProductModel.getById({ id });
      if (product) return res.json(product);
      return res.status(400).json({ message: 'Product not found.' })
    } catch (error) {
      console.log(error);
      return res.status(400).json(internalError);
    };

  };

  static async create(req, res) {

    const input = req.body;
    try {

      const resultValdiation = await validateProduct(input);

      if (resultValdiation.error) {
        return res.status(400).json({ error: JSON.parse(resultValdiation.error.message) });
      };

      const productCrated = await ProductModel.create({ input });

      return res.json({ message: `Product ${productCrated.name} created.` });

    } catch (error) {
      console.log(error);
      return res.status(400).json(internalError)
    };



    return res.json(resultValdiation.data);

  };

  static async update(req, res) {

  };

  static async delete(req, res) {

  };

};