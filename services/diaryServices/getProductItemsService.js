const { DayInfo } = require("../../models");

const getProductItemsService = async (date, userId) => {
  const dateExists = await DayInfo.findOne({ onDay: date, userId: userId });
  if (!dateExists) {
    console.log("No data for selected day and user");
  }
  return dateExists;
};

module.exports = {
  getProductItemsService,
};
