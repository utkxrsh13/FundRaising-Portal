const express = require("express");
const donationController = require('../controllers/donation.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router();

router.post("/create", authMiddleware.authUser, donationController.createDonation);

module.exports = router;
