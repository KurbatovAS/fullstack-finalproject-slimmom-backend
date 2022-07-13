const { Day, User } = require("../../../models");

const { calculateEatenProduct } = require("./calculateEatenProduct");
const { calculateDaySummary } = require("./calculateDaySummary");

const findUserByIdAndUpdateDays = async (userId, day) => {
  const { _id, date } = day;
  const updateDays = await User.findByIdAndUpdate(userId, {
    $push: { days: { id: _id, date } },
  });
  return updateDays;
};

const createNewDay = async (currentUser, date, eatenProduct, weight) => {
  const { dailyRate } = currentUser.userData;
  const userId = currentUser._id;
  const productCalculated = eatenProduct
    ? calculateEatenProduct(eatenProduct, weight)
    : null;

  const kcal = productCalculated ? productCalculated.kcal : 0;

  const newDay = {
    eatenProducts: productCalculated ? [productCalculated] : [],
    date,
    daySummary: calculateDaySummary(kcal, dailyRate),
  };

  const currentDay = await Day.create(newDay);

  await findUserByIdAndUpdateDays(userId, currentDay);

  return currentDay;
};

module.exports = { createNewDay };
