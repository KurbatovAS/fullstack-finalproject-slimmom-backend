const { Product, User } = require("../../models");

const {
  getDailyLimit,
  getNotRecommendedCategories,
} = require("../diaryServices");
const { newEntryValidation } = require("../../middlewares");

const publicCalc = async (body) => {
  const validated = newEntryValidation.validate(body);
  if (validated.error) {
    console.log("validation error");
  }
  const { currentWeight, height, age, desiredWeight, bloodType } = body;
  const dailyLimit = getDailyLimit(currentWeight, height, age, desiredWeight);
  const notRecommended = await Product.find(
    {
      ["groupBloodNotAllowed." + bloodType]: { $eq: true },
    },
    { categories: 1, _id: 0 }
  );
  const notRecommendedCategories = getNotRecommendedCategories(notRecommended);
  return {
    dailyLimit,
    notRecommendedCategories,
  };
};

const userCalc = async (body, userID) => {
  const userFound = await User.findOne({ _id: userID }, { password: 0 });
  if (!userFound) {
    console.log("no such user");
  }
  const target = await publicCalc(body);
  userFound.userData.currentWeight = body.currentWeight;
  userFound.userData.height = body.height;
  userFound.userData.age = body.age;
  userFound.userData.desiredWeight = body.desiredWeight;
  userFound.userData.bloodType = body.bloodType;
  userFound.userData.dailyRate = target.dailyRate;
  userFound.notRecommended = target.notRecommendedCategories;
  await userFound.save();
  return userFound;
};

module.exports = {
  publicCalc,
  userCalc,
};
