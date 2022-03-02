const Router = require("express");
const router = new Router();
const OrderController = require("../../controllers/OrderController");

router.post("/orders", OrderController.create);
router.get("/orders", OrderController.getAll);
router.get("/orders/:uuid", OrderController.getOne);

module.exports = router;
