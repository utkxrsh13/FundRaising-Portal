import { useState } from "react";
import api from "../services/api";

function DonationForm() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleDonation = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/donations", { amount, message });
      setSuccessMessage(response.data.message);
      setAmount("");
      setMessage("");
    } catch (err) {
      alert(err.response?.data?.error || "Failed to make a donation");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Make a Donation</h2>
      {successMessage && <p className="text-green-600 mb-4">{successMessage}</p>}
      <form onSubmit={handleDonation} className="bg-white p-4 rounded shadow-md">
        <label className="block mb-2">Donation Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="border p-2 w-full mb-4"
        />
        <label className="block mb-2">Message (Optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Donate Now
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
