
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
import Aboutus from "./pages/aboutus";

import Profile from './pages/profile/Profile';
import SingleProduct from "./pages/singleproduct";
import Yacht from "./pages/products/yacht";
import Navbar from "./pages/home/navbar";
import Footer from "./pages/home/footer";
import 'bootstrap/dist/js/bootstrap'; // Import Bootstrap JavaScript
import Contact from './pages/Contact';

// import Product from "./pages/products/products";
//import "./style.css";

function App() {
  
 
   return (
     <div>
       <Navbar />
       <Routes>
         <Route path="/Register" element={<Register />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/booking" element={<Booking />} />
         <Route path="/profile" element={<Profile />} />
         {/* <Route path="/singleProduct" element={<SingleProduct />} /> */}
         <Route path="/about" element={<Aboutus />} />
         <Route path="/contact" element={<Contact />} />

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
