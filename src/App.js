import React from "react";
import About from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";

function App() {
  return (
 
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
   
  );
}

export default App;
