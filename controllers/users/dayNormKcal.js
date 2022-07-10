const { calc, getProducts, getProductsByBloodType } = require("../../services");

const dayNormKcal = async (req, res, next) => {
  const { bloodType } = req.body;

  try {
    const kcal = await calc(req.body);
    const products = await getProducts();
    const productsNotRecommended = await getProductsByBloodType(
      products,
      Number(bloodType)
    );

    return res.status(200).json({
      kcal,
      productsNotRecommended,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = dayNormKcal;
