const Product = require("../../../models/product");

const checkEatenProduct = async (productId) => {
  try {
    const eatenProduct = await Product.findById(productId);
    if (!eatenProduct) {
      console.log("Product not found");
    }
    return eatenProduct;
  } catch (error) {
    console.log("error");
  }
};

module.exports = { checkEatenProduct };
