import { QueryModel } from '../models/postgresql/index.js';
import { productsInfo } from '../utils/index.js';
import { validatePartialProduct, validateProduct } from '../validations/validationsBySchema.js';

export class ProductController {

  static queryModel = new QueryModel({
    tableName: productsInfo.tableName,
    singleName: productsInfo.singleName,
    fieldNames: productsInfo.fieldNames,
  });

  static async getAll(req, res) {

    const products = await ProductController.queryModel.getAll();

    if (products.error) return res.status(400).json({ error: products.error });

    return res.json(products);

  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Invalid id.' });
    };

    const product = await ProductController.queryModel.getById({ id });

    if (product.error) return res.status(400).json({ error: product.error });

    return res.json(product);

  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validateProduct(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const productCreated = await ProductController.queryModel.create({ input: resultValidation.data });

    if (productCreated.error) return res.status(400).json({ error: productCreated.error });

    return res.json({ message: `Product ${productCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Invalid id.' });
    };
    if (!input || input.length === 0) {
      return res.status(400).json({ error: 'Body needed.' });
    };

    const resultValidation = await validatePartialProduct(input);

    if (resultValidation.error) {
      return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });
    };

    const productUpdated = await ProductController.queryModel.update({ id, input: resultValidation.data });

    if (productUpdated.error) return res.status(400).json({ error: productUpdated.error });

    return res.json({ message: `Product ${productUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Invalid id.' });
    };

    const productDeleted = await ProductController.queryModel.delete({ id });

    if (productDeleted.error) return res.status(400).json({ error: productDeleted.error });

    return res.json({ message: `Product ${productDeleted} deleted.` })

  };

};