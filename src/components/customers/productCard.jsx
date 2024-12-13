import React, { useContext } from "react";
import dish1 from "../../assets/dish1.jpg"
import MainContext from "../../context/context";
import { useMutateFn } from "../../CustomHooks/tanstack";
import { addToCart } from "../../api/api";
import toast from "react-hot-toast";

const ProductCard = ({dish}) => {
  const {user} = useContext(MainContext)
  const addCart = useMutateFn('cart')
  const addToBagFn = (dishId) => {
    console.log("Added to bag: ", dishId, user.user_id);
    addCart(()=> addToCart(dishId,user.user_id))
    toast.success('Product Added SuccessFully!')
    console.log('yeah')
  }
  return (
    <div className="relative w-80  bg-gradient-to-t from-rose-100  to-white rounded-2xl shadow-lg p-4 flex flex-col items-center mt-20">
      <div className="relative -top-24 mb-8">
        <div className="w-64 h-64 rounded-full bg-gradient-to-b from-rose-200 via-white to-white flex items-center justify-center">
          <div className="w-56 h-56 rounded-full overflow-hidden">
            <img src={`http://127.0.0.1:8500${dish.dish_image}`} alt="Food" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="absolute top-44 right-32 bg-yellow-400 text-white text-md font-bold rounded-full px-3 py-1">
        {dish.price}₹

      </div>

      <div className="flex items-center space-x-2">

        <div className="flex items-center text-yellow-500">
          <span>⭐</span>
          <span className="text-gray-700 text-sm ml-1">{dish.restaurant.name}</span>
        </div>
      </div>

      <h3 className="text-lg font-bold text-red-500 mt-4"> {dish.name} </h3>
      <p className="text-center text-gray-600 text-sm mt-2">
        {dish.description}
      </p>

      <button onClick={()=> addToBagFn(dish.id)} className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
        Add To Bag
      </button>
    </div>
  );
};

export default ProductCard;
