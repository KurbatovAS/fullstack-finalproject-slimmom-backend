const { ProductsPerDate } = require("../models");

const removeProduct = async (userId, { productId }) => {
  return await ProductsPerDate.findOneAndRemove({
    _id: productId,
    owner: userId,
  });
};

module.exports = { removeProduct };
