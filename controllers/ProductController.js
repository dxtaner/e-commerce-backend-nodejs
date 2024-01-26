const Product = require("../models/Product");

const addProductController = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const editProductController = async (req, res) => {
  const { objectId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(
      objectId,
      { ...req.body, updated_at: Date.now() },
      {
        new: true,
      }
    );
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getProductController = async (req, res) => {
  const { objectId } = req.params;
  try {
    const product = await Product.findById(objectId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const deleteProductController = async (req, res) => {
  const { objectId } = req.params;
  try {
    const product = await Product.findByIdAndDelete(objectId);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, error: "Product not found" });
    }
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  addProductController,
  editProductController,
  getAllProductController,
  getProductController,
  deleteProductController,
};
