const express = require("express");
const ProductValidator = require("../validators/ProductValidator.js");
const ProductController = require("../controllers/ProductController.js");

const router = express.Router();

router.post(
  "/",
  ProductValidator.addProductValidator,
  ProductController.addProductController
);

router.put(
  "/:objectId",
  ProductValidator.editProductValidator,
  ProductController.editProductController
);

router.get("/", ProductController.getAllProductController);

router.get(
  "/:objectId",
  ProductValidator.getProductValidator,
  ProductController.getProductController
);

router.delete(
  "/:objectId",
  ProductValidator.deleteProductValidator,
  ProductController.deleteProductController
);

module.exports = router;
