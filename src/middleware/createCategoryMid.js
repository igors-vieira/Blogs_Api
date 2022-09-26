const { createCategorySchema } = require('./schemas');

module.exports = (req, res, next) => {
  const { name } = req.body;
  const { error } = createCategorySchema.validate({ name });

  if (error) return res.status(400).json({ message: error.message });

  return next();
};