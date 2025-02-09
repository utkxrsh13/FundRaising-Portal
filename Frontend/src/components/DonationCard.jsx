import React from "react";

function DonationCard({ donation }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      <h3 className="text-lg font-bold mb-2">Donation Details</h3>
      <p><strong>Donor:</strong> {donation.userId.fullname}</p>
      <p><strong>Amount:</strong> ${donation.amount}</p>
      <p><strong>Date:</strong> {new Date(donation.date).toLocaleDateString()}</p>
      <p><strong>Message:</strong> {donation.message || "No message provided"}</p>
    </div>
  );
}

export default DonationCard;
