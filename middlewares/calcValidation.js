const Joi = require("joi");

const calcValidation = (req, res, next) => {
  const calcSchema = Joi.object({
    height: Joi.number().required(),
    age: Joi.number().required().min(16),
    currentWeight: Joi.number().required(),
    desiredWeight: Joi.number().required(),
    bloodType: Joi.string().required(),
  });

  const validation = calcSchema.validate(req.body);

  if (validation.error) {
    const [{ context }] = validation.error.details;
    const { label } = context;

    return res
      .status(400)
      .json({ message: `missing required '${label}' field` });
  } else {
    next();
  }
};

module.exports = calcValidation;
