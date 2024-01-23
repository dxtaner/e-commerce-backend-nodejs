const express = require("express");
const SearchController = require("../controllers/SearchController.js");
const router = express.Router();

router.get("/", SearchController.searchController);

module.exports = router;
