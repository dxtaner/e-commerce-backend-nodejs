const express = require("express");
const router = express.Router();

const productRouter = require("./ProductRouter.js");
const authRouter = require("./AuthRouter.js");
const userRouter = require("./UserRouter.js");
const cartItemRouter = require("./CartItemRouter.js");
const fileRouter = require("./FileRouter.js");
const searchRouter = require("./SearchRouter.js");

const AuthValidator = require("../validators/AuthValidator.js");

router.use("/auth", authRouter);
router.use("/user", AuthValidator.authCheck, userRouter);
router.use("/product", AuthValidator.authCheck, productRouter);
router.use("/cartitem", AuthValidator.authCheck, cartItemRouter);
router.use("/file", AuthValidator.authCheck, fileRouter);
router.use("/search", searchRouter);

module.exports = router;
