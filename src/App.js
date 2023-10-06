
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home/home";
import Register from "./pages/Register";
import Booking from "./pages/booking";
import Profile from './pages/profile/Profile';
import SingleProduct from "./pages/singleproduct";
import Yacht from "./pages/products/yacht";
import Header_nav from "./pages/home/navbar";
import Footer from "./pages/home/footer";
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript

// import Product from "./pages/products/products";
//import "./style.css";

function App() {
  
 
   return (
     <div>
       <Header_nav />
       <Routes>
         <Route path="/Register" element={<Register />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/profile" element={<Profile />} />
         {/* <Route path="/singleProduct" element={<SingleProduct />} /> */}
         <Route path="/Login" element={<Login />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/yachts/:id" element={<Yacht />} />
         <Route path="/products/:id" element={<SingleProduct />} />
         {/* <Route path="/product" element={<Product />} /> */}
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
       </Routes>
       <Footer />
     </div>
   );
}

export default App;
