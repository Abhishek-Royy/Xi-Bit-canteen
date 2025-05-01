import React, { useState } from 'react';

const WasteTracking = () => {
  const [wasteData, setWasteData] = useState({
    date: '',
    foodItem: '',
    quantity: '',
    reason: '',
    action: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the waste data to your backend
    console.log('Waste data submitted:', wasteData);
    alert('Waste data recorded successfully!');
    setWasteData({
      date: '',
      foodItem: '',
      quantity: '',
      reason: '',
      action: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWasteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Food Waste Tracking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Record Food Waste</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={wasteData.date}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Food Item</label>
              <input
                type="text"
                name="foodItem"
                value={wasteData.foodItem}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
              <input
                type="number"
                name="quantity"
                value={wasteData.quantity}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
                min="0"
                step="0.1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Reason for Waste</label>
              <select
                name="reason"
                value={wasteData.reason}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select Reason</option>
                <option value="overproduction">Overproduction</option>
                <option value="spoilage">Spoilage</option>
                <option value="preparation">Preparation Waste</option>
                <option value="plate">Plate Waste</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Action Taken</label>
              <select
                name="action"
                value={wasteData.action}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
                <option value="">Select Action</option>
                <option value="compost">Composted</option>
                <option value="donation">Donated</option>
                <option value="animal">Animal Feed</option>
                <option value="disposal">Disposed</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Record Waste
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Waste Statistics</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Today's Waste</h3>
              <p className="text-3xl font-bold text-indigo-600">2.5 kg</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Weekly Average</h3>
              <p className="text-3xl font-bold text-indigo-600">15.2 kg</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Monthly Total</h3>
              <p className="text-3xl font-bold text-indigo-600">60.8 kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteTracking; 