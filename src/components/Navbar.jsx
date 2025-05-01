import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, User, LogOut, MessageSquare, Apple, Clock, Menu as MenuIcon, X } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = () => (
    <>
      {user?.role === 'student' && (
        <>
          <Link
            to="/cart"
            className="text-gray-600 hover:text-blue-600 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="ml-1">Cart</span>
          </Link>
          <Link
            to="/orders"
            className="text-gray-600 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Orders
          </Link>
          <Link
            to="/pre-order"
            className="text-gray-600 hover:text-blue-600 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Clock className="h-5 w-5" />
            <span className="ml-1">Pre-Order</span>
          </Link>
          <Link
            to="/nutrition"
            className="text-gray-600 hover:text-blue-600 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Apple className="h-5 w-5" />
            <span className="ml-1">Nutrition</span>
          </Link>
          <Link
            to="/feedback"
            className="text-gray-600 hover:text-blue-600 flex items-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="ml-1">Feedback</span>
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Xi-Bit 
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <NavLinks />
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-blue-600">
                    <User className="h-6 w-6" />
                    <span className="ml-2">{user.name}</span>
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {user && (
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {user ? (
              <>
                <NavLinks />
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex items-center px-3 py-2 text-gray-600">
                    <User className="h-6 w-6" />
                    <span className="ml-2">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-3 py-2 text-gray-600 hover:text-blue-600 w-full"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 