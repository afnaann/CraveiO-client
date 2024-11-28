import React, { useContext } from "react";
import logo from "../assets/craveio.png";
import loca from "../assets/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MainContext from "../context/context";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { authTokens, user } = useContext(MainContext);
  const navigate = useNavigate()
  return (
    <nav className="bg-orange-50 shadow-md  w-full z-50 top-0">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="CraveiO Logo" className="h-20 w-auto" onClick={()=> navigate('/home')} />
        </div>
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

        <div className="flex-grow max-w-md mx-4">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white border rounded pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Search food, restaurants, cuisines..."
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            to={"/cart"}
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#e87b33" }}
              className="h-4 mr-10"
            />
          </Link>
          <Link
            to={"/menu"}
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            Menu
          </Link>
          <Link
            to={"/partner"}
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            Work With Us
          </Link>
          <Link
            to={"/careers"}
            className="text-gray-700 hover:text-orange-500 transition duration-150 text-sm"
          >
            About Us
          </Link>
        </div>

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
              <li>{user.name}</li>
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
