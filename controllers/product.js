const Product = require("../models/product");
const { validationResult } = require("express-validator/check");
const uniqueId = require("../utils/uuid");
const currentDate = require("../utils/dateTime");

exports.createProduct = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }
  const name = req.body.name;
  const title = req.body.title;
  const description = req.body.description;
  const unit_price = req.body.unit_price;
  const image = req.body.image;
  const product = new Product(
    (id = uniqueId),
    name,
    title,
    description,
    unit_price,
    image,
    (createdAt = currentDate)
  );
  try {
    const result = await product.save();
    res.status(201).json({
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    let products = await Product.allProducts();
    res.status(200).json({
      message: "Product fetched",
      data: products,
    });
  } catch (err) {}
};
