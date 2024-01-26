const { body, param } = require("express-validator");

const addProductValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("image").notEmpty().withMessage("Image is required"),
];

const editProductValidator = [
  param("objectId").notEmpty().withMessage("Product ID is required"),
  ...addProductValidator,
];

const getProductValidator = [
  param("objectId").notEmpty().withMessage("Product ID is required"),
];

const deleteProductValidator = getProductValidator;

module.exports = {
  addProductValidator,
  editProductValidator,
  getProductValidator,
  deleteProductValidator,
};
