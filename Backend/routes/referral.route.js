const express = require("express");
const { createReferral, getReferralsByUser } = require("../controllers/referral.controller");
const router = express.Router();

router.post("/create", createReferral);
router.get("/:userId", getReferralsByUser);

module.exports = router;
