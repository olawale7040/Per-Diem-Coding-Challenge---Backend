const database = require("../utils/database");
module.exports = class Pickup {
  constructor(
    id,
    name,
    title,
    country,
    state,
    city,
    zip_code,
    address,
    createdAt
  ) {
    this.id = id;
    this.name = name;
    this.title = title;
    this.country = country;
    this.state = state;
    this.city = city;
    this.zip_code = zip_code;
    this.address = address;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/pickups", [this], false);
    return this;
  }
  static allPickups() {
    return database.getData("/pickups");
  }
};
