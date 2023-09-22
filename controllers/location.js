import { QueryModel } from '../models/postgresql/index.js';
import { locationsInfo } from '../utils/index.js';
import { validateLocation, validatePartialLocation } from '../validations/validationsBySchema.js';


export class LocationController {


  static queryModel = new QueryModel({
    tableName: locationsInfo.tableName,
    singleName: locationsInfo.singleName,
    fieldNames: locationsInfo.fieldNames,
  });

  static async getAll(req, res) {

    const locations = await LocationController.queryModel.getAll();

    if (locations.error) return res.status(400).json({ error: locations.error });

    return res.json(locations);

  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const location = await LocationController.queryModel.getById({ id });

    if (location.error) return res.status(400).json({ error: location.error });

    return res.json(location);
  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validateLocation(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const locationCreated = await LocationController.queryModel.create({ input: resultValidation.data });

    if (locationCreated.error) return res.status(400).json({ error: locationCreated.error });

    return res.json({ message: `Location ${locationCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialLocation(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const locationUpdated = await LocationController.queryModel.update({ id, input: resultValidation.data });

    if (locationUpdated.error) return res.status(400).json({ error: locationUpdated.error });

    return res.json({ message: `Product ${locationUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const locationDeleted = await LocationController.queryModel.delete({ id });

    if (locationDeleted.error) return res.status(400).json({ error: locationDeleted.error });

    return res.json({ message: `Location ${locationDeleted} deleted.` });
    
  };

};