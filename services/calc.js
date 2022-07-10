const calc = async (params) => {
  const { height, age, currentWeight, desiredWeight } = params;

  const kcalories =
    10 * Number(currentWeight) +
    6.25 * Number(height) -
    5 * Number(age) -
    161 -
    10 * (Number(currentWeight) - Number(desiredWeight));

  return Math.round(kcalories);
};

module.exports = { calc };
