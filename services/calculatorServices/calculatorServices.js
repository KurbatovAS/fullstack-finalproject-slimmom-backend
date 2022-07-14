const { Product, User } = require("../../models");

const {
  getDailyLimit,
  getNotRecommendedCategories,
} = require("../dairyServices");
const {
  newEntryValidation,
  updateEntryValidation,
} = require("../../middlewares");

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
  const userFound = await User.findOne({ _id: userID });
  if (!userFound) {
    console.log("no such user");
  }
  if (!userFound.dailyLimit) {
    const target = await publicCalc(body);
    userFound.userData.age = body.age;
    userFound.userData.currentWeight = body.currentWeight;
    userFound.userData.height = body.height;
    userFound.userData.desiredWeight = body.desiredWeight;
    userFound.userData.bloodType = body.bloodType;
    userFound.userData.bloodType = target.dailyLimit;
    userFound.userData.notAllowedProducts = target.notRecommendedCategories;

    await userFound.save();
    return target;
  }
  const validated = updateEntryValidation.validate(body);
  if (validated.error) {
    console.log("validation error");
  }
  const { currentWeight, height, age, desiredWeight, bloodType } = body;
  const dailyLimit = getDailyLimit(
    currentWeight,
    height || userFound.userData.height,
    age || userFound.userData.age,
    desiredWeight
  );

  if (bloodType) {
    const notRecommended = await Product.find(
      {
        ["groupBloodNotAllowed." + bloodType]: { $eq: true },
      },
      { categories: 1, _id: 0 }
    );
    const notRecommendedCategories =
      getNotRecommendedCategories(notRecommended);

    userFound.userData.age = body.age || userFound.userData.age;
    userFound.userData.currentWeight = body.currentWeight;
    userFound.userData.height = body.height || userFound.userData.height;
    userFound.userData.desiredWeight = body.desiredWeight;
    userFound.userData.bloodType = body.bloodType;
    userFound.userData.bloodType = dailyLimit;
    userFound.userData.notAllowedProducts = notRecommendedCategories;

    await userFound.save();
    return {
      dailyLimit,
      notRecommendedCategories,
    };
  }

  userFound.userData.currentWeight = body.currentWeight;
  userFound.userData.height = body.height || userFound.userData.height;
  userFound.userData.age = body.age || userFound.userData.age;
  userFound.userData.desiredWeight = body.desiredWeight;
  userFound.userData.dailyLimit = dailyLimit;

  await userFound.save();
  return {
    dailyLimit,
  };
};

module.exports = {
  publicCalc,
  userCalc,
};
