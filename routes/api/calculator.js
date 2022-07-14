const express = require("express");
const router = express.Router();

const {
  getPublicCalculatorInfo,
  getUserCalculatorInfo,
} = require("../../controllers/products");
const { ctrlWrapper } = require("../../middlewares");

router.patch("/public", ctrlWrapper(getPublicCalculatorInfo));

router.patch("/user", ctrlWrapper(getUserCalculatorInfo));

module.exports = router;
