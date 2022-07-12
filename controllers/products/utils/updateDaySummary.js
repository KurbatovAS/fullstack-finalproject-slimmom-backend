const Day = require("../../../models/day");
const { calculateDaySummary } = require("./calculateDaySummary");

const findDayByIdAndUpdateDaySummary = async (
  dayId,
  daySummary,
  unique,
  random
) => {
  return await Day.findByIdAndUpdate(
    dayId,
    {
      daySummary,
    },
    { new: true }
  );
};

const updateDaySummary = async (day, dailyRate) => {
  const { id, eatenProducts } = day;
  const kcal = eatenProducts.reduce((sumCalories, product) => {
    return sumCalories + product.kcal;
  }, 0);

  const daySummary = await calculateDaySummary(kcal, dailyRate);
  return await findDayByIdAndUpdateDaySummary(id, daySummary);
};
module.exports = { updateDaySummary };
