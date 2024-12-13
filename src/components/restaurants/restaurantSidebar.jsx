import React, { useContext, useState } from "react";
import logo from "../../assets/craveio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faGauge,
  faHandHoldingDollar,
  faUtensils,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link for navigation

const RestaurantSidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
 
  const menuItems = [
    { name: "Dashboard", icon: faGauge, link: "/restaurant" },
    { name: "Your Dishes", icon: faUtensils, link: "/restaurant/dishes" },
    { name: "Your Orders", icon: faHandHoldingDollar, link: "/orders" },
    { name: "Your Wallet", icon: faWallet, link: "/wallet" },
    { name: "Customer Reviews", icon: faCrown, link: "/reviews" },
  ];

  return (
    <aside className="w-64 bg-white border-r fixed h-full shadow-lg">
      {/* Logo Section */}
      <div className="p-6 flex items-center justify-center border-b">
        <img src={logo} alt="Craveio" className="w-36" />
      </div>

      {/* Navigation Section */}
      <nav className="mt-6">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              {/* Using Link for navigation */}
              <Link
                to={item.link}
                className={`group flex items-center px-6 py-3 rounded-md cursor-pointer transition-all ${
                  activeMenu === item.name
                    ? "bg-yellow-500 text-white"
                    : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                }`}
                onClick={() => setActiveMenu(item.name)}
              >
                <span
                  className={`mr-4 text-xl ${
                    activeMenu === item.name
                      ? "text-white"
                      : "text-gray-400 group-hover:text-yellow-500"
                  }`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </span>
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade Section */}
      <div className="mt-10 px-6">
        <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-yellow-700">
          <p className="text-sm font-medium">
            Upgrade your account to get free vouchers!
          </p>
          <button className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition-all">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RestaurantSidebar;
