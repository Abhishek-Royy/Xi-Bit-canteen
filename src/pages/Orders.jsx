import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';

// Mock orders data
const mockOrders = [
  {
    id: 1,
    items: [
      { name: 'Veg Biryani', quantity: 2, price: 120 },
      { name: 'Butter Chicken', quantity: 1, price: 150 }
    ],
    total: 390,
    status: 'completed',
    date: '2024-02-20T10:30:00',
    orderNumber: 'ORD-001'
  },
  {
    id: 2,
    items: [
      { name: 'Masala Dosa', quantity: 2, price: 80 },
      { name: 'Chole Bhature', quantity: 1, price: 100 }
    ],
    total: 260,
    status: 'pending',
    date: '2024-02-20T11:45:00',
    orderNumber: 'ORD-002'
  }
];

const Orders = () => {
  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Order History</h1>

      <div className="space-y-6">
        {mockOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order {order.orderNumber}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formatDate(order.date)}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(order.status)}
                  <span className="text-sm font-medium text-gray-900 capitalize">
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center">
                        <span className="text-gray-900">{item.name}</span>
                        <span className="text-gray-500 ml-2">
                          x{item.quantity}
                        </span>
                      </div>
                      <span className="text-gray-900">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>
                    <span className="text-lg font-semibold text-gray-900">
                      ₹{order.total}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders; 