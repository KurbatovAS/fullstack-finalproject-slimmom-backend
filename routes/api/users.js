const express = require("express");

const router = express.Router();

const { validation, ctrlWrapper, auth } = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");
const { users: ctrl } = require("../../controllers");

router.post(
  "/register",
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register)
);
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.logIn));
router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", auth, ctrlWrapper(ctrl.logOut));

module.exports = router;
