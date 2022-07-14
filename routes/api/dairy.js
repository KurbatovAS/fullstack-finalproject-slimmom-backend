const express = require("express");
const router = express.Router();

const { products: ctrl } = require("../../controllers");
const { ctrlWrapper } = require("../../middlewares");
// const { auth } = require("../../middlewares/auth");

// router.use(auth);

router.get("/:forDay", ctrlWrapper(ctrl.getProductItems));

router.delete("/:forDay?/:productItemId", ctrlWrapper(ctrl.removeProductItem));

module.exports = router;
