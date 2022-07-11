const Joi = require("joi");

const searchValidation = (req, res, next) => {
  const searchSchema = Joi.object({
    product: Joi.string().required().min(3),
  });

  const validation = searchSchema.validate(req.query);

  if (validation.error) {
    const [{ message }] = validation.error.details;

    return res
      .status(400)
      .json({ message: `field ${message.replace(/"/g, "")}` });
  } else {
    next();
  }
};

module.exports = searchValidation;
