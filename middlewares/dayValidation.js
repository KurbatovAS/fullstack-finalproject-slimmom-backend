const Joi = require("joi");

const validateDeleteProduct = (req, res, next) => {
    const schema = Joi.object({
      dayId: Joi.string().required(),
      eatenProductId: Joi.string().required(),
    });
    const validationResult = schema.validate(req.body);
    if (validationResult.error) {
      console.log("error");
    }
    next();
};
module.exports =validateDeleteProduct;
