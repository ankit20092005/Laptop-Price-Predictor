import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MonitorSmartphone } from "lucide-react";

function Navbar() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold text-blue-600">
          <MonitorSmartphone />
            Laptop Predictor
        </h1>
        

        <div className="flex gap-5 items-center">
          <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                  isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
              }
          >
              Dashboard
          </NavLink>

          <NavLink to="/predict" className={({ isActive }) =>
                  isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
              }>
            Predict
          </NavLink>

          <NavLink to="/history" className={({ isActive }) =>
                  isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
              }>
            History
          </NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
                  isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
              }>
            Profile
          </NavLink>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;