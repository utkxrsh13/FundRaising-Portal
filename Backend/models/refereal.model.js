const mongoose = require("mongoose");

const ReferralSchema = new mongoose.Schema({
  referrerId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user", 
    required: true 
  },
  referredUserId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user", 
    required: true 
  },
  timestamp: { type: Date, default: Date.now },
  referralCode: String,
});

module.exports = mongoose.model("Referral", ReferralSchema);
