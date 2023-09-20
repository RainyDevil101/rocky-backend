import { client } from '../../db/index.js';
import { buildDeleteQuery, buildGetQuery, buildGetQueryById, buildInsertQuery, buildUpdateQuery } from '../../query/index.js';

export class QueryModel {

  constructor({ tableName, singleName, fieldNames }) {

    this.tableName = tableName;
    this.singleName = singleName;
    this.fieldNames = fieldNames;

  };

  async getAll() {

    try {

      const query = buildGetQuery({ tableName: this.tableName, fieldNames: this.fieldNames });

      const { rowCount, rows } = await client.query(query);

      if (rowCount === 0) return { error: `${tableName} not found.` };

      return { rowCount, rows };

    } catch (error) {
      console.error(error)
      return { error: error.message };
    };
  };

  async getById({ id }) {

    try {

      const query = buildGetQueryById({ id, tableName: this.tableName, fieldNames: this.fieldNames });

      const { rows, rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${single} not found.` };

      return rows[0];

    } catch (error) {
      console.error(error);
      return { error: error.message };
    };
  };

  async create({ input }) {


    try {

      const [{ uuid }] = (await client.query('SELECT uuid_generate_v4() AS uuid;')).rows;

      const id = uuid;
      input.id = id;

      const query = buildInsertQuery({ input, tableName: this.tableName });

      const productCreatedQuery = buildGetQueryById({ id, tableName: this.tableName, fieldNames: this.fieldNames });

      await client.query(query);

      const { rows } = await client.query(productCreatedQuery);

      return rows[0];

    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };

  async update({ id, input }) {

    try {

      const query = buildUpdateQuery({ id, input, tableName: this.tableName });

      const { rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${single} not found.` };

      const { name } = await this.getById({ id });

      if (!name || name.length === 0) return { error: `${single} not found.` };

      return name;

    } catch (error) {
      console.error(error);
      return { error: error.message };
    };

  };

  async delete({ id }) {

    try {

      const query = buildDeleteQuery({ id, tableName: this.tableName });

      const { name } = await this.getById({ id });

      if (!name || name.length === 0) return { error: `${single} not found.` };

      const { rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${single} not found.` };

      return name;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    };

  };

};