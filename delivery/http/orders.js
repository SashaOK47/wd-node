const Router = require("express");
const router = new Router();
const OrderController = require("../../controllers/OrderController");

router.post("/orders", OrderController.createOrder);
router.get("/orders", OrderController.getAllOrders);
router.get("/orders/:uuid", OrderController.getOneOrder);
router.delete("/orders/:uuid", OrderController.cancelOrder);
router.get("/status/:uuid", OrderController.getStatus);
router.put("/status/:uuid", OrderController.changeStatus);

module.exports = router;
