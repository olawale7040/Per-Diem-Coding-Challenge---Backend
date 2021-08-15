const database = require("../utils/database");
module.exports = class Frequency {
  constructor(id, name, frequency, createdAt) {
    this.id = id;
    this.name = name;
    this.frequency = frequency;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/frequency", [this], false);
    return this;
  }
};
