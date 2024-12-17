import React from "react";
import CompletedOrderCard from "../../components/delivery/completedOrderCard";

function CompletedOrders() {
  // Dummy list of completed orders
  const completedOrders = [
    { id: "ORD001", price: 299, completionTime: "1:30 PM" },
    { id: "ORD002", price: 150, completionTime: "2:00 PM" },
    { id: "ORD003", price: 450, completionTime: "2:45 PM" },
    { id: "ORD004", price: 500, completionTime: "3:15 PM" },
    { id: "ORD005", price: 120, completionTime: "4:00 PM" },
    { id: "ORD006", price: 350, completionTime: "4:30 PM" },
    { id: "ORD007", price: 275, completionTime: "5:00 PM" },
    { id: "ORD008", price: 600, completionTime: "5:45 PM" },
    { id: "ORD009", price: 180, completionTime: "6:00 PM" },
    { id: "ORD010", price: 400, completionTime: "6:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Completed Orders
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completedOrders.map((order) => (
          <CompletedOrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default CompletedOrders;
