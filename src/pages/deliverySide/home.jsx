import React from "react";

const DeliveryDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md">
        <div className="p-6 text-center border-b">
          <h1 className="text-xl font-bold text-gray-800">CRAVEIO</h1>
        </div>
        <nav className="mt-6">
          <ul className="space-y-4">
            {[
              { name: "Dashboard", icon: "🏠" },
              { name: "Menu", icon: "🍔" },
              { name: "Orders", icon: "📦" },
              { name: "Customers", icon: "👤" },
              { name: "Transactions", icon: "💳" },
              { name: "Logout", icon: "🚪" },
            ].map((item, index) => (
              <li
                key={index}
                className="group flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 hover:text-gray-800 rounded-md cursor-pointer"
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-10 px-6">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-700 text-sm">It’s Stax Time</p>
            <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition">
              Create an Order
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Upper Header */}
        <header className="w-full bg-white border-b shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center w-full max-w-lg">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full bg-gray-100 rounded-lg px-4 py-2 border border-gray-200 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Mmekutmfon Jade</span>
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
              {/* Placeholder for Profile Picture */}
              <span className="text-gray-600">MJ</span>
            </div>
            <div className="text-gray-500 cursor-pointer hover:text-gray-800">
              {/* Dropdown or Settings Icon Placeholder */}
              <span className="text-2xl">⚙️</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
              + Add Menu
            </button>
          </div>

          {/* KPIs */}
          <section className="grid grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Menus", value: "56" },
              { title: "Total Revenue", value: "12K" },
              { title: "Total Orders", value: "20" },
              { title: "Total Clients", value: "65" },
            ].map((kpi, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center"
              >
                <p className="text-gray-600">{kpi.title}</p>
                <h2 className="text-2xl font-bold text-gray-800">{kpi.value}</h2>
              </div>
            ))}
          </section>

          {/* Charts & Summaries */}
          <section className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Order Summary
              </h3>
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for Chart */}
                <p className="text-gray-500">Order Chart Placeholder</p>
              </div>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Revenue</h3>
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for Revenue Chart */}
                <p className="text-gray-500">Revenue Chart Placeholder</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};



export default DeliveryDashboard;
