

import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Reg from './pages/Reg';
import Login from './pages/Login';
import MainPage from './components/MainPage';
import {ProtectedRoute} from "protected-route-react";
import { createContext } from 'react';
export const userContext= createContext();
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  };

  return (
    <Router>
       
      <Routes>
       <userContext.Provider value={setIsAuthenticated}>
      <Route
        path="/"
        element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/main"
          >
            <Login/>
          </ProtectedRoute>
        }
      />
     

      <Route
        path="/reg"
        element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/main"
          >
            <Reg/>
          </ProtectedRoute>
        }
      />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
      </userContext.Provider>
      </Routes>
    </Router>
  );

  function PrivateRoute() {
    return isAuthenticated ? <MainPage onLogout={handleLogout} /> : <Navigate to="/" />;
  }
};

export default App;

  // <ProtectedRoute isAuthenticated={}></ProtectedRoute>
        // <Route path="/register" element={<Reg />} />
        // <Route path="/" element={<Login onLogin={handleLogin} />} />
        // <Route path="/main" element={<PrivateRoute />} />