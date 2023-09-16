import { client } from '../../db/index.js';

export class ProductModel {

  static async getAll() {

    const text = `SELECT id, name, description, price, image, fact_sheet, presentation, seasonality FROM products WHERE status = true;`;
    try {
      const { rowCount, rows } = await client.query(text);
      if (rowCount === 0) {
        return null;
      }
      return { rowCount, rows };
    } catch (error) {
      console.log(error)
      return { error: 'Internal server error.' };
    };
  };

  static async getById({ id }) {
    const query = {
      text: 'SELECT id, name, description, price, image, fact_sheet, presentation, seasonality FROM products WHERE id = $1 AND status = true;',
      values: [id],
    };

    try {
      const { rows, rowCount } = await client.query(query);
      if (rowCount === 0) {
        return null;
      };
      return rows;
    } catch (error) {
      console.log(error);
      return { error: 'Internal server error.' };
    };
  };

  static async create({ input }) {

    const queryValues = Object.values(input);

    const placeHolders = Array.from({ length: queryValues.length }, (_, index) => `$${index + 1}`);

    const query = {
      text: `INSERT INTO products (${Object.keys(input).join(', ')}) VALUES (${placeHolders.join(', ')});`,
      values: queryValues,
    };

    console.log(query);

    try {

      return input;
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