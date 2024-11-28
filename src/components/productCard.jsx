import React from "react";
import dish from "../assets/dish1.jpg"
const ProductCard = () => {
  return (
    <div className="relative w-80  bg-gradient-to-t from-rose-200  to-white rounded-2xl shadow-lg p-4 flex flex-col items-center mt-20">
      {/* Circular Gradient Ring */}
      <div className="relative -top-24 mb-8">
        <div className="w-52 h-52 rounded-full bg-gradient-to-b from-rose-200 via-white to-white flex items-center justify-center">
          <div className="w-44 h-44 rounded-full overflow-hidden">
            <img src={dish} alt="Food" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Price Tag */}
      <div className="absolute top-10 right-10 bg-yellow-400 text-white text-sm font-bold rounded-full px-3 py-1">
        10$
      </div>

      {/* Ratings and Reviewers */}
      <div className="flex items-center space-x-2">
        <div className="flex">
          <img
            src="https://via.placeholder.com/24"
            alt="Reviewer 1"
            className="w-6 h-6 rounded-full border-2 border-white"
          />
          <img
            src="https://via.placeholder.com/24"
            alt="Reviewer 2"
            className="w-6 h-6 rounded-full border-2 border-white -ml-2"
          />
        </div>
        <div className="flex items-center text-yellow-500">
          <span>⭐</span>
          <span className="text-gray-700 text-sm ml-1">(4.5)</span>
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="text-lg font-bold text-red-500 mt-4">Kebab</h3>
      <p className="text-center text-gray-600 text-sm mt-2">
        Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
        Industry.
      </p>

      {/* Order Button */}
      <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
