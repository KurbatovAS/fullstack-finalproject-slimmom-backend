const Joi = require("joi");

const validateAddProduct = (req, res, next) => {
  const schemaAuth = Joi.object({
    title: Joi.string().required().min(3),
    weight: Joi.number().required(),
    kcal: Joi.number().required(),
  });

  const validation = schemaAuth.validate(req.body);

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

module.exports = { validateAddProduct };
