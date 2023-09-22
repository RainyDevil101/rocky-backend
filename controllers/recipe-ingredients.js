import { QueryModel } from '../models/postgresql/index.js';
import { recipeIngredientsInfo } from '../utils/index.js';
import { validatePartialRecipeIngredient, validateRecipeIngredient } from '../validations/validationsBySchema.js';


export class RecipeIngredientsController {


  static queryModel = new QueryModel({
    tableName: recipeIngredientsInfo.tableName,
    singleName: recipeIngredientsInfo.singleName,
    fieldNames: recipeIngredientsInfo.fieldNames,
  });

  static async getAll(req, res) {

    const recipesIngredients = await RecipeIngredientsController.queryModel.getAll();

    if (recipesIngredients.error) return res.status(400).json({ error: recipesIngredients.error });

    return res.json(recipesIngredients);

  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const recipeIngredients = await RecipeIngredientsController.queryModel.getById({ id });

    if (recipeIngredients.error) return res.status(400).json({ error: recipeIngredients.error });

    return res.json(recipeIngredients);

  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({
      error: 'Body needed.'
    });

    const resultValidation = await validateRecipeIngredient(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const { recipe_id, ingredient_id } = resultValidation.data;

    const recipeIngredientsCreated = await RecipeIngredientsController.queryModel.createTwoId({
      input: resultValidation.data, recipe_id, ingredient_id
    });

    if (recipeIngredientsCreated.error) return res.status(400).json({
      error: recipeIngredientsCreated.error
    });

    return res.json({ message: `Relation created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialRecipeIngredient(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const recipeIngredientsUpdated = await RecipeIngredientsController.queryModel.update({ id, input: resultValidation.data });

    if (recipeIngredientsUpdated.error) return res.status(400).json({ error: recipeIngredientsUpdated.error });

    return res.json({ message: `Recipe ingredients ${recipeIngredientsUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const recipeIngredientsDeleted = await RecipeIngredientsController.queryModel.delete({ id });

    if (recipeIngredientsDeleted.error) return res.status(400).json({ error: recipeIngredientsDeleted.error });

    return res.json({ message: `Recipe ingredients ${recipeIngredientsDeleted} deleted.` });

  };

};