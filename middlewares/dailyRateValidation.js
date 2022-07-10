const Joi = require("joi");
const { Unauthorized } = require("http-errors");

const validateGetDailyRate = (req, res, next) => {
  const schema = Joi.object({
    weight: Joi.number().required(),
    height: Joi.number().required(),
    age: Joi.number().required(),
    desiredWeight: Joi.number().required(),
    bloodType: Joi.number().required(),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    throw new Unauthorized("Not authorized");
  }
  next();
};

module.exports = validateGetDailyRate;
