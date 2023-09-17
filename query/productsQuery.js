// Get products

export const buildGetQuery = ({ tableName }) => {

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  const query = {
    text: `SELECT id, name, description, price, image, fact_sheet, presentation, seasonality FROM ${tableName} WHERE status = true;`,
  };

  return query;

};

// Get product by id

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

// Create product

export const buildInsertQuery = ({ input, tableName }) => {

  if (typeof input !== 'object' || Object.keys(input).length === 0) {
    throw new Error('Input must be a non-empty array.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  const queryValues = Object.values(input);

  const placeHolders = Array.from({ length: queryValues.length }, (_, index) => `$${index + 1}`);

  const query = {
    text: `INSERT INTO ${tableName} (${Object.keys(input).join(', ')}) VALUES (${placeHolders.join(', ')});`,
    values: queryValues,
  };

  return query;
};

// Update product

export const buildUpdateQuery = ({ id, input, tableName }) => {

  if (typeof id !== 'string' || id.trim() === '') {
    throw new Error('ID must be a non-empty string.');
  };

  if (typeof input !== 'object' || Object.keys(input).length === 0) {
    throw new Error('Input must be a non-empty object.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table name must be a non-empty string.');
  };

  const queryValues = Object.values(input);

  const query = {
    text: `UPDATE ${tableName} SET ${Object.keys(input).map((key, index) => `${key} = $${index + 2}`).join(', ')} WHERE id = $1;`,
    values: [id, ...queryValues],
  };

  return query;

};