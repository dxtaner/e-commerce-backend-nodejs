const CartItem = require("../models/CartItem");

const addItemToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;

    const cartItem = new CartItem({ productId, quantity, userId });
    await cartItem.save();

    res.status(201).json({ success: true, cartItem });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const userId = req.userId;
    const cartItems = await CartItem.find({ userId }).populate("productId");
    res.json({ success: true, cartItems });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

const getAllItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find({}).populate("productId");
    res.json({ success: true, cartItems });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = {
  addItemToCart,
  getCartItems,
  getAllItems,
};
