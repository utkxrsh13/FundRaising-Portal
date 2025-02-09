const express = require("express");
const { createDonation, getDonations, getAllDonations } = require("../controllers/donation.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

// Route to create a donation
router.post("/createdonation", authMiddleware.authUser, createDonation);

// Route to get donations of the logged-in user
router.get("/", authMiddleware.authUser, getDonations);

// Route to get all donations (admin only)
router.get("/all", authMiddleware.authUser, getAllDonations);

module.exports = router;
