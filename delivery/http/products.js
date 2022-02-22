const Router = require("express");
const router = new Router();

const response = {
  error: null,
  products: [],
};

// insert
router.post("/products", async (req, res) => {
  let product = {};
  const { title, photo, price, manufacturer } = req.body;

  if (!title.trim() || !manufacturer.trim) {
    response.error = "All fields are required";
  } else if (typeof price !== "number") {
    response.error = "The price field must be a number";
  } else if (price < 0) {
    response.error = "The price field cannot be negative";
  } else {
    product = {
      id: response.products.length + 1,
      title,
      photo: null,
      price,
      manufacturer,
    };
    response.products.push(product);
  }

  if (response.error) {
    res.status(500).json(response.error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(response.products);
});

// select *
router.get("/products", async (req, res) => {
  if (response.error) {
    res.status(500).json(response.error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(response.products);
});

// update
router.put("/products", async (req, res) => {});

// delete
router.delete("/products/:id", async (req, res) => {});

module.exports = router;
