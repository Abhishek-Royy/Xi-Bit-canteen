import React, { useState } from 'react';

const Nutrition = () => {
  const [selectedMeal, setSelectedMeal] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: 'Vegetable Biryani',
      calories: 450,
      protein: 12,
      carbs: 75,
      fat: 8,
      category: 'Main Course'
    },
    {
      id: 2,
      name: 'Paneer Tikka',
      calories: 320,
      protein: 18,
      carbs: 12,
      fat: 22,
      category: 'Starter'
    },
    {
      id: 3,
      name: 'Dal Tadka',
      calories: 280,
      protein: 15,
      carbs: 40,
      fat: 5,
      category: 'Main Course'
    }
  ];

  const addToMeal = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeFromMeal = (itemId) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId));
  };

  const calculateTotals = () => {
    return selectedItems.reduce((totals, item) => ({
      calories: totals.calories + item.calories,
      protein: totals.protein + item.protein,
      carbs: totals.carbs + item.carbs,
      fat: totals.fat + item.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
  };

  const totals = calculateTotals();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nutrition Planning</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Select Meal</h2>
          <select
            value={selectedMeal}
            onChange={(e) => setSelectedMeal(e.target.value)}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select a meal</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snacks">Snacks</option>
          </select>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Available Items</h3>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">{item.category}</p>
                    </div>
                    <button
                      onClick={() => addToMeal(item)}
                      className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                    >
                      Add
                    </button>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Calories:</span>
                      <span className="ml-1">{item.calories}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Protein:</span>
                      <span className="ml-1">{item.protein}g</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Carbs:</span>
                      <span className="ml-1">{item.carbs}g</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Fat:</span>
                      <span className="ml-1">{item.fat}g</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Your Meal Plan</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Selected Items</h3>
            {selectedItems.length === 0 ? (
              <p className="text-gray-500">No items selected</p>
            ) : (
              <div className="space-y-4">
                {selectedItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeFromMeal(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Calories:</span>
                        <span className="ml-1">{item.calories}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Protein:</span>
                        <span className="ml-1">{item.protein}g</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Carbs:</span>
                        <span className="ml-1">{item.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Fat:</span>
                        <span className="ml-1">{item.fat}g</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-medium mb-4">Nutrition Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Total Calories</h4>
                <p className="text-2xl font-bold text-indigo-600">{totals.calories}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Protein</h4>
                <p className="text-2xl font-bold text-indigo-600">{totals.protein}g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Carbohydrates</h4>
                <p className="text-2xl font-bold text-indigo-600">{totals.carbs}g</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-gray-500">Fat</h4>
                <p className="text-2xl font-bold text-indigo-600">{totals.fat}g</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nutrition; 