const { Product } = require("../models");

const getProducts = async () => {
  const products = await Product.find().sort("title");

  return products;
};

module.exports = { getProducts };
