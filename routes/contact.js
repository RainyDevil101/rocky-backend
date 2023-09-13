import { Router } from 'express';
import { createContact, deleteContact, getContact, getContacts, updateContact } from '../controllers/index.js';


export const contactRouter = Router();

// /contacts 

contactRouter.route('/')
  .get(getContacts)
  .post(createContact);

// /contacts/:id

contactRouter.route('/:id')
  .get(getContact)
  .patch(updateContact)
  .delete(deleteContact);