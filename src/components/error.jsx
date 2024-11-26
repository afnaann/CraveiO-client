import React from 'react';
import burger from "../assets/burger.png"
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 font-sans text-center">
      {/* Numbers and Burger */}
      <div className="flex items-center justify-center gap-8">
        <span className="text-[12rem] font-bold text-orange-500">4</span>
        <div className="relative">
          {/* Burger Image */}
          <img
            src={burger}
            alt="Burger"
            className="h-60 object-contain" // Increased image size
          />
        </div>
        <span className="text-[12rem] font-bold text-orange-500">4</span>
      </div>
      
      {/* Text and Description */}
      <h1 className="mt-8 text-4xl font-extrabold text-gray-800">Page not Found</h1>
      <p className="mt-5 text-lg text-gray-600 max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus viverra laoreet lorem diam sed egestas tincidunt dolor.
      </p>
      
      {/* Back to Home Button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="mt-8 px-8 py-4 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Back to home
      </button>
    </div>
  );
};

export default NotFoundPage;
