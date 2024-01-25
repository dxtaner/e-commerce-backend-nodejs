// validators/AuthValidator.js

const jwt = require("jsonwebtoken");
require("dotenv").config();

const authCheck = (req, res, next) => {
  // Get the token from the request headers
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Access denied. Token not provided or invalid format.",
    });
  }

  // Extract the token from the "Bearer " prefix
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the user ID to the request for future use in controllers
    req.userId = decoded.userId;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: "Invalid token." });
  }
};

module.exports = {
  authCheck,
};
