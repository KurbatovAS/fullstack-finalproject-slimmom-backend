const { Schema, model } = require("mongoose");

const productSchema = Schema({
  categories: {
    type: Array,
  },
  weight: {
    type: Number,
  },
  title: {
    type: Object,
  },
  calories: {
    type: Number,
  },
  groupBloodNotAllowed: {
    type: Array,
    default: null,
  },
});

const Product = model("product", productSchema);

module.exports = { Product };
