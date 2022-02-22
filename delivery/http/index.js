const express = require("express");
const router = require("./products.js");

const app = express();
app.use(express.json());

app.use("/api/products", router);

module.exports = app;
