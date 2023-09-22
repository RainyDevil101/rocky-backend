export const productsInfo = {
  tableName: 'products',
  singleName: 'Product',
  fieldNames: ['id', 'name', 'description', 'price', 'image', 'fact_sheet', 'presentation', 'seasonality', 'package_weight', 'serving_size', 'serving_per_container', 'calories_energy', 'protein', 'total_fat', 'carbohydrates', 'sugar', 'sodium'],
};
export const locationsInfo = {
  tableName: 'locations',
  singleName: 'Location',
  fieldNames: ['id', 'name', 'address', 'latitude', 'longitude'],
};
export const contactsInfo = {
  tableName: 'contacts',
  singleName: 'Contact',
  fieldNames: ['id', 'name', 'email', 'message'],
};
export const recipesInfo = {
  tableName: 'recipes',
  singleName: 'Recipe',
  fieldNames: ['id', 'name', 'instructions', 'image', 'id_product'],
};

export const ingredients = {
  tableName: 'ingredients',
  singleName: 'Ingredient',
  fieldNames: ['id', 'name'],
};

export const recipe_ingredients = {
  tableName: 'recipe_ingredients',
  singleName: 'Recipe ingredient',
  fieldNames: ['recipe_id', 'ingredient_id', 'quantity'],
};