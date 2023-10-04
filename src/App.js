// import logo from './logo.svg';
// import About from './pages/about';
//import Booking from './pages/Booking';
import './App.css';
import React from "react";
// import Home from "./pages/home/home"; 
import Navbar from "./pages/home/navbar";
// import "./style.css";
import SingleProduct from './pages/singleproduct';


function App() {
  return (
    <div>
      <SingleProduct />
      <Navbar />
    </div>
  );
}

export default App;
