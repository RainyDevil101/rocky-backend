import { QueryModel } from '../models/postgresql/index.js';
import { recipeIngredients } from '../utils/index.js';


export class RecipeIngredientsController {


  static queryModel = new QueryModel({
    tableName: recipeIngredients.tableName,
    singleName: recipeIngredients.singleName,
    fieldNames: recipeIngredients.fieldNames,
  });

  static async getAll(req, res) {

    return res.json({ message: 'getAll recipe ingredients' });
  };

  static async getById(req, res) {

    return res.json({ message: 'getById recipe ingredient' });
  };

  static async create(req, res) {

    return res.json({ message: 'create recipe ingredient' });
  };

  static async update(req, res) {

    return res.json({ message: 'update recipe ingredient' });
  };

  static async delete(req, res) {

    return res.json({ message: 'delete recipe ingredient' });
  };

};