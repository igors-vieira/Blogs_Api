const { loginSchema } = require('./schemas');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate({
    email,
    password,
  });

  if (error) return res.status(error.status).json({ message: error.message });

  return next();
};