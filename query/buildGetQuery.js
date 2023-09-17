export const buildGetQuery = ({ tableName }) => {

  if (typeof tableName !== 'string' || tableName.trim() === '') {
    throw new Error('Table must be a non-empty array.');
  };

  const query = {
    text: `SELECT id, name, description, price, image, fact_sheet, presentation, seasonality FROM ${tableName} WHERE status = true;`,
  };

  return query;

};