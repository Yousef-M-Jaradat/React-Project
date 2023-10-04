// import logo from './logo.svg';
// import About from './pages/about';
import Booking from './pages/booking';
import './App.css';
import React from "react";
import Payment from "./pages/Payment";

// import Home from "./pages/home/home"; 
import Header from "./pages/home/header";
import Counter from "./pages/home/counter"
import Blog from "./pages/home/blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./pages/UserContext"; // Updated import path
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";


function App() {
  return (
    <div>
      <Booking />
      <Header />
      <Counter />
      <Blog />

      <UserProvider>
        <div>
          <ul>
            <li>
              <Link to="/">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/payment">payment</Link>
            </li>
          </ul>
          <hr />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
