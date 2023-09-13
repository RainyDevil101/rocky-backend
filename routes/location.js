import { Router } from 'express';
import { createLocation, deleteLocation, getLocation, getLocations, updateLocation } from '../controllers/index.js';


export const locationRouter = Router();

// /locations 

locationRouter.route('/')
  .get(getLocations)
  .post(createLocation);

// /locations/:id

locationRouter.route('/:id')
  .get(getLocation)
  .patch(updateLocation)
  .delete(deleteLocation);