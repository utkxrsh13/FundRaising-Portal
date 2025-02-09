const Donation = require('../models/donation.model');

exports.createDonation = async (req, res) => {
  const { amount, referredBy, message } = req.body;
  const userId = req.user.id; // Assuming the user is authenticated and their ID is in req.user.id

  // Validate amount
  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Donation amount must be at least 1" });
  }

  // Create a new donation entry
  try {
    const newDonation = new Donation({
      userId,
      amount,
      referredBy,
      message,
      status: "Completed",  // Set status to "Completed" by default, or it can be dynamically assigned
    });

    // Save the donation to the database
    await newDonation.save();

    // Respond with success message and donation details
    res.status(201).json({
      message: "Donation created successfully",
      donation: newDonation,
    });
  } catch (err) {
    // Handle errors
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getDonations = async (req, res) => {
  try {
    // Fetch all donations for the current user (using userId)
    const donations = await Donation.find({ userId: req.user.id }).populate('userId', 'name email');

    // Return all donations
    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch donations" });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    // Only accessible by admins
    const donations = await Donation.find().populate('userId referredBy', 'name email');

    res.json(donations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch all donations" });
  }
};
