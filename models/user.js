const { Schema, model } = require("mongoose");

const Joi = require("joi");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: 3,
      max: 254,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      min: 3,
      max: 254,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 8,
      max: 100,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiRegisterSchema = Joi.object({
  name: Joi.string().min(3).max(254),
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string()
    .required()
    .alphanum()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,100}$")),
});

const joiLoginSchema = Joi.object({
  email: Joi.string()
    .min(3)
    .max(254)
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string()
    .required()
    .alphanum()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,100}$")),
});

const User = model("user", userSchema);

module.exports = { User, joiRegisterSchema, joiLoginSchema };
