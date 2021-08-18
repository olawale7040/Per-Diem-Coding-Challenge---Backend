const database = require("../utils/database");
module.exports = class Order {
  constructor(id, user_id, products, schedule, pickup_location, createdAt) {
    this.id = id;
    this.user_id = user_id;
    this.products = products;
    this.products = schedule;
    this.pickup_location = pickup_location;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/orders", [this], false);
    return this;
  }
};
