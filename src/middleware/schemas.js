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

const createPostSchema = Joi.object({
  title: Joi.string().required().messages({ 'string.empty': messageErro }),
  content: Joi.string().required().messages({ 'string.empty': messageErro }),
  categoryIds: Joi.array(),
});

module.exports = {
  loginSchema,
  registerUserSchema,
  createCategorySchema,
  createPostSchema,
};
// title, content, categoryIds