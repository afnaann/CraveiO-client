import React from 'react';
import { Outlet } from 'react-router-dom';
import RestaurantSidebar from './restaurantSidebar';
import RestaurantHeader from './restaurantHeader';

function RestaurantLayout() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full w-56 bg-gray-800">
        <RestaurantSidebar />
      </div>

      <div className="flex-1 flex flex-col ml-56">
        <div className="fixed top-0 left-64 right-0 h-16 bg-white shadow">
          <RestaurantHeader />
        </div>

        <div className="flex-1 mt-16 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RestaurantLayout;
