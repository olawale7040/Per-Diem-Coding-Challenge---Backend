const database = require("../utils/database");
const products = [];
module.exports = class Product {
  constructor(name, title, description, unit_price, image) {
    this.name = name;
    this.title = title;
    this.description = description;
    this.unit_price = unit_price;
    this.image = image;
  }
  save() {
    database.push("/products", this);
  }
  static allProducts() {
    products = database.getData("/products");
    return products;
  }
};
