// validators/UserValidator.js
const { body, param, query, validationResult } = require("express-validator");
const User = require("../models/User");

const loginValidator = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];

const registerValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .custom(async (value) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) {
        return Promise.reject("Email is already in use");
      }
      return true;
    }),
  body("age").optional({ nullable: true }).isInt().withMessage("Invalid age"),
  body("password").notEmpty().withMessage("Password is required"),
];

const getUserValidator = [
  param("objectId").isMongoId().withMessage("Invalid objectId"),
];

const getAllUsersValidator = [
  query("page").optional().isInt({ min: 1 }).withMessage("Invalid page number"),
  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 })
    .withMessage("Invalid limit value"),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  return res.status(400).json({ errors: errors.array() });
};
module.exports = {
  loginValidator,
  registerValidator,
  validate,
  getUserValidator,
  getAllUsersValidator,
};
