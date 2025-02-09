const user = require("../models/User");
const Donation = require("../models/Donation");
const Referral = require("../models/Referral");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await user.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find({}).populate("userId");
    res.status(200).json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReferralStats = async (req, res) => {
  try {
    const referrals = await Referral.find({});
    res.status(200).json({ totalReferrals: referrals.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
