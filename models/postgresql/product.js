import { client } from '../../db/index.js';
import { validateProduct } from '../../validations/validationsBySchema.js';

export class ProductModel {

  static async getAll() {
    const text = `SELECT id, name, description, price, image, fact_sheet FROM products;`;
    try {
      const { rowCount, rows } = await client.query(text);
      if (rowCount === 0) {
        return { error: 'Products not found.' };
      }
      return { rowCount, rows };
    } catch (error) {
      console.log(error)
      return { error: 'Internal server error.' };
    };
  };

  static async getById({ id }) {
    const text = `SELECT id, name, description, price, image, fact_sheet FROM products WHERE id = '${id}';`;
    try {
      const { rows, rowCount } = await client.query(text);
      if (rowCount === 0) {
        return { error: 'Product not found.' };
      };
      return rows;
    } catch (error) {
      console.log(error);
      return { error: 'Internal server error.' };
    };
  };

  static async create({ input }) {

    try {

      const result = await validateProduct(input);

      if (result.error) return result;

      return "pepe";
    } catch (error) {
      console.log(error);
      return false;
    };

  };

  static async update() {

  };

  static async delete() {

  };

};