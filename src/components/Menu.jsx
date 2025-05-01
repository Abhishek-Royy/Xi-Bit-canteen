import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'breakfast', name: 'Breakfast' },
    { id: 'lunch', name: 'Lunch' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Masala Dosa',
      description: 'Crispy dosa filled with spiced potato filling',
      price: 40,
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Veg Biryani',
      description: 'Fragrant basmati rice cooked with mixed vegetables and spices',
      price: 80,
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Samosa',
      description: 'Crispy pastry filled with spiced potatoes and peas',
      price: 15,
      category: 'snacks',
      image: 'https://images.unsplash.com/photo-1601050592132-0d9e41a0f1a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Masala Chai',
      description: 'Traditional Indian spiced tea',
      price: 10,
      category: 'beverages',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleAddToCart = (item) => {
    // Get the current cart items from localStorage
    const currentCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if item already exists in cart
    const existingItem = currentCart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item exists
      const updatedCart = currentCart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    } else {
      // Add new item if it doesn't exist
      const updatedCart = [...currentCart, { ...item, quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    }

    // Trigger a custom event to notify the Navbar about the cart update
    window.dispatchEvent(new CustomEvent('cartUpdated'));

    // Show a success message
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Today's Menu
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Explore our delicious offerings
          </p>
        </div>

        {/* Category Filter */}
        <div className="mt-8">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-900">₹{item.price}</span>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-colors duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Special Offers</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900">Student Discount</h4>
              <p className="text-sm text-gray-600">Get 10% off on all items with valid student ID</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="font-semibold text-gray-900">Combo Meals</h4>
              <p className="text-sm text-gray-600">Save up to ₹30 on our special combo meals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu; 