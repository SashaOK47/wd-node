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
  async update(req, res) {
    const uuid = req.params.uuid;
    const { title, photo, price, manufacturer } = req.body;
    try {
      const product = await Product.findOne({ where: { uuid } });
      product.title = title;
      product.photo = photo;
      product.price = price;
      product.manufacturer = manufacturer;

      await product.save();
      return res.json(product);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    const uuid = req.params.uuid;
    try {
      const product = await Product.findOne({ where: { uuid } });
      await product.destroy();
      return res.json({ message: "Product deleted!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}
module.exports = new ProductController();
