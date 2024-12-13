import React from 'react';
import face from "../../assets/face_girl.png";
import pizza from "../../assets/pizza.png";


const Home = () => {

  return (
    <>
      <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-10 lg:px-20 mt-10 lg:mt-20 ">
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
        <div className="lg:w-1/2 relative flex justify-center mr-20">
          <img
            src={face}
            alt="Food Delivery"
            className="h-fit w-3/5 rounded-full"
          />
          
          {/* Box 1: Italian Pizza */}
          <div className="absolute top-2 right-32 flex items-center bg-white px-4 py-2 rounded-xl shadow-xl transform transition-all hover:scale-105">
            <img
              src={pizza}
              alt="Pizza"
              className="h-20 w-20 rounded-full"
            />
            <div className="text-sm">
              <p className="font-bold text-gray-800">Italian Pizza</p>
              <p className="text-gray-500">$9.50</p>
            </div>
          </div>

          {/* Box 2: Rating Box */}
          <div className="absolute bottom-4 left-40 flex items-center bg-white px-4 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Our Happy Customer</p>
              <p className="text-gray-500">4.9 (1,025 Reviews)</p>
            </div>
          </div>

          {/* Box 3: Fresh Pizza */}
          <div className="absolute bottom-24 right-28 flex items-center bg-white px-4 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <span className="text-green-500 text-2xl">🍕</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Fresh Pizza</p>
              <p className="text-gray-500">$12.00</p>
            </div>
          </div>

          {/* Box 4: Fast Delivery */}
          <div className="absolute top-24 left-28 flex items-center bg-white px-4 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <span className="text-blue-500 text-2xl">🚚</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Fast Delivery</p>
              <p className="text-gray-500">30 Minutes</p>
            </div>
          </div>

          {/* Box 5: Discount Offer */}
          <div className="absolute bottom-40 left-16 flex items-center bg-white px-4 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <span className="text-red-500 text-2xl">🔥</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Hot Deal!</p>
              <p className="text-gray-500">Save 20% Today</p>
            </div>
          </div>

          {/* Box 6: Featured Dish */}
          <div className="absolute top-44 right-16 flex items-center bg-white px-4 py-3 rounded-xl shadow-lg transform transition-all hover:scale-105">
            <span className="text-yellow-400 text-2xl">🍽️</span>
            <div className="ml-3 text-sm">
              <p className="font-bold text-gray-800">Featured Dish</p>
              <p className="text-gray-500">Spaghetti</p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
