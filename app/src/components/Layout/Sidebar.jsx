import { NavLink } from "react-router-dom";
import { Home, Truck, Settings, PieChart } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
        <li className="mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${isActive ? "active" : ""}`
            }
          >
            <Truck className="h-5 w-5" />
            <span>Traffic Monitor</span>
          </NavLink>
        </li>
        <li className="mb-4">
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${isActive ? "active" : ""}`
            }
          >
            <PieChart className="h-5 w-5" />
            <span>Analytics</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center space-x-3 ${isActive ? "active" : ""}`
            }
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
