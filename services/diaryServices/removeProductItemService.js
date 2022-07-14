const { DayInfo } = require("../../models");
const getCurrentDate = require("./getCurrentDay");

const removeProductItemService = async ({ forDay, productItemId }, userId) => {
  const currentDate = getCurrentDate();
  const listForDay = forDay || currentDate;
  const dateExists = await DayInfo.updateOne(
    {
      onDay: listForDay,
      userId: userId,
    },
    { $pull: { food: { _id: productItemId } } }
  );
  if (!dateExists) {
    console.log("No data for selected day and user");
  }
};

module.exports = {
  removeProductItemService,
};
