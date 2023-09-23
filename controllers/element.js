import { QueryModel } from '../models/postgresql/index.js';
import { validateElement, validatePartialElement } from '../validations/validationsBySchema.js';

export class ElementController {

  constructor({ tableName, singleName, fieldNames, schema }) {
    this.tableName = tableName;
    this.singleName = singleName;
    this.fieldNames = fieldNames;
    this.schema = schema;
    this.queryModel = new QueryModel({
      tableName: tableName,
      singleName: singleName,
      fieldNames: fieldNames,
    });
  };

  getAll = async (req, res) => {

    const elements = await this.queryModel.getAll();

    if (elements.error) return res.status(400).json({ error: elements.error });

    return res.json(elements);
  };

  getById = async (req, res) => {

    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Invalid id.' });
    };

    const element = await this.queryModel.getById({ id });

    if (element.error) return res.status(400).json({ error: element.error });

    return res.json(element);
  };

  create = async (req, res) => {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validateElement({ input, schema: this.schema });

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const elementCreated = await this.queryModel.create({ input: resultValidation.data });

    if (elementCreated.error) return res.status(400).json({ error: elementCreated.error });

    return res.json({ message: `${elementCreated.name} created.` });

  };

  update = async (req, res) => {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialElement({ input, schema: this.schema });

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const elementUpdated = await this.queryModel.update({ id, input: resultValidation.data });

    if (elementUpdated.error) return res.status(400).json({ error: elementUpdated.error });

    return res.json({ message: `${elementUpdated} updated.` });

  };

  delete = async (req, res) => {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const elementDeleted = await this.queryModel.delete({ id });

    if (elementDeleted.error) return res.status(400).json({ error: elementDeleted.error });

    return res.json({ message: `${elementDeleted} deleted.` });

  };

};