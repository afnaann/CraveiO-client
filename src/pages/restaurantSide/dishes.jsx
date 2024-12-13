import React, { useContext, useState } from "react";
import AddDishModal from "../../components/restaurants/addDishModal";
import AddCategory from "../../components/restaurants/addCategory";
import {  useQuery } from "@tanstack/react-query";
import {  fetchCategory, fetchRestaurantDishes } from "../../api/api";
import MainContext from "../../context/context";
import DishesList from "../../components/restaurants/dishesList";
import { useQueryFn } from "../../CustomHooks/tanstack";

const Dishes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const {user} = useContext(MainContext)

  const categories = useQueryFn(fetchCategory,'categories')

  const {
    data: dishes,
    isLoading: isDishesLoading,
    error: isDishesError,
  } = useQuery({
    queryKey: ["dishes"],
    queryFn:()=> fetchRestaurantDishes(user.user_id),
  });

  if (isDishesError) {
    console.log(isDishesError);
  }

  return (
    <main className="flex-1 p-6">
      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Category</h2>
          <AddCategory />
        </div>
        <div className="mt-4 grid grid-cols-6 gap-4">
          {categories?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 bg-white border rounded-lg hover:shadow-md"
            >
              <p className="text-lg font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Popular Dishes</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-600 text-white py-2 px-4 rounded-md"
          >
            Add New Dish
          </button>
        </div>
        <AddDishModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <div className="mt-4 grid grid-cols-4 gap-6">
          {dishes?.map((dish,index) => (
            <DishesList dish={dish} key={index}/>

          ))}
        </div>
      </section>
    </main>
  );
};

export default Dishes;
