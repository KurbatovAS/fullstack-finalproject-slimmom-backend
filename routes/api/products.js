const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.get("/:productsId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:productId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:productId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
