const express = require("express");
const productController = require("../controllers/test");
const router = express.Router();

// GET /api/test/products
router.get("/products", productController.getProducts);
module.exports = router;
