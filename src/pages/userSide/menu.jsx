import React, { useState } from "react";
import ProductCard from "../../components/customers/productCard";
import { useQueryFn } from "../../CustomHooks/tanstack";
import { fetchAllDishes, fetchCategory, listRestaurants } from "../../api/api";
import useAxios from "../../CustomHooks/axiosInstance";

const Menu = () => {
  const api = useAxios();
  const menuItems = useQueryFn(() => fetchAllDishes(api), "dishes");
  const categories = useQueryFn(fetchCategory, "categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const restaurants = useQueryFn(listRestaurants,'restaurants')


  const filteredItems = selectedCategory
    ? menuItems?.filter((item) => item.category === selectedCategory)
    : menuItems;

  const filteredByRestaurant = selectedRestaurant
    ? filteredItems?.filter((item) => item.restaurant.id === selectedRestaurant)
    : filteredItems;

  return (
    <section className="px-8 py-16 bg-orange-50">
      <h1 className="text-center text-4xl font-bold">
        <span className="text-red-500">Menu</span> That{" "}
        <span className="text-yellow-500">Always</span> Make You{" "}
        <span className="text-red-500">Fall In Love</span>
      </h1>

      {/* Filter by Category */}
      <div className="mt-8">
        <h2 className="text-center text-lg font-semibold text-black"> ------------ Filter by Category ------------ </h2>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              !selectedCategory
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
          >
            All Categories
          </button>
          {categories?.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category.id
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filter by Restaurant */}
      <div className="mt-8">
        <h2 className="text-center text-lg font-semibold text-black"> ------------ Filter by Restaurant ------------ </h2>
        <div className="flex justify-center space-x-4 mt-4">
          <button
            onClick={() => setSelectedRestaurant(null)}
            className={`px-4 py-2 rounded-full ${
              !selectedRestaurant
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            }`}
          >
            All Restaurants
          </button>
          {restaurants?.map((restaurant,index) => (
            <button
              key={index}
              onClick={() => setSelectedRestaurant(restaurant.id)}
              className={`px-4 py-2 rounded-full ${
                selectedRestaurant === restaurant.id
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
              }`}
            >
              {restaurant.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {filteredByRestaurant?.length > 0 ? (
          filteredByRestaurant.map((item) => (
            <ProductCard dish={item} key={item.id} />
          ))
        ) : (
          <div className="col-span-full text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No products found in this category or restaurant!
            </h2>
            <p className="text-gray-500 mt-2">
              Try exploring other categories or restaurants to find your favorite dish.
            </p>
            <img
              alt="No products"
              className="mx-auto mt-4 w-1/2"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
