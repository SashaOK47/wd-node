const { Order, Product } = require("../models");
const sendMessageStatus = require("../mailer.js");

class OrderController {
  async createOrder(req, res) {
    const { productUuid, customerName, status = "created", email } = req.body;
    try {
      const product = await Product.findOne({ where: { uuid: productUuid } });
      const order = await Order.create({
        customerName,
        status,
        productId: product.id,
      });
      sendMessageStatus(email, "You have successfully placed an order!");
      return res.json(order);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err.message);
    }
  }
  async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll({ include: "product" });
      return res.json(orders);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getOneOrder(req, res) {
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
  async cancelOrder(req, res) {
    const uuid = req.params.uuid;
    try {
      const order = await Order.findOne({ where: { uuid } });
      await order.destroy();
      return res.json({ message: "Order canceled" });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async getStatus(req, res) {
    const uuid = req.params.uuid;
    try {
      const order = await Order.findOne({
        where: { uuid },
      });
      return res.json(order.status);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
  async changeStatus(req, res) {
    const uuid = req.params.uuid;
    const { email } = req.body;
    const status = req.query.status; // http://localhost:4000/api/status/ea10cad0-c624-4261-81a3-a1e9b71caa10?status=delivery
    try {
      const order = await Order.findOne({ where: { uuid } });
      order.status = status;
      await order.save();
      sendMessageStatus(
        email,
        `Your order status has been changed to - ${status}`
      );
      return res.json(order.status);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}
module.exports = new OrderController();
