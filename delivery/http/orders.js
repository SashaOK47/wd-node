const Router = require("express");
const router = new Router();
const OrderController = require("../../controllers/OrderController");

router.post("/orders", OrderController.create);
router.get("/orders", OrderController.getAll);
router.get("/orders/:uuid", OrderController.getOne);
router.get("/status/:uuid", OrderController.getStatus);
router.put("/status/:uuid", OrderController.changeStatus);

module.exports = router;
