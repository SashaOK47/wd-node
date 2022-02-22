const Router = require("express");
const router = new Router();
const ProductController = require("../../controllers/ProductController");

router.post("/products", ProductController.create);
router.put("/products", ProductController.update);
router.delete("/products/:uuid", ProductController.delete);

module.exports = router;
