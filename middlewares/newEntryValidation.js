const Joi = require("joi");

const newEntryValidation = Joi.object({
  height: Joi.number().integer().required(),
  age: Joi.number().integer().required(),
  currentWeight: Joi.number().required(),
  desiredWeight: Joi.number().required(),
  bloodType: Joi.any().valid(1, 2, 3, 4).required(),
});

module.exports = { newEntryValidation };
