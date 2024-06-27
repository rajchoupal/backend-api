const Joi = require('joi');

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});

const updateUserSchema = Joi.object({
  email: Joi.string().email(),
  name: Joi.string(),
  age: Joi.number(),
  city: Joi.string(),
  zipCode: Joi.string(),
  userId: Joi.string().required(),
});

const userIdSchema = Joi.object({
  userId: Joi.string().required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  userIdSchema,
};
