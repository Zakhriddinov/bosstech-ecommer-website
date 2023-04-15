const { Router } = require("express");
const { getProducts } = require("../controllers/productController");
const router = Router();

// public routes:

router.get("/", getProducts);

module.exports = router;