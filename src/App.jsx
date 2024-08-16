// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile"; // Import the Profile component

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />{" "}
      {/* Add route for Profile */}
      <Route path="/" element={<Register />} />
    </Routes>
  );
};

export default App;
