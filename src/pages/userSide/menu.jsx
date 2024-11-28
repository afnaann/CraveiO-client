import React from "react";
import dish from "../../assets/dish1.jpg"
import ProductCard from "../../components/productCard";
const Menu = () => {
  const menuItems = [
    {
      id: 1,
      title: "Kebab",
      description: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
      rating: 4.5,
      reviewers: ["profile1.jpg", "profile2.jpg"],
    },
    {
      id: 2,
      title: "Pizza",
      description: "Delicious cheese pizza topped with fresh ingredients.",
      rating: 4.8,
      reviewers: ["profile3.jpg", "profile4.jpg"],
    },
    {
      id: 3,
      title: "Burger",
      description: "Juicy beef burger with crispy fries and fresh toppings.",
      rating: 4.7,
      reviewers: ["profile5.jpg", "profile6.jpg"],
    },
    {
      id: 4,
      title: "Pasta",
      description: "Italian pasta with rich tomato sauce and herbs.",
      rating: 4.3,
      reviewers: ["profile7.jpg", "profile8.jpg"],
    },
    {
      id: 5,
      title: "Sushi",
      description: "Fresh sushi rolls with a variety of fillings.",
      rating: 4.9,
      reviewers: ["profile9.jpg", "profile10.jpg"],
    },
    {
      id: 6,
      title: "Tacos",
      description: "Soft tacos filled with seasoned meat and fresh veggies.",
      rating: 4.6,
      reviewers: ["profile11.jpg", "profile12.jpg"],
    },
    {
      id: 7,
      title: "Steak",
      description: "Grilled steak served with mashed potatoes and veggies.",
      rating: 4.4,
      reviewers: ["profile13.jpg", "profile14.jpg"],
    },
    {
      id: 8,
      title: "Sandwich",
      description: "Classic sandwich with layers of meat, cheese, and veggies.",
      rating: 4.2,
      reviewers: ["profile15.jpg", "profile16.jpg"],
    },
    {
      id: 9,
      title: "Salad",
      description: "Fresh green salad with a light vinaigrette dressing.",
      rating: 4.1,
      reviewers: ["profile17.jpg", "profile18.jpg"],
    },
    {
      id: 10,
      title: "Fried Rice",
      description: "Stir-fried rice with vegetables, eggs, and your choice of protein.",
      rating: 4.7,
      reviewers: ["profile19.jpg", "profile20.jpg"],
    },
  ];
  

  return (
    <section className="px-8 py-16 bg-pink-50">
      <h1 className="text-center text-4xl font-bold">
        <span className="text-red-500">Menu</span> That{" "}
        <span className="text-yellow-500">Always</span> Make You{" "}
        <span className="text-red-500">Fall In Love</span>
      </h1>

      <div className="flex justify-center space-x-4 mt-8">
        {["Ramen", "Breakfast", "Lunch", "Dinner", "Mexican", "Italian", "Desserts", "Drinks"].map(
          (category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-red-500 hover:text-white"
            >
              {category}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {menuItems.map((item) => (
          <ProductCard />
        ))}
      </div>
    </section>
  );
};

export default Menu;
