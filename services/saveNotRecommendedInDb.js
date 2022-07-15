const { User } = require("../models");

const saveNotRecommendedInDb = async (productsNotRecommended, email) => {
  await User.findOneAndUpdate(
    { email },
    { $set: { productsNotRecommended, isCalculated: true } }
  );
};

module.exports = { saveNotRecommendedInDb };
