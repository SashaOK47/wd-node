const Router = require("express");
const router = new Router();
const ProductController = require("../../controllers/ProductController");

router.post("/products", ProductController.create);
router.post("/products", ProductController.update);
router.post("/products/:uuid", ProductController.delete);

module.exports = router;
