
import './App.css';
import React from "react";
import Navbar from "./pages/home/navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Header from "./pages/home/navbar";

import "./style.css";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
