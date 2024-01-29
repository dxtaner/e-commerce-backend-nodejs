const express = require("express");
const router = express.Router();

const CartItemController = require("../controllers/CartItemController.js");
const CartItemValidator = require("../validators/CartItemValidator.js");

router.post(
  "/",
  CartItemValidator.addItemToCartValidator,
  CartItemController.addItemToCart
);

router.get(
  "/",
  CartItemValidator.getItemsValidator,
  CartItemController.getCartItems
);

router.get(
  "/all",
  CartItemValidator.getItemsValidator,
  CartItemController.getAllItems
);

module.exports = router;
