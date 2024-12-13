import React from "react";

const Orders = () => {
  const orders = [
    {
      id: 1,
      customer_name: "John Doe",
      total: 45.99,
      status: "Pending",
    },
    {
      id: 2,
      customer_name: "Jane Smith",
      total: 29.49,
      status: "Accepted",
    },
    {
      id: 3,
      customer_name: "Michael Brown",
      total: 78.00,
      status: "Ready for Pickup",
    },
  ];

  return (
    <main className="flex-1 p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="p-4 bg-white border rounded-lg hover:shadow-md"
          >
            <h2 className="text-lg font-bold mb-2">Order #{order.id}</h2>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Customer:</span> {order.customer_name}
            </p>
            <p className="text-sm text-gray-700 mb-1">
              <span className="font-medium">Total:</span> ${order.total.toFixed(2)}
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <span className="font-medium">Status:</span> {order.status}
            </p>
            <div>
              <label htmlFor={`status-${order.id}`} className="block text-sm font-medium mb-1">
                Update Status
              </label>
              <select
                id={`status-${order.id}`}
                className="w-full border-gray-300 rounded-md p-2 text-sm"
                value={order.status}
                disabled
              >
                <option value="Pending">Pending</option>
                <option value="Accepted">Accepted</option>
                <option value="Ready for Pickup">Ready for Pickup</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Orders;
