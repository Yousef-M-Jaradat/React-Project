import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/home";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Header from "./pages/home/navbar";
import SingleProduct from "./pages/singleproduct";
import Yacht from "./pages/products/yacht";
import Navbar from "./pages/home/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/yacht/:id" element={<Yacht />} />
        <Route path="/yacht" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
