const { Day } = require("../../models");
const updateCurrentDay = require("./utils/updateCurrentDay");

const deleteProductPerDay = async (dayId, eatenProductId) => {
  const currentDay = await Day.findById(dayId);

  const { eatenProducts, daySummary } = currentDay;

  const updatedEatenProducts = eatenProducts.filter((product) => {
    return String(product._id) !== eatenProductId;
  });
  const updatedDayData = await updateCurrentDay(
    dayId,
    updatedEatenProducts,
    daySummary
  );
  return { updatedDayData, updatedEatenProducts };
};

const deleteProduct = async (req, res, next) => {
  const { dayId, eatenProductId } = req.body;
  try {
    const { updatedEatenProducts, updatedDayData } = await deleteProductPerDay(
      dayId,
      eatenProductId
    );
    const eatenProducts = updatedEatenProducts;
    return res.status(201).json({ updatedDayData, eatenProducts });
  } catch (error) {
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
};

module.exports = deleteProduct;
