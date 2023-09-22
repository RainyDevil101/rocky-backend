import z from 'zod';

export const productSchema = z.object({
  name: z.string()
    .min(0, {
      message: 'Name is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Name must not exceed 255 characters.',
    }),

  description: z.string()
    .min(0, {
      message: 'Description is required and must be a non-empty string',
    })
    .max(510, {
      message: 'Description must not exceed 510 characters',
    }),

  price: z.number()
    .min(0, {
      message: 'Price must be greater than or equal to 0 CLP.',
    })
    .max(9999999, {
      message: 'Price must not exceed 9.999.999 CLP.',
    }),

  image: z.string()
    .min(0, {
      message: 'A valid url is required.',
    })
    .max(255, {
      message: 'Image url must not exceed 255 characters.',
    }),

  fact_sheet: z.string()
    .min(0, {
      message: 'Fact sheet is required and must be a non-empty string.',
    })
    .max(255, {
      message: 'Fact sheet must not exceed 255 characters.',
    }),

  presentation: z.number()
    .min(0, {
      message: 'Presentation is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Presentation must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

  seasonality: z.array(z.string())
    .min(0, {
      message: 'Seasonality is required and must be a non-empty array.',
    })
    .max(255, {
      message: 'Seasonality must not exceed 255 elements.'
    }),

  package_weight: z.number()
    .min(0, {
      message: 'Package weight is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Package weight must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

  serving_size: z.number()
    .min(0, {
      message: 'Serving size is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Serving size must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

  serving_per_container: z.number()
    .int()
    .min(0, {
      message: 'Integer Column is required and must be a positive integer.',
    })
    .max(100000.00, {
      message: 'Integer Column must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),
    
  calories_energy: z.number()
    .int()
    .min(0, {
      message: 'Calories energy is required and must be a positive integer.',
    })
    .max(100000.00, {
      message: 'Calories energy must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

    protein: z.number()
    .min(0, {
      message: 'Protein is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Protein must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

    total_fat: z.number()
    .min(0, {
      message: 'Total fat is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Total fat must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

    carbohydrates: z.number()
    .min(0, {
      message: 'Carbohydrates is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Carbohydrates must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

    sugar: z.number()
    .min(0, {
      message: 'Sugar is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Sugar must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),

    sodium: z.number()
    .min(0, {
      message: 'Sodium is required and must be a non-empty number.',
    })
    .max(100000.00, {
      message: 'Sodium must not exceed 100000.00.',
    })
    .transform(value => parseFloat(value.toFixed(2))),
});