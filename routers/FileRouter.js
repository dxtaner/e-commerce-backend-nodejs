const express = require("express");
const multer = require("multer");
const FileController = require("../controllers/FileController.js");

const router = express.Router();
const upload = multer();

router.post("/upload", upload.single("file"), FileController.uploadFile);

router.get("/:filename", FileController.getFile);

module.exports = router;
