import React from "react";
import { Link } from "react-router-dom";

const PartnerShip = () => {
  return (
    <div className="bg-orange-50 py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white shadow-lg rounded-xl p-8 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
                Partner with{" "}
                <span className="text-orange-500">CraveiO</span> and grow your
                business
              </h1>
              <p className="text-lg text-gray-600">
                Enjoy 0% commission for the first month and attract new
                customers to your restaurant.
              </p>
              <div className="flex space-x-4">
                <Link to='/restaurantjoin' className="bg-orange-500 text-white px-6 py-3 rounded-md shadow-md font-medium hover:bg-orange-600">
                  Register Your Restaurant
                </Link>
                <button className="bg-orange-100 text-orange-600 px-6 py-3 rounded-md shadow-md font-medium hover:bg-orange-200">
                  Join as Delivery Partner
                </button>
              </div>
            </div>

            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://www.boutiquehotelier.com/2020/10/27.jpg"
                  alt="Restaurant partnership"
                  className="w-full h-56 object-cover lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-6 lg:px-12">
        <div className="bg-white shadow-lg rounded-xl p-8 lg:p-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get Started in Just 10 Minutes
          </h2>
          <p className="text-gray-600 mb-6">
            Gather the following documents for a seamless registration process:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>PAN Card
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>GST Number (if
              applicable){" "}
              <a
                href="#"
                className="ml-2 text-orange-500 underline hover:text-orange-600 text-sm"
              >
                Need a GST? Apply here
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>Bank Account
              Details
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>Menu Details & One
              Dish Image
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">✔</span>FSSAI License{" "}
              <a
                href="#"
                className="ml-2 text-orange-500 underline hover:text-orange-600 text-sm"
              >
                Don’t have one? Apply here
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Partner with <span className="text-orange-500">Zomato</span>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-orange-100 text-orange-500 rounded-full h-16 w-16 mx-auto flex items-center justify-center text-2xl">
              📈
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Attract New Customers
            </h3>
            <p className="text-gray-600 mt-2">
              Showcase your restaurant to millions of users.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-orange-100 text-orange-500 rounded-full h-16 w-16 mx-auto flex items-center justify-center text-2xl">
              🚚
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Seamless Delivery
            </h3>
            <p className="text-gray-600 mt-2">
              Provide doorstep delivery with ease.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="bg-orange-100 text-orange-500 rounded-full h-16 w-16 mx-auto flex items-center justify-center text-2xl">
              📞
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Dedicated Support
            </h3>
            <p className="text-gray-600 mt-2">
              Get help anytime with 24/7 hotline support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
