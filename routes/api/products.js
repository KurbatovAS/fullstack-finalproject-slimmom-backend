const express = require("express");

const { ctrlWrapper, searchValidation } = require("../../middlewares");
const { products: ctrl } = require("../../controllers");
const { validateAddProduct } = require("../../middlewares/validateAddProduct");
const { add, remove, getByDay } = require("../../controllers/products");

const router = express.Router();

router.get("/search", searchValidation, ctrlWrapper(ctrl.searchProduct));

router.post("/", validateAddProduct, add);

router.get("/:date", getByDay);

router.delete("/:productId", remove);

module.exports = router;
