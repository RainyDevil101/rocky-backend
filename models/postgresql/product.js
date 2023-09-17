import { client } from '../../db/index.js';
import { buildGetQuery, buildGetQueryById, buildInsertQuery, buildUpdateQuery } from '../../query/index.js';

const tableName = 'products';

export class ProductModel {

  static async getAll() {

    try {

      const query = buildGetQuery({ tableName });

      const { rowCount, rows } = await client.query(query);

      if (rowCount === 0) return null;

      return { rowCount, rows };

    } catch (error) {
      console.error(error)
      return { error: error.message };
    };
  };

  static async getById({ id }) {

    try {

      const query = buildGetQueryById({ id, tableName });

      const { rows, rowCount } = await client.query(query);

      if (rowCount === 0) return null;

      return rows[0];

    } catch (error) {
      console.error(error);
      return { error: error.message };
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
      console.log(123);
      console.error(error);
      return { error: error.message };
    }
  };

  static async update({ id, input }) {
    
    try {
      const query = buildUpdateQuery({ id, input, tableName });
      
      const response = await client.query(query);

      console.log(response,12345);

      return query;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    };


    
  };

  static async delete() {

  };

};