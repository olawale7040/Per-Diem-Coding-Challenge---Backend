const Schedule = require("../models/schedule");
const { validationResult } = require("express-validator/check");
const uniqueId = require("../utils/uuid");
const currentDate = require("../utils/dateTime");

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  return `${param}: ${msg}`;
};

exports.createSchedule = async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    error.data = errors.array();
    next(error);
  } else {
    const name = req.body.name;
    const frequency = req.body.frequency;
    const duration = req.body.duration;
    const schedule = new Schedule(
      (id = uniqueId),
      name,
      frequency,
      duration,
      (createdAt = currentDate)
    );
    try {
      const result = await schedule.save();
      res.status(201).json({
        message: "Schedule created successfully",
        data: result,
      });
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};

exports.fetchSchedules = async (req, res, next) => {
  try {
    let schedules = await Schedule.allSchedules();
    res.status(200).json({
      message: "Schedule fetched",
      data: schedules,
    });
  } catch (err) {}
};
