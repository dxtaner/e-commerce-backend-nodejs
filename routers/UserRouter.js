// userRoutes.js
const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController.js");
const UserValidator = require("../validators/UserValidator.js");

router.get(
  "/:objectId",
  UserValidator.getUserValidator,
  UserValidator.validate,
  UserController.getUser
);

router.get(
  "/",
  UserValidator.getAllUsersValidator,
  UserValidator.validate,
  UserController.getAllUsers
);

module.exports = router;
