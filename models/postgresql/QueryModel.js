import { client } from '../../db/index.js';
import { buildDeleteQuery, buildGetQuery, buildGetQueryById, buildGetQueryByTwoId, buildInsertQuery, buildUpdateQuery } from '../../query/index.js';

export class QueryModel {

  constructor({ tableName, singleName, fieldNames }) {

    this.tableName = tableName;
    this.singleName = singleName;
    this.fieldNames = fieldNames;

  };

  getAll = async () => {

    try {

      const query = buildGetQuery({ tableName: this.tableName, fieldNames: this.fieldNames });

      const { rowCount, rows } = await client.query(query);

      if (rowCount === 0) return { error: `${this.tableName} not found.` };

      return { rowCount, rows };

    } catch (error) {
      console.error(error)
      return { error: error.message };
    };
  };

  getById = async ({ id }) => {

    try {

      const query = buildGetQueryById({ id, tableName: this.tableName, fieldNames: this.fieldNames });

      const { rows, rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${this.singleName} not found.` };

      return rows[0];

    } catch (error) {
      console.error(error);
      return { error: error.message };
    };
  };

  create = async ({ input }) => {


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

  createTwoId = async ({ input, recipe_id, ingredient_id }) => {


    try {

      const query = buildInsertQuery({ input, tableName: this.tableName });

      const productCreatedQuery = buildGetQueryByTwoId({ recipe_id, ingredient_id, tableName: this.tableName, fieldNames: this.fieldNames });

      await client.query(query);

      const { rows } = await client.query(productCreatedQuery);

      return rows[0];

    } catch (error) {
      console.error(error);
      return { error: error.message };
    }
  };

  update = async ({ id, input }) => {

    try {

      const query = buildUpdateQuery({ id, input, tableName: this.tableName });

      const { rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${this.singleName} not found.` };

      const { name } = await this.getById({ id });

      if (!name || name.length === 0) return { error: `${this.singleName} not found.` };

      return name;

    } catch (error) {
      console.error(error);
      return { error: error.message };
    };

  };

  delete = async ({ id }) => {

    try {

      const query = buildDeleteQuery({ id, tableName: this.tableName });

      const { name } = await this.getById({ id, });

      if (!name || name.length === 0) return { error: `${this.singleName} not found.` };

      const { rowCount } = await client.query(query);

      if (rowCount === 0) return { error: `${this.singleName} not found.` };

      return name;
    } catch (error) {
      console.error(error);
      return { error: error.message };
    };

  };

};