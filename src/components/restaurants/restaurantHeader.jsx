import React, { useContext } from "react";
import MainContext from "../../context/context";

const RestaurantHeader = () => {
  const { user } = useContext(MainContext)
  return (
    <header className="w-full bg-white shadow-sm p-4 flex items-center justify-between">
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Search for anything..."
          className="w-full bg-gray-100 rounded-lg px-4 py-2 border border-gray-200 focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">{user?.name}</span>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 uppercase">{user?.name[0]}</span>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;
