
import './App.css';
import React from "react";
import Navbar from "./pages/home/navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Header from "./pages/home/navbar";
import Profile from './pages/profile/Profile';
import SingleProduct from "./pages/singleproduct";

import "./style.css";


function App() {
  return (
    <div>
      <SingleProduct />
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setStatus/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path= "/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
