import z from 'zod';

export const locationSchema = z.object({
  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
    }),

  address: z.string()
    .min(1, {
      message: 'Address is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Address must not exceed 255 characters.',
    }),

  latitude: z.number({
    invalid_type_error: 'Latitude must be numeric.',
    required_error: 'Latitude is required.',
  }),

  longitude: z.number({
    invalid_type_error: 'Longitude must be numeric.',
    required_error: 'Longitude is required.',
  }),
});