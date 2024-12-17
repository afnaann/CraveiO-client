import React from "react";
import OrderCard from "../../components/delivery/orderCard";

function LiveOrders() {
  // Dummy list of 10 orders
  const orders = [
    { id: "ORD001", price: 299, estimatedTime: 25, status: "Cooking" },
    { id: "ORD002", price: 150, estimatedTime: 15, status: "Order Received" },
    { id: "ORD003", price: 450, estimatedTime: 35, status: "Out for Delivery" },
    { id: "ORD004", price: 500, estimatedTime: 40, status: "Delivered" },
    { id: "ORD005", price: 120, estimatedTime: 10, status: "Cooking" },
    { id: "ORD006", price: 350, estimatedTime: 30, status: "Order Received" },
    { id: "ORD007", price: 275, estimatedTime: 20, status: "Out for Delivery" },
    { id: "ORD008", price: 600, estimatedTime: 50, status: "Delivered" },
    { id: "ORD009", price: 180, estimatedTime: 18, status: "Cooking" },
    { id: "ORD010", price: 400, estimatedTime: 45, status: "Order Received" },
  ];

  return (
    <div className="min-h-screen bg-white p-2">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Live Orders
      </h1>
      <div className="text-sm text-gray-500 mt-4 text-center mb-8">
        <p>10% commission will reflect in your wallet after order completion.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
      
    </div>
  );
}

export default LiveOrders;
