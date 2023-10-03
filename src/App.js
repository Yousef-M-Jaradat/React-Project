import React from "react";
import About from "./pages/about";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./pages/UserContext"; // Updated import path
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";

function App() {
  return (
    <UserProvider>
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
    </UserProvider>
  );
}

export default App;
