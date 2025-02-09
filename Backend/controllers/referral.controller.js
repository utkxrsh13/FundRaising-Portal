const Referral = require("../models/refereal.model");
const user = require("../models/user.model");

// Track a new referral
exports.createReferral = async (req, res) => {
  const { referrerId, referredUserId, referralCode } = req.body;

  try {
    const referrer = await user.findById(referrerId);
    if (!referrer) return res.status(404).json({ message: "Referrer not found" });

    const newReferral = new Referral({
      referrerId,
      referredUserId,
      referralCode,
    });

    await newReferral.save();
    res.status(201).json({ message: "Referral recorded successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all referrals by a user
exports.getReferralsByUser = async (req, res) => {
  try {
    const referrals = await Referral.find({ referrerId: req.params.userId }).populate("referredUserId");
    res.status(200).json(referrals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
