const { createPostSchema } = require('./schemas');

module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = createPostSchema.validate({ title, content, categoryIds });

  if (error) return res.status(400).json({ message: error.message });

  return next();
};