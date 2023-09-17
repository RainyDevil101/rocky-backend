export const buildInsertQuery = ({ input, tableName }) => {

  if (typeof input !== 'object' || Object.keys(input).length === 0) {
    throw new Error('"Input" must be a non-empty array.');
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