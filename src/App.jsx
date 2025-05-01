import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import { useAuth } from './context/AuthContext';
import Home from './components/Home';
import PreOrder from './components/PreOrder';
import Nutrition from './components/Nutrition';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

const StudentRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user || user.role !== 'student') {
    return <Navigate to="/" />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/menu"
                  element={
                    <ProtectedRoute>
                      <Menu />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pre-order"
                  element={
                    <StudentRoute>
                      <PreOrder />
                    </StudentRoute>
                  }
                />
                <Route
                  path="/nutrition"
                  element={
                    <StudentRoute>
                      <Nutrition />
                    </StudentRoute>
                  }
                />
                <Route
                  path="/feedback"
                  element={
                    <StudentRoute>
                      <Feedback />
                    </StudentRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <StudentRoute>
                      <Cart />
                    </StudentRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <StudentRoute>
                      <Orders />
                    </StudentRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
