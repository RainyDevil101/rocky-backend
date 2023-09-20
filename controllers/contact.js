import { QueryModel } from '../models/postgresql/index.js';
import { contactsInfo } from '../utils/index.js';


export class ContactController {


  static queryModel = new QueryModel({
    tableName: contactsInfo.tableName,
    singleName: contactsInfo.singleName,
    fieldNames: contactsInfo.fieldNames,
  });

  static async getAll(req, res) {

    return res.json({ message: 'getAll' });
  };

  static async getById(req, res) {

    return res.json({ message: 'getById' });
  };

  static async create(req, res) {

    return res.json({ message: 'create' });
  };

  static async update(req, res) {

    return res.json({ message: 'update' });
  };

  static async delete(req, res) {

    return res.json({ message: 'delete' });
  };

};