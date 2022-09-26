const Joi = require('joi');

const messageErro = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().required().messages({ 'string.empty': messageErro }),
  password: Joi.string().messages({ 'string.empty': messageErro }),
});

const registerUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const createCategorySchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  loginSchema,
  registerUserSchema,
  createCategorySchema,
};

// displayName, email, password, image