import crypto from 'node:crypto';

export const buildGetQueryById = ({ id, tableName }) => {

  if (typeof id !== 'string' || id.trim() === '') {
    throw new Error(' ID must be a non-empty string.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };  

  const query = {
    text: `SELECT id, name, description, price, image, fact_sheet, presentation, seasonality FROM ${tableName} WHERE id = $1 AND status = true;`,
    values: [id],
  };

  return query;
};