const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user" 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  referredBy: String
});

module.exports = mongoose.model("Donation", DonationSchema);
