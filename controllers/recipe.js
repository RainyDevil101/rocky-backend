import { QueryModel } from '../models/postgresql/index.js';
import { recipesInfo } from '../utils/index.js';
import { validatePartialRecipe, validateRecipe } from '../validations/validationsBySchema.js';


export class RecipeController {


  static queryModel = new QueryModel({
    tableName: recipesInfo.tableName,
    singleName: recipesInfo.singleName,
    fieldNames: recipesInfo.fieldNames,
  });

  static async getAll(req, res) {

    const recipes = await RecipeController.queryModel.getAll();

    if (recipes.error) return res.status(400).json({ error: recipes.error });

    return res.json(recipes);
  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Invalid id.' });
    };

    const recipe = await RecipeController.queryModel.getById({ id });

    if (recipe.error) return res.status(400).json({ error: recipe.error });

    return res.json(recipe);
  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validateRecipe(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const recipeCreated = await RecipeController.queryModel.create({ input: resultValidation.data });

    if (recipeCreated.error) return res.status(400).json({ error: recipeCreated.error });

    return res.json({ message: `Recipe ${recipeCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialRecipe(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const recipeUpdated = await RecipeController.queryModel.update({ id, input: resultValidation.data });

    if (recipeUpdated.error) return res.status(400).json({ error: recipeUpdated.error });

    return res.json({ message: `Recipe ${recipeUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const recipeDeleted = await RecipeController.queryModel.delete({ id });

    return res.json({ message: `Product ${recipeDeleted} deleted.` });
    
  };

};