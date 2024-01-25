// controllers/AuthController.js

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const emailService = require("../adapters/MailAdapter"); // Adjust the path as needed

require("dotenv").config();

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Check if the password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
    }

    // Generate a JWT token for authentication
    const token = generateToken(user._id);

    // Send login notification email
    await emailService.sendLoginNotification(user.email);

    return res.json({
      success: true,
      user: user,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const registerController = async (req, res) => {
  try {
    const { name, email, age, password } = req.body;

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, age, password: hashedPassword });
    await newUser.save();

    // Generate a JWT token for authentication
    const token = generateToken(newUser._id);

    // Send welcome email
    await emailService.sendWelcomeEmail(newUser.email, newUser.name);

    return res.json({
      success: true,
      message: "Registration successful",
      token,
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  loginController,
  registerController,
};
