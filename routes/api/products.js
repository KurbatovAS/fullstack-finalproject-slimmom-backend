const express = require("express");
const router = express.Router();

const {
  //   auth,
  ctrlWrapper,
  searchValidation,
  deleteProductPerDayValidation,
  infoPerDayValidation,
} = require("../../middlewares");

const { deleteProductForDay, getInfoPerDay } = require("../../controllers/day");

const { searchProduct, add } = require("../../controllers/products");

router.get("/search", searchValidation, ctrlWrapper(searchProduct));

router.post("/", ctrlWrapper(add));

router.get("/", ctrlWrapper(getInfoPerDay));

router.delete(
  "/",
  //   auth,
  deleteProductPerDayValidation,
  ctrlWrapper(deleteProductForDay)
);

router.post(
  "/info",
  //   auth,
  infoPerDayValidation,
  ctrlWrapper(getInfoPerDay)
);

module.exports = router;
