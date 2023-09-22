import { QueryModel } from '../models/postgresql/index.js';
import { contactsInfo } from '../utils/index.js';
import { validateContact, validatePartialContact } from '../validations/validationsBySchema.js';


export class ContactController {


  static queryModel = new QueryModel({
    tableName: contactsInfo.tableName,
    singleName: contactsInfo.singleName,
    fieldNames: contactsInfo.fieldNames,
  });

  static async getAll(req, res) {

    const contacts = await ContactController.queryModel.getAll();

    if (contacts.error) return res.status(400).json({ error: contacts.error });

    return res.json(contacts);

  };

  static async getById(req, res) {

    const { id } = req.params;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const contact = await ContactController.queryModel.getById({ id });

    if (contact.error) return res.status(400).json({ error: contact.error });

    return res.json(contact);

  };

  static async create(req, res) {

    const input = req.body;

    if (!input || input.length === 0) return res.status(400).json({
      error: 'Body needed.'
    });

    const resultValidation = await validateContact(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const contactCreated = await ContactController.queryModel.create({
      input: resultValidation.data
    });

    if (contactCreated.error) return res.status(400).json({
      error: contactCreated.error
    });

    return res.json({ message: `Contact ${contactCreated.name} created.` });

  };

  static async update(req, res) {

    const { id } = req.params;
    const input = req.body;

    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    if (!input || input.length === 0) return res.status(400).json({ error: 'Body needed.' });

    const resultValidation = await validatePartialContact(input);

    if (resultValidation.error) return res.status(400).json({ error: JSON.parse(resultValidation.error.message) });

    const contactUpdated = await ContactController.queryModel.update({ id, input: resultValidation.data });

    if (contactUpdated.error) return res.status(400).json({ error: contactUpdated.error });

    return res.json({ message: `Contact ${contactUpdated} updated.` });

  };

  static async delete(req, res) {

    const { id } = req.params;
    if (!id) return res.status(400).json({ error: 'Invalid id.' });

    const contactDeleted = await ContactController.queryModel.delete({ id });

    if (contactDeleted.error) return res.status(400).json({ error: contactDeleted.error });

    return res.json({ message: `Contact ${contactDeleted} deleted.` });

  };

};