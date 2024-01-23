const express = require("express");
const AuthController = require("../controllers/AuthController.js");
const UserValidator = require("../validators/UserValidator.js");

const router = express.Router();

router.post(
  "/login",
  UserValidator.loginValidator,
  AuthController.loginController
);

router.post(
  "/register",
  UserValidator.registerValidator,
  AuthController.registerController
);

module.exports = router;
