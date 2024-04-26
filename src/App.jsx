import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Reg from "./pages/Reg";
import Login from "./pages/Login";
import MainPage from "./components/MainPage";
import { ProtectedRoute } from "protected-route-react";
import { createContext } from "react";
export const UserContext = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, 20));
  };
  const handleDecrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <Router>
      {" "}
      <UserContext.Provider
        value={{
          count,
          setIsAuthenticated,
          handleIncrement,
          handleDecrement,
          handleReset,
        }}
      >
        {" "}
        <Routes>
          {" "}
          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/login"
              >
                {" "}
                <Reg />{" "}
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/login"
            element={
              <ProtectedRoute
                isAuthenticated={!isAuthenticated}
                redirect="/main"
              >
                {" "}
                <Login />{" "}
              </ProtectedRoute>
            }
          />{" "}
          <Route
            path="/main"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} redirect="/">
                {" "}
                <MainPage />{" "}
              </ProtectedRoute>
            }
          />{" "}
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </Routes>{" "}
      </UserContext.Provider>{" "}
    </Router>
  );
};
export default App;
