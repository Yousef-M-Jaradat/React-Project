import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Booking from "../booking";
import Payment from "../Payment";

function Navbar() {
   
  return (
    <div>
      <ul>
        <li>
          <Link to="/Register">Registration</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Booking">Booking</Link>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );  


};
export default Navbar;

