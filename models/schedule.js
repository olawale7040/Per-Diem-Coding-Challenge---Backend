const database = require("../utils/database");
module.exports = class Schedule {
  constructor(id, name, frequency, duration, createdAt) {
    this.id = id;
    this.name = name;
    this.frequency = frequency;
    this.duration = duration;
    this.createdAt = createdAt;
  }
  save() {
    database.push("/schedules", [this], false);
    return this;
  }
  static allSchedules() {
    return database.getData("/schedules");
  }
};
