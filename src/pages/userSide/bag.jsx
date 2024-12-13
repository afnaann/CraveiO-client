import React, { useContext } from "react";

import { useMutateFn, useQueryFn } from "../../CustomHooks/tanstack";
import { updateCartQuantity, ViewCart } from "../../api/api";
import MainContext from "../../context/context";

const Bag = () => {
  const {user} = useContext(MainContext)
  const quantityFn = useMutateFn('cart')
  const cartItems = useQueryFn(()=> ViewCart(user.user_id))
  console.log(cartItems?.cart)


  const calculateTotal = () =>
    cartItems?.cart.reduce((total, item) => total + item.product_details.price * item.quantity, 0);

  const updateQuantity = (product_id, newQuantity) => {
    quantityFn(()=> updateCartQuantity(product_id, newQuantity,user.user_id))
  }
  return (
    <div className="bg-orange-50 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Your Shopping Bag
      </h1>
      <div className="max-w-6xl mx-auto flex gap-6">
        {/* Cart Items Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Cart Items</h2>
          {cartItems?.cart.map((item) => (
            <div
              key={item.product_id}
              className="flex items-center justify-between border-b border-gray-200 py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.product_details.dish_image}
                  alt={item.product_details.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">{item.product_details.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.product_details.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button onClick={()=> updateQuantity(item.product_id, item.quantity - 1)} className="bg-gray-200 px-2 py-1 rounded text-gray-800 hover:bg-gray-300 transition">
                  -
                </button>
                <span className="font-medium text-gray-800">{item.quantity}</span>
                <button onClick={()=> updateQuantity(item.product_id, item.quantity + 1)} className="bg-gray-200 px-2 py-1 rounded text-gray-800 hover:bg-gray-300 transition">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-80 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Summary</h2>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-800">₹{calculateTotal()}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium text-gray-800">₹50</span>
          </div>
          <div className="flex justify-between border-t border-gray-200 pt-4">
            <span className="text-lg font-semibold text-gray-800">Total</span>
            <span className="text-lg font-bold text-gray-900">₹{calculateTotal() + 50}</span>
          </div>
          <button className="mt-6 w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
