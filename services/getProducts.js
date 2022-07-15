const { Product, ProductsPerDate } = require("../models");

const getProducts = async () => {
  const products = await Product.find();

  return products;
};

const calcKcal = async (body) => {
  const { kcal, weight } = body;
  const res = Math.round((kcal / 100) * weight);

  return res;
};

const addProduct = async (userId, body) => {
  const calc = await calcKcal(body);

  return await ProductsPerDate.create({ ...body, kcal: calc, owner: userId });
};

module.exports = { getProducts, addProduct };
