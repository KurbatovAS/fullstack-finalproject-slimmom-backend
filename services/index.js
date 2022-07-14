const { calc } = require("./calc");
const { getProducts } = require("./getProducts");
const { getProductsByBloodType } = require("./getProductsByBloodType");
const { getListFoundProducts } = require("./getListFoundProducts");
const { getSaveDayNorm } = require("./getSaveDayNorm");
const { saveNotRecommendedInDb } = require("./saveNotRecommendedInDb");

module.exports = {
  calc,
  getProducts,
  getProductsByBloodType,
  getListFoundProducts,
  getSaveDayNorm,
  saveNotRecommendedInDb,
};
