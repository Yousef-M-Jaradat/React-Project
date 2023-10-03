// import logo from './logo.svg';
// import About from './pages/about';
import Booking from './pages/booking';
import './App.css';
import React from "react";

// import Home from "./pages/home/home"; 
import Header from "./pages/home/header";
import Counter from "./pages/home/counter"
import Blog from "./pages/home/blog";



function App() {
  return (
    <div>
      <Booking />
      <Header />
      <Counter />
      <Blog />
     
    </div>
  );
}

export default App;
