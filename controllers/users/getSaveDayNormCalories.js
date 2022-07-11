const {
  getProducts,
  getSaveDayNorm,
  getProductsByBloodType,
  saveNotRecommendedInDb,
} = require("../../services");
// const getProductsByBloodType = require("../../services");

const getSaveDayNormCalories = async (req, res, next) => {
  const { bloodType } = req.body;
  const { email } = req.user;

  try {
    const kcal = await getSaveDayNorm(req.body, email);
    const products = await getProducts();
    const productsNotRecommended = await getProductsByBloodType(
      products,
      bloodType
    );
    await saveNotRecommendedInDb(productsNotRecommended, email);
    res.status(200).json({ kcal, productsNotRecommended });
  } catch (error) {
    next(error);
  }
};

module.exports = getSaveDayNormCalories;
