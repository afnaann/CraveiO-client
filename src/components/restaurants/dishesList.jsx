import React from "react";

const DishesList = ({ dish }) => {
  return (
    <div
      className="p-4 bg-white border rounded-lg hover:shadow-lg flex flex-col"
    >
      <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        <span>
          <img src={`http://127.0.0.1:8500${dish.dish_image}`} alt="no" />
        </span>
      </div>
      <h3 className="mt-4 text-sm font-bold">{dish.name}</h3>
      <p className="text-xs text-gray-500 mt-1">
        Category: <span className="font-medium">{dish.category}</span>
      </p>
      <p className="mt-2 text-sm text-gray-600">{dish.description}</p>
      <p className="mt-2 text-sm font-bold text-gray-800">{dish.price}</p>
      <button className="mt-3 w-full bg-yellow-500 text-white py-2 rounded-md">
        Add to Cart
      </button>
    </div>
  );
};

export default DishesList;
