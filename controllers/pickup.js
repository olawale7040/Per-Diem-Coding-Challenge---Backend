const Pickup = require("../models/pickup");
const { validationResult } = require("express-validator/check");
const uniqueId = require("../utils/uuid");
const currentDate = require("../utils/dateTime");

const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
  return `${param}: ${msg}`;
};

exports.createPickup = async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  if (!errors.isEmpty()) {
    error.statusCode = 422;
    error.data = errors.array();
    next(error);
    // throw error;
  } else {
    const name = req.body.name;
    const title = req.body.title;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const zip_code = req.body.zip_code;
    const address = req.body.address;

    const pickup = new Pickup(
      (id = uniqueId),
      name,
      title,
      country,
      state,
      city,
      zip_code,
      address,
      (createdAt = currentDate)
    );
    try {
      const result = await pickup.save();
      res.status(201).json({
        message: "Pickup created successfully",
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

exports.fetchPickups = async (req, res, next) => {
  try {
    let pickups = await Pickup.allPickups();
    res.status(200).json({
      message: "Pickups fetched",
      data: pickups,
    });
  } catch (err) {}
};
