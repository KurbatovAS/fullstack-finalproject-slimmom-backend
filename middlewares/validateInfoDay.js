const Joi = require("joi");

const infoPerDayValidation = (req, res, next) => {
  const schema = Joi.object({
    date: Joi.date().required(),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    console.log("error");
  }
  next();
};

module.exports = infoPerDayValidation;
