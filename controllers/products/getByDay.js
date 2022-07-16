const { getProductsByDay } = require("../../services");
const {
  getRemain,
  getKcalPerDay,
} = require("../../services/calculatorServise");

const getByDay = async (req, res, next) => {
  try {
    const { date } = req.params;
    // console.log("req.params", req.params);
    // console.log("req.user", req.user);
    const { _id, email, dayNorm, productsNotRecommended } = req.user;

    const products = await getProductsByDay(_id, date);
    const totalKcalPerDay = await getKcalPerDay(products);
    const { kcalRemain, percentage } = await getRemain(
      dayNorm,
      totalKcalPerDay
    );

    res.status(200).json({
      email,
      date,
      products,
      dayNorm: Number(dayNorm),
      totalKcalPerDay,
      kcalRemain,
      percentage,
      productsNotRecommended,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getByDay;
