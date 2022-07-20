const mongoose = require("mongoose");
const { Schema } = mongoose;

const dailyNormSchema = new Schema({
  date: {
    type: String,
    // default: new Date().toLocaleDateString("fr-CA"),
    default: new Date().toLocaleDateString("cs"),
  },

  title: String,
  kcal: Number,
  weight: Number,

  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
  },
});

const ProductsPerDate = mongoose.model("productsPerDate", dailyNormSchema);

module.exports = { ProductsPerDate };
