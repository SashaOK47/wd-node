const { Product } = require("../models");

class ProductController {
  async create(req, res) {
    const { title, photo, price, manufacturer } = req.body;
    try {
      const product = await Product.create({
        title,
        photo,
        price,
        manufacturer,
      });
      return res.json(product);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const products = await Product.findAll();
      return res.json(products);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
  async update(req, res) {}
  async delete(req, res) {}
}
module.exports = new ProductController();
