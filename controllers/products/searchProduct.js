const { getProducts, getListFoundProducts } = require("../../services");

const searchProduct = async (req, res, next) => {
  const { product } = req.query;
  const normalizedQuery = product.toLowerCase();

  try {
    const products = await getProducts();
    const foundProducts = await getListFoundProducts(products, normalizedQuery);

    return res.status(200).json(foundProducts);
  } catch (e) {
    next(e);
  }
};

module.exports = searchProduct;
