import React from "react";
import logo from "../assets/craveio.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faGauge, faHandHoldingDollar, faUtensils, faWallet,  } from "@fortawesome/free-solid-svg-icons";

const RestaurantSidebar = () => {
  return (
    <aside className="w-64 bg-white border-r fixed h-full shadow-lg">
      <div className="p-6 flex items-center justify-center border-b">
        <img src={logo} alt="Craveio" className="w-36" />
      </div>

      <nav className="mt-6">
        <ul className="space-y-2">
          <li className="group flex items-center px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md cursor-pointer transition-all">
            <span className="mr-4 text-xl text-gray-400 group-hover:text-yellow-500">
            <FontAwesomeIcon icon={faGauge} style={{color: "#eeab1b",}} />
            </span>
            <span className="font-medium">Dashboard</span>
          </li>
          <li className="group flex items-center px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md cursor-pointer transition-all">
            <span className="mr-4 text-xl text-gray-400 group-hover:text-yellow-500">
            <FontAwesomeIcon icon={faUtensils} style={{color: "#eeab1b",}} />
            </span>
            <span className="font-medium">Your Dishes</span>
          </li>
          <li className="group flex items-center px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md cursor-pointer transition-all">
            <span className="mr-4 text-xl text-gray-400 group-hover:text-yellow-500">
            <FontAwesomeIcon icon={faHandHoldingDollar} style={{color: "#eeab1b",}} />
            </span>
            <span className="font-medium">Your Orders</span>
          </li>
          <li className="group flex items-center px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md cursor-pointer transition-all">
            <span className="mr-4 text-xl text-gray-400 group-hover:text-yellow-500">
            <FontAwesomeIcon icon={faWallet} style={{color: "#eeab1b",}} />
            </span>
            <span className="font-medium">Your Wallet</span>
          </li>
          <li className="group flex items-center px-6 py-3 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 rounded-md cursor-pointer transition-all">
            <span className="mr-4 text-xl text-gray-400 group-hover:text-yellow-500">
            <FontAwesomeIcon icon={faCrown} style={{color: "#eeab1b",}} />
            </span>
            <span className="font-medium">Customer Reviews</span>
          </li>

        </ul>
      </nav>

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
