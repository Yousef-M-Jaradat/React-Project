import React, { useState } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const apiUrl = "https://651db05044e393af2d5a346e.mockapi.io/users";
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleUsername = (e) => {
    setUsername(e.target.value);
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
      username: username,
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
    <div>
      <div id="login-form-wrap">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <p>
            <input
              className="logininput"
              onChange={handleUsername}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
            />
          </p>
          <p>
            <input
              className="logininput"
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
              className="logininput"
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
              className="logininput"
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
