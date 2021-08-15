const database = require("../utils/database");
module.exports = class User {
  constructor(id, email, password, createdAt) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/users", [this], false);
    return this;
  }
};
