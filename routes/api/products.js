const express = require("express");

const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { products: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getProductsByBloodGroup));

// router.get("/:productsId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

router.post("/", ctrlWrapper(ctrl.add));

// router.delete("/:productId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

// router.put("/:productId", async (req, res, next) => {
//   res.json({ message: "template message" });
// });

module.exports = router;
