import React from "react";

const DeliveryDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Upper Header */}
 

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
