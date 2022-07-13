const { Day, User } = require("../../models");

const {
  calculateDailyRate,
  updateDaySummary,
  createNewDay,
} = require("./utils");

const findUserByIdAndUpdateUserData = async (
  userId,
  reqBody,
  dailyRate
  // notAllowedProducts,
  // notAllowedProductsAll
) => {
  const UserData = await User.findByIdAndUpdate(
    userId,
    {
      userData: {
        ...reqBody,
        dailyRate,
        // notAllowedProducts,
        // notAllowedProductsAll,
      },
    },
    { new: true }
  );
  return UserData;
};

const getDailyRate = async (
  reqBody,
  userId
  // notAllowedProducts,
  // notAllowedProductsAll
) => {
  const dailyRate = await calculateDailyRate(reqBody);
  const currentUser = await findUserByIdAndUpdateUserData(
    userId,
    reqBody,
    dailyRate
    // notAllowedProducts,
    // notAllowedProductsAll
  );

  const currentDate = new Date().toLocaleDateString("fr-ca");
  const existingDay = currentUser.days.find(({ date }) => date === currentDate);
  if (existingDay) {
    const day = await Day.findById(existingDay.id);
    return await updateDaySummary(day, dailyRate);
  }

  return await createNewDay(currentUser, currentDate);
};

module.exports = getDailyRate;
