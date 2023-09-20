export const productsInfo = {
  tableName: 'products',
  singleName: 'product',
  fieldNames: ['id', 'name', 'description', 'price', 'image', 'fact_sheet', 'presentation', 'seasonality'],
};
export const locationsInfo = {
  tableName: 'locations',
  singleName: 'location',
  fieldNames: ['id', 'name', 'address', 'latitude', 'longitude'],
};
export const contactsInfo = {
  tableName: 'contacts',
  singleName: 'contact',
  fieldNames: ['id', 'name', 'email', 'message'],
};
export const recipessInfo = {
  tableName: 'recipes',
  singleName: 'recipe',
  fieldNames: ['id', 'name', 'ingredients', 'instrucctions', 'image', 'id_product'],
};