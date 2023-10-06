import React, { useEffect, useState,useContext,createContext } from "react";
import axios from 'axios';// Import axios
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
// import '../style.css';
import '../login.css'
import styled from "styled-components"; // Import styled-components




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = data.find((userdata) => userdata.email === email);
    if (!user) {
      setError("User not found");
      return;
    }

    if (user.password === password) {
      const userData = {
        name: user.firstName,
        user_id: user.id,
        status: true,
      };

      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } else {
      setError("Invalid password");
    }
  };

  useEffect(() => {
    const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Empty dependency array for one-time API request

  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="btn btn-primary col-12" type="submit">
            Log In
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
