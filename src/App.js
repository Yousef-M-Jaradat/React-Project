
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/home";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Profile from './pages/profile/Profile';
import SingleProduct from "./pages/singleproduct";
import Yacht from "./pages/products/yacht";
import Navbar from "./pages/home/navbar";
import Footer from "./pages/home/footer";

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
        <Route path="/yacht" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
