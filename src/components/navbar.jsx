import React, { useContext } from "react";
import logo from "../assets/craveio.png";
import loca from "../assets/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MainContext from "../context/context";
const Navbar = () => {
    
  const { authTokens } = useContext(MainContext);
  return (
    <nav className="bg-orange-50 shadow-md  w-full z-50 top-0">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="CraveiO Logo" className="h-20 w-auto" />
        </div>
        {/* Location Selector */}
        <div className="relative flex items-center space-x-2 border-b-2 border-orange-500 pb-1">
          <i className="w-5">
            <img src={loca} alt="" />
          </i>
          <i className="fas fa-map-marker-alt text-orange-500 text-sm"></i>
          <select
            className="appearance-none bg-transparent text-gray-700 text-sm focus:outline-none"
            aria-label="Location Selector"
          >
            <option value="default" disabled>
              Select location
            </option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
          </select>
          <i className="fas fa-chevron-down text-gray-500 text-xs"></i>
        </div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-100 border border-gray-300 rounded pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search food, restaurants, cuisines..."
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="/about"
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            About Us
          </a>
          <a
            href="/careers"
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            Work With Us
          </a>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {authTokens ? (
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ color: "#eb7100" }}
                  className="h-6"
                />
              </li>
              <li>{/* {use} */}</li>
            </ul>
          ) : (
            <button className="text-orange-500 border border-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white transition duration-150 text-sm">
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
