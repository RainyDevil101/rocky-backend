import { client } from '../../db/index.js';
import { buildGetQuery, buildGetQueryById, buildInsertQuery } from '../../query/index.js';

const tableName = 'products';
const internalError = { error: 'Internal server error.' };

export class ProductModel {

  static async getAll() {

    try {
      const query = buildGetQuery({ tableName });
      const { rowCount, rows } = await client.query(query);
      if (rowCount === 0) return null;
      return { rowCount, rows };
    } catch (error) {
      console.log(error)
      return internalError;
    };
  };

  static async getById({ id }) {

    try {
      const query = buildGetQueryById({ id, tableName })
      const { rows, rowCount } = await client.query(query);
      if (rowCount === 0) return null;
      return rows[0];
    } catch (error) {
      console.log(error);
      return internalError;
    };
  };

  static async create({ input }) {

    try {
      const [{ uuid }] = (await client.query('SELECT uuid_generate_v4() AS uuid;')).rows;

      const id = uuid;
      input.id = id;


      const query = buildInsertQuery({ input, tableName });
      const productCreatedQuery = buildGetQueryById({ id, tableName });

      await client.query(query);
      const { rows } = await client.query(productCreatedQuery);

      return rows[0];
    } catch (error) {
      console.log(error);
      return internalError;
    }
  };

  static async update() {

  };

  static async delete() {

  };

};