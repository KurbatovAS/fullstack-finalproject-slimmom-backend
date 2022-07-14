const express = require("express");
const router = express.Router();

const {
  //   auth,
  ctrlWrapper,
  searchValidation,
} = require("../../middlewares");

const { searchProduct, add } = require("../../controllers/products");

router.get("/search", searchValidation, ctrlWrapper(searchProduct));

router.post("/", ctrlWrapper(add));

module.exports = router;
