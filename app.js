const express = require("express");
const compression = require("compression");

const mainRouter = require("./routers/MainRouter.js");

const app = express();

app.use(compression());
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(express.json({ limit: "1mb" }));


app.get("/", (req, res) => {
  res.send("Hello, My App!");
});

module.exports = app;
