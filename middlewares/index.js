const validation = require("./validation");
const ctrlWrapper = require("./ctrlWrapper");
const auth = require("./auth");
const searchValidation = require("./searchValidation");
const newEntryValidation = require("./newEntryValidation");
const updateEntryValidation = require("./updateEntryValidation");
const calcValidation = require("./calcValidation");

module.exports = {
  validation,
  ctrlWrapper,
  auth,
  newEntryValidation,
  searchValidation,
  updateEntryValidation,
  calcValidation,
};
