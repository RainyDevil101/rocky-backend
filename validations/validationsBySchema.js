

// export const createValidator = (schema) => async ({ input }) => {
//   return schema.safeParseAsync(input);
// };

export const validateElement = async ({ input, schema }) => {

  console.log(schema, 123);

  return schema.safeParseAsync(input);

};

export const validatePartialElement = async ({ input, schema }) => {

  return schema.partial().safeParseAsync(input);

};

