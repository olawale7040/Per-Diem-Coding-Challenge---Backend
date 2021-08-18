const express = require("express");
const pickupController = require("../controllers/pickup");
const router = express.Router();
const { body } = require("express-validator/check");

// GET /api/pickups
router.get("/pickups", pickupController.fetchPickups);

// POST /api/pickup
router.post(
  "/pickup",
  [
    body("name").trim().isLength({ min: 5 }).withMessage("Name too short"),
    body("title").trim().isLength({ min: 5 }),
    body("country").trim().isLength({ min: 3 }),
    body("state").trim().isLength({ min: 3 }),
    body("city").trim().isLength({ min: 3 }),
    body("zip_code").trim().isLength({ min: 2 }),
    body("address").trim().isLength({ min: 5 }),
  ],
  pickupController.createPickup
);

module.exports = router;
