const Product = require("../models/product");

exports.addProduct = (request, res, next) => {
  let product = new Product(request.body);
  try {
    product.save();
    res.status(204).json({
      message: "Product created successfully",
    });
  } catch (err) {}
};

exports.getProduct = (request, response, next) => {
  try {
    let products = Product.allProducts();
    res.status(200).json({
      message: "Product fetched",
      data: products,
    });
  } catch (err) {}
};
