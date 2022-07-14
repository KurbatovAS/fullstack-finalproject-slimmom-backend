const { User } = require("../models");

const saveNotRecommendedInDb = async (productsNotRecommended, email) => {
  await User.findOneAndUpdate({ email }, { $set: { productsNotRecommended } });
};

module.exports = { saveNotRecommendedInDb };
