import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import '../login.css';
function Register() {
  const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handlefirstName = (e) => {
    setfirstName(e.target.value);
  };
  const handlelastName = (e) => {
    setlastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way

    // Create an object to send in the request body
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post(apiUrl, userData)
      .then((response) => {
        const responseData = response.data;
        // Handle the successful response here
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
    navigate("/Login");
  };

  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handlefirstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="firstName"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handlelastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="lastName"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handleEmail}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              className="form-control form-control-lg"
              onChange={handlePassword}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input
              onClick={handleSubmit}
              className="btn btn-primary mb-2 col-12"
              type="submit"
              id="login"
              value="Register"
            />
          </p>
        </form>
        <div id="create-account-wrap">
          <p>{/* Not a member? <a href="#">Create Account</a> */}</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
