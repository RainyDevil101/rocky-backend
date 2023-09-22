import { QueryModel } from '../models/postgresql/index.js';
import { ingredients } from '../utils/index.js';


export class IngredientController {


  static queryModel = new QueryModel({
    tableName: ingredients.tableName,
    singleName: ingredients.singleName,
    fieldNames: ingredients.fieldNames,
  });

  static async getAll(req, res) {

    return res.json({ message: 'getAll ingredients' });
  };

  static async getById(req, res) {

    return res.json({ message: 'getById ingredient' });
  };

  static async create(req, res) {

    return res.json({ message: 'create ingredient' });
  };

  static async update(req, res) {

    return res.json({ message: 'update ingredient' });
  };

  static async delete(req, res) {

    return res.json({ message: 'delete ingredient' });
  };

};