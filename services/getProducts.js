const { Product } = require("../models");

const getProducts = async () => {
  const products = await Product.find();

  return products;
};

module.exports = { getProducts };
