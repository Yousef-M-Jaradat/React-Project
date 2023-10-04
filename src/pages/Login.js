import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [status, setStatus] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate for navigation


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    //     console.log(e.target.password.value);
    data.map((apidata, index) => {
      // check the email is valid
      if (e.target.email.value === apidata.email) {
        // check the password is correct
        if (e.target.password.value === apidata.password) {
          setStatus(true);
          navigate("/Register");
        }
        return console.log("welcom");
      }

      return index;
    });
  };
  // get the data from API
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const apiData = response.data;

        // Push the API data into the dataArray

        setData(apiData);

        // Handle the successful response here
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  });

  return (
    <div>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} id="login-form">
          <p>
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input type="submit" id="login" value="login" />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
