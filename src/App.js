
import './App.css';
import React from "react";
import Navbar from "./pages/home/navbar";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Header from "./pages/home/navbar";
import SingleProduct from "./pages/singleproduct";

import "./style.css";


function App() {
  return (
    <div>
      <SingleProduct />
      <Navbar />
      
    </div>
  );
}

export default App;
