import { useEffect, useState } from "react";
import api from "../services/api";
import DonationCard from "../components/DonationCard";
import DonationForm from "../components/DonationForm";

function Dashboard() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await api.get("/donations");
        setDonations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchDonations();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {donations.map((donation) => (
          <DonationCard key={donation._id} donation={donation} />
        ))}
      </div>
      <DonationForm/>
    </div>
  );
}

export default Dashboard;
