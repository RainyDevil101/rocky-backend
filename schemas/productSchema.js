import z from 'zod';

export const productSchema = z.object({
  name: z.string()
    .min(1, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
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
      message: 'Price must not exceed 9.999.999 CLP.',
    }),

  image: z.string()
    .min(1, {
      message: 'A valid url is required.',
    })
    .max(255, {
      message: 'Image url must not exceed 255 characters.',
    }),

  fact_sheet: z.string()
    .min(1, {
      message: 'Fact sheet is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Fact sheet must not exceed 255 characters.',
    }),

  presentation: z.number()
    .min(1, {
      message: 'Presentation is required and must be a non-empty number.',
    })
    .max(9999999.99, {
      message: 'Presentation must not exceed 9,999,999.99.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

  seasonality: z.array(z.string())
    .min(1, {
      message: 'Seasonality is required and must be a non-empty array.',
    })
    .max(255, {
      message: 'Seasonality must not exceed 255 elements.'
    }),
});