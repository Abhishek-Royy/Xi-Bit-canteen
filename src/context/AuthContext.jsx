import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// Mock users for testing
const mockUsers = [
  {
    id: 1,
    email: 'student@test.com',
    password: 'password123',
    role: 'student',
    name: 'Test Student'
  },
  {
    id: 2,
    email: 'canteen@test.com',
    password: 'password123',
    role: 'canteen',
    name: 'Test Canteen Staff'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      return true;
    } else {
      setError('Invalid email or password');
      return false;
    }
  };

  const register = (email, password, role, name) => {
    setError(null);
    const existingUser = mockUsers.find(u => u.email === email);
    
    if (existingUser) {
      setError('Email already registered');
      return false;
    }

    const newUser = {
      id: mockUsers.length + 1,
      email,
      password,
      role,
      name
    };
    
    mockUsers.push(newUser);
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 