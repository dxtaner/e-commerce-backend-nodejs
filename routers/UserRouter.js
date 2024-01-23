// userRoutes.js
const { Router } = require("express");
const router = Router();

const UserController = require("../controllers/UserController.js");
const UserValidator = require("../validators/UserValidator.js");

router.get(
  "/:objectId",
  UserValidator.getUserValidator,
  UserController.getUser
);
router.get("/", UserController.getAllUsers);

module.exports = router;
