const { body } = require("express-validator");

const addItemToCartValidator = [
  body("productId").notEmpty().withMessage("Product ID is required"),
  body("quantity").isInt({ min: 1 }).withMessage("Quantity must be at least 1"),
];

const getItemsValidator = [];

module.exports = {
  addItemToCartValidator,
  getItemsValidator,
};
