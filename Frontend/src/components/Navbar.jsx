import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between">
        <Link to="/dashboard" className="font-bold text-xl">
          Fundraising Portal
        </Link>
        <div>
          <Link to="/dashboard" className="mr-4 hover:underline">
            Dashboard
          </Link>
          <Link to="/admin/dashboard" className="mr-4 hover:underline">
            Admin Panel
          </Link>
          <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
