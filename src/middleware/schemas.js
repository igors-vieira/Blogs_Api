const Joi = require('joi');

const schema = Joi.object({
  email: Joi
  .string()
  .email()
  .min(3)
  .required()
  .messages({
    'string.empty': 'Some required fields are missing',
  }),

  password: Joi.string().min(6).required()
  .messages({
    'string.empty': 'Some required fields are missing',
  }),
});

module.exports = schema;