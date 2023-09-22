import { QueryModel } from '../models/postgresql/index.js';
import { ingredientsInfo } from '../utils/index.js';
import { validateIngredient, validatePartialIngredient } from '../validations/validationsBySchema.js';


export class IngredientController {


  static queryModel = new QueryModel({
    tableName: ingredientsInfo.tableName,
    singleName: ingredientsInfo.singleName,
    fieldNames: ingredientsInfo.fieldNames,
  });

  static async getAll(req, res) {

    const ingredients = await IngredientController.queryModel.getAll();

    if (ingredients.error) return res.status(400).json({ error: ingredients.error });

    return res.json(ingredients);

  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const ingredient = await IngredientController.queryModel.getById({ id });

    if (ingredient.error) return res.status(400).json({ error: ingredient.error });

    return res.json(ingredient);

  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validateIngredient(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const ingredientCreated = await IngredientController.queryModel.create({ input: resultValidation.data });

    if (ingredientCreated.error) return res.status(400).json({ error: ingredientCreated.error });

    return res.json({ message: `Ingredient ${ingredientCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialIngredient(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const ingredientUpdated = await IngredientController.queryModel.update({ id, input: resultValidation.data });

    if (ingredientUpdated.error) return res.status(400).json({ error: ingredientUpdated.error });

    return res.json({ message: `Ingredient ${ingredientUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const ingredientDeleted = await IngredientController.queryModel.delete({ id });

    if (ingredientDeleted.error) return res.status(400).json({ error: ingredientDeleted.error });

    return res.json({ message: `Ingredient ${ingredientDeleted} deleted.` });

  };

};