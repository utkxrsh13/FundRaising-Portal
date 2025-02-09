// const Donation = require("../models/Donation");
const Donation = require('../models/donation.model')

exports.createDonation = async (req, res) => {
  const { amount, referredBy } = req.body;
  const userId = req.user.id;

  try {
    const newDonation = new Donation({ userId, amount, referredBy });
    await newDonation.save();
    res.status(201).json({ message: "Donation created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
