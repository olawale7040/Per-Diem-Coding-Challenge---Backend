const express = require("express");
const scheduleController = require("../controllers/schedule");
const router = express.Router();
const { body } = require("express-validator/check");

// GET /api/schedules
router.get("/schedules", scheduleController.fetchSchedules);

// GET /api/schedule
router.post(
  "/schedule",
  [
    body("name").trim().isLength({ min: 5 }),
    body("frequency").trim().isLength({ min: 3 }),
    body("duration").trim().isLength({ min: 1 }),
  ],
  scheduleController.createSchedule
);

module.exports = router;
