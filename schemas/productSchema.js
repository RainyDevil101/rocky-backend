import z from 'zod';

export const productSchema = z.object({
  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.'
    }),

  description: z.string()
    .min(1, {
      message: 'Description is required and must be a non-empty string',
    })
    .max(510, {
      message: 'Description must not exceed 510 characters',
    }),

  price: z.number()
    .min(1, {
      message: 'Price must be greater than or equal to 1 CLP.',
    })
    .max(9999999, {
      message: 'Price must not exceed 9.999.999 CLP.'
    }),

  image: z
    .string(255, {
      invalid_type_error: 'Image must be a string.',
      required_error: 'Image is required.',
    })
    .min(1),
  fact_sheet: z
    .string(255, {
      invalid_type_error: 'Fact sheet must be a string.',
      required_error: 'Fact sheet is required.',
    })
    .min(1),
  presentation: z
    .number({
      invalid_type_error: 'Presentation must be a number',
      required_error: 'Presentation is required.'
    })
    .min(0)
    .max(9999999.99)
    .transform(value => parseFloat(value.toFixed(2))),
  seasonality: z
    .array(z.string(), {
      invalid_type_error: 'Seasonality must be an array.',
      required_error: 'Seasonality es required.'
    })
});