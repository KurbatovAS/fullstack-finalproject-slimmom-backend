const express = require("express");

const { ctrlWrapper, searchValidation } = require("../../middlewares");
const { products: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/search", searchValidation, ctrlWrapper(ctrl.searchProduct));

router.post("/", ctrlWrapper(ctrl.add));

router.get("/", ctrlWrapper(ctrl.getProductsForDay));

router.delete("/:productId", ctrlWrapper(ctrl.deleteProductForDay));

module.exports = router;
