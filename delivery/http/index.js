const express = require("express");
const routerProducts = require("./products.js");
const routerOrders = require("./orders.js");

const app = express();
app.use(express.json());

app.use("/api", routerProducts);
app.use("/api", routerOrders);

module.exports = app;
