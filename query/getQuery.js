// Get

export const buildGetQuery = ({ tableName, fieldNames }) => {

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  if (!Array.isArray(fieldNames) || fieldNames.length === 0) {
    throw new Error('fieldNames must be a non-empty array of field names.');
  };

  const fieldList = fieldNames.join(', ');

  const query = {
    text: `SELECT ${fieldList} FROM ${tableName} WHERE status = true;`,
  };

  return query;

};

// Get by id

export const buildGetQueryById = ({ id, tableName, fieldNames }) => {

  if (typeof id !== 'string' || id.trim() === '') {
    throw new Error(' ID must be a non-empty string.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  if (!Array.isArray(fieldNames) || fieldNames.length === 0) {
    throw new Error('fieldNames must be a non-empty array of field names.');
  };

  const fieldList = fieldNames.join(', ');

  const query = {
    text: `SELECT ${fieldList} FROM ${tableName} WHERE id = $1 AND status = true;`,
    values: [id],
  };

  return query;
};

// Get by two id

export const buildGetQueryByTwoId = ({ recipe_id, ingredient_id, tableName, fieldNames }) => {

  console.log(recipe_id, ingredient_id);

  if (typeof recipe_id !== 'string' || recipe_id.trim() === '' || typeof ingredient_id !== 'string' || ingredient_id.trim() === '') {
    throw new Error(' ID must be a non-empty string.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  if (!Array.isArray(fieldNames) || fieldNames.length === 0) {
    throw new Error('fieldNames must be a non-empty array of field names.');
  };

  const fieldList = fieldNames.join(', ');

  const query = {
    text: `SELECT ${fieldList} FROM ${tableName} WHERE recipe_id = $1 AND ingredient_id = $2 AND status = true;`,
    values: [recipe_id, ingredient_id],
  };

  return query;
};

// Create

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

// Update

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
    text: `UPDATE ${tableName} SET ${Object.keys(input).map((key, index) => `${key} = $${index + 2}`).join(', ')} WHERE id = $1 AND status = true;`,
    values: [id, ...queryValues],
  };

  return query;

};

// Delete

export const buildDeleteQuery = ({ id, tableName }) => {

  if (typeof id !== 'string' || id.trim() === '') {
    throw new Error('ID must be a non-empty string.');
  };

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table name must be a non-empty string.');
  };

  const query = {
    text: `UPDATE ${tableName} SET status = false WHERE id = $1 AND status = true;`,
    values: [id],
  };

  return query;
};
