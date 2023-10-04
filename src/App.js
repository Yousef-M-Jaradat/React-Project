// import logo from './logo.svg';
// import About from './pages/about';
import Booking from './pages/booking';
import './App.css';
import React from "react";

// import Home from "./pages/home/home"; 
import Header from "./pages/home/header";
import Counter from "./pages/home/counter"
import Blog from "./pages/home/blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";


function App() {
  return (
 
    <div>
      <Booking />
      <Header />
      <Counter />
      <Blog />
     



  
      <div>
        <ul>
          <li>
            <Link to="/">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
   
    
    </div>
  );
}

export default App;
