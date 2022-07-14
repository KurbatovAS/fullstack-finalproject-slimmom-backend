const Joi = require("joi");

const updateEntryValidation = Joi.object({
  height: Joi.number().integer(),
  age: Joi.number().integer(),
  currentWeight: Joi.number().required(),
  desiredWeight: Joi.number().required(),
  bloodType: Joi.any().valid(1, 2, 3, 4),
});

module.exports = { updateEntryValidation };
