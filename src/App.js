import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/home";
import Register from "./pages/Register";
import Booking from "./pages/booking";
// import Header from "./pages/home/navbar";
import Profile from './pages/profile/Profile';
import SingleProduct from "./pages/singleproduct";
// import "./style.css";
import Yacht from "./pages/products/yacht";
import Navbar from "./pages/home/navbar";
import "./style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login setStatus/>} />
        <Route path="/booking" element={<Booking />} />
        <Route path= "/profile" element={<Profile/>} />
        <Route path= "/singleProduct" element={<SingleProduct/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/yacht/:id" element={<Yacht />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
