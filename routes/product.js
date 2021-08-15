const express = require("express");
const productController = require("../controllers/product");
const router = express.Router();
const { body } = require("express-validator/check");

// GET /api/products
router.get("/products", productController.getProducts);

// GET /api/products
router.post(
  "/product",
  [
    body("name").trim().isLength({ min: 5 }),
    body("title").trim().isLength({ min: 5 }),
    body("description").trim().isLength({ min: 5 }),
    body("unit_price").trim().isLength({ min: 2 }),
  ],
  productController.createProduct
);

module.exports = router;
