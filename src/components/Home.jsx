import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="College canteen"
          />
          <div className="absolute inset-0 bg-blue-900 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Xi-Bit College Canteen
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl">
            Your one-stop solution for campus dining. Pre-order meals, track nutrition, 
            and enjoy delicious food without the wait.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/menu"
              className="inline-block bg-amber-500 py-2 sm:py-3 px-6 sm:px-8 border border-transparent rounded-md text-base font-medium text-white hover:bg-amber-600 transition-colors text-center"
            >
              View Today's Menu
            </Link>
            <Link
              to="/pre-order"
              className="inline-block bg-white py-2 sm:py-3 px-6 sm:px-8 border border-transparent rounded-md text-base font-medium text-blue-900 hover:bg-blue-50 transition-colors text-center"
            >
              Pre-Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="bg-blue-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-blue-900 truncate">Daily Meals Served</dt>
                <dd className="mt-1 text-2xl sm:text-3xl font-semibold text-blue-900">500+</dd>
              </div>
            </div>
            <div className="bg-amber-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-amber-900 truncate">Menu Items</dt>
                <dd className="mt-1 text-2xl sm:text-3xl font-semibold text-amber-900">50+</dd>
              </div>
            </div>
            <div className="bg-green-50 overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-green-900 truncate">Happy Students</dt>
                <dd className="mt-1 text-2xl sm:text-3xl font-semibold text-green-900">1000+</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Campus Dining Made Easy
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500">
              Experience the future of college dining with our innovative features
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-6 sm:mt-8 text-lg font-medium text-gray-900 tracking-tight">Smart Pre-Ordering</h3>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                      Skip the lunch rush! Pre-order your meals and pick them up at your convenience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-amber-500 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-6 sm:mt-8 text-lg font-medium text-gray-900 tracking-tight">Nutrition Tracking</h3>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                      Stay healthy with detailed nutritional information for every meal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-4 sm:px-6 pb-6 sm:pb-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-green-600 rounded-md shadow-lg">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </span>
                    </div>
                    <h3 className="mt-6 sm:mt-8 text-lg font-medium text-gray-900 tracking-tight">Eco-Friendly</h3>
                    <p className="mt-3 sm:mt-5 text-sm sm:text-base text-gray-500">
                      Join our mission to reduce food waste and promote sustainable practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                <span className="block">Ready to transform your campus dining experience?</span>
                <span className="block text-amber-400 mt-2">Join Xi-Bit Canteen today.</span>
              </h2>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:mt-0 lg:flex-shrink-0 space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/student-login"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-amber-500 hover:bg-amber-600 transition-colors w-full sm:w-auto"
                >
                  Student Login
                </Link>
              </div>
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/canteen-login"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 transition-colors w-full sm:w-auto"
                >
                  Canteen Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home; 