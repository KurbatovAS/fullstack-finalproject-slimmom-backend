const Joi = require("joi");

const validateDate = (req, res, next) => {
  const schemaDate = Joi.object({
    date: Joi.string()
      .required()
      // eslint-disable-next-line prefer-regex-literals
      .pattern(new RegExp("^[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]$")),
  });

  const validation = schemaDate.validate(req.params);

  if (validation.error) {
    const [{ message }] = validation.error.details;

    return res
      .status(400)
      .json({ message: `field ${message.replace(/"/g, "")}` });
  } else {
    next();
  }
};

module.exports = { validateDate };
