const { Order, Product } = require("../models");

class OrderController {
  async create(req, res) {
    const { productUuid, customerName, status } = req.body;
    try {
      const product = await Product.findOne({ where: { uuid: productUuid } });
      const order = await Order.create({
        customerName,
        status,
        productId: product.id,
      });
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  }
  async getAll(req, res) {
    try {
      const orders = await Order.findAll({ include: "product" });
      return res.json(orders);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getOne(req, res) {
    const uuid = req.params.uuid;
    try {
      const order = await Order.findOne({
        include: "product",
        where: { uuid },
      });
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}
module.exports = new OrderController();
