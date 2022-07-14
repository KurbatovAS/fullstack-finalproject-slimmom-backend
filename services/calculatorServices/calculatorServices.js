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
    userFound.currentWeight = body.currentWeight;
    userFound.height = body.height;
    userFound.age = body.age;
    userFound.desiredWeight = body.desiredWeight;
    userFound.bloodType = body.bloodType;
    userFound.dailyLimit = target.dailyLimit;
    userFound.notRecommended = target.notRecommendedCategories;

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
    height || userFound.height,
    age || userFound.age,
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

    userFound.currentWeight = body.currentWeight;
    userFound.height = body.height || userFound.height;
    userFound.age = body.age || userFound.age;
    userFound.desiredWeight = body.desiredWeight;
    userFound.dailyLimit = dailyLimit;
    userFound.bloodType = body.bloodType;
    userFound.notRecommended = notRecommendedCategories;

    await userFound.save();
    return {
      dailyLimit,
      notRecommendedCategories,
    };
  }

  userFound.currentWeight = body.currentWeight;
  userFound.height = body.height || userFound.height;
  userFound.age = body.age || userFound.age;
  userFound.desiredWeight = body.desiredWeight;
  userFound.dailyLimit = dailyLimit;

  await userFound.save();
  return {
    dailyLimit,
  };
};

module.exports = {
  publicCalc,
  userCalc,
};
