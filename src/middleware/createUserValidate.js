const { registerUserSchema } = require('./schemas');

module.exports = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = registerUserSchema.validate({ displayName, email, password });

  if (error) return res.status(400).json({ message: error.message });

  return next();
};