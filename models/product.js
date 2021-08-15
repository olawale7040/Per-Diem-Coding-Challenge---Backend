const database = require("../utils/database");
module.exports = class Product {
  constructor(id, name, title, description, unit_price, image, createdAt) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.description = description;
    this.unit_price = unit_price;
    this.image = image;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/products", [this], false);
    return this;
  }
  static allProducts() {
    return database.getData("/products");
  }
};
