export const testMiddleware = (req, res, next) => {
  console.log('Hello middleware!');
  next();
};