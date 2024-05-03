import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Plans from "./pages/Plans/Plans";
import Contacts from "./pages/Contacts/Contacts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/plans" element={<Plans />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Navigate to="/home" replace></Navigate>} />
  </Routes>
);

export default AppRoutes;
