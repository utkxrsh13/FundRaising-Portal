const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user", 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true, 
    min: [1, "Donation amount must be at least 1"] 
  },
  timestamp: { 
    type: Date, 
    default: Date.now 
  },
  referredBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user", 
    default: null 
  },
  message: { 
    type: String, 
    default: "Thank you for your support!"
  },
  status: { 
    type: String, 
    enum: ["Completed", "Pending", "Failed"], 
    default: "Completed" 
  }
});

module.exports = mongoose.model("Donation", DonationSchema);
