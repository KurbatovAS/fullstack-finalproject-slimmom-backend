const calculateDailyRate = require("./calculateDailyRate");
const calculateDaySummary = require("./calculateDaySummary");
const calculateEatenProduct = require("./calculateEatenProduct");
const checkEatenProduct = require("./checkEatenProduct");
const createNewDay = require("./createNewDay");
const updateCurrentDay = require("./updateCurrentDay");
const updateDaySummary = require("./updateDaySummary");
const updateExistingDay = require("./updateExistingDay");

module.exports = {
  calculateDailyRate,
  calculateDaySummary,
  calculateEatenProduct,
  checkEatenProduct,
  createNewDay,
  updateCurrentDay,
  updateDaySummary,
  updateExistingDay,
};
