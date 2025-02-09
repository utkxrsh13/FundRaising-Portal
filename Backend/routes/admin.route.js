const express = require("express");
const { getAllUsers, getAllDonations, getReferralStats } = require("../controllers/admin.controller");
const router = express.Router();

router.get("/users", getAllUsers);
router.get("/donations", getAllDonations);
router.get("/referrals/stats", getReferralStats);

module.exports = router;
