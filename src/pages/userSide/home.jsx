import React from 'react';
import face from "../../assets/face_girl.png"



const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center px-10 py-6">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="/path-to-logo.png" alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-gray-800">Craveio</h1>
        </div>
        <nav className="flex space-x-8 text-gray-600 font-medium">
          <a href="#special-offers" className="hover:text-orange-500">Today Special Offers</a>
          <a href="#why-foodhut" className="hover:text-orange-500">Why FoodHut</a>
          <a href="#our-menu" className="hover:text-orange-500">Our Menu</a>
          <a href="#popular-food" className="hover:text-orange-500">Our Popular Food</a>
        </nav>
        <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 mt-10 lg:mt-20">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-4">
            <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
              People Trust Us
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            We're <span className="text-red-500">Serious</span> For
            <br />
            <span className="text-orange-500">Food</span> & <span className="text-yellow-500">Delivery.</span>
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Best cooks and best delivery guys all at your service. Hot tasty food will reach you in 60 minutes.
          </p>
          <div className="mt-8 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search food"
                className="w-full px-6 py-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-orange-500"
              />
              <button className="absolute right-4 top-2.5 text-gray-500">
                🔍
              </button>
            </div>
            <button className="px-8 py-3 bg-orange-500 text-white text-lg font-medium rounded-full shadow-md hover:bg-orange-600">
              Join Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative flex justify-center">
          <img
            src={face}
            alt="Food Delivery"
            className="w-3/4 lg:w-full"
          />
          <div className="absolute top-0 right-0 flex items-center bg-white p-3 rounded-xl shadow-lg">
            <img
              src="/path-to-pizza-image.png"
              alt="Pizza"
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Italian Pizza</p>
              <p className="text-gray-500">$9.50</p>
            </div>
          </div>
          <div className="absolute bottom-12 left-8 flex items-center bg-white p-3 rounded-xl shadow-lg">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Our Happy Customer</p>
              <p className="text-gray-500">4.9 (1,025 Reviews)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
