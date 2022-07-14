const getDailyLimit = (weight, height, age, desiredWeight) => {
  const dailyLimit =
    10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - desiredWeight);
  return Math.round(dailyLimit);
};
module.exports = { getDailyLimit };
