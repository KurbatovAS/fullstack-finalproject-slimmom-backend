const express = require("express");
const router = express.Router();

const { auth, dailyRateValidation } = require("../../middlewares");

const { day: ctrl } = require("../../controllers");

router.post("/", dailyRateValidation, ctrl.getDailyRate);

router.post(
  "/:userId",
  auth,
  dailyRateValidation,
  ctrl.getDailyRateUserController
);

module.exports = router;
