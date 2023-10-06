import React, { useEffect, useState,useContext,createContext } from "react";
import axios from 'axios';// Import axios
import { Navigate, useNavigate } from "react-router-dom"; // Import useNavigate
import '../login.css'
function Login() {
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const apiUrl = "https://64db17df593f57e435b06a91.mockapi.io/AHMED";
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [status, setStatus] = useState(false);
  const UserContext = createContext();

  const navigate = useNavigate(); // Initialize useNavigate for navigation


  const handleSubmit = (e) => {
    e.preventDefault();
   
    data.map((apidata, index) => {
      // check the email is valid
      if (e.target.email.value === apidata.email) { 
        const userdata = {
          name: apidata.firstName,
          user_id: apidata.id,
          status: status,
        }; 
        localStorage.setItem('user',JSON.stringify(userdata));
        
        // check the password is correct
        if (e.target.password.value === apidata.password) {
        localStorage.getItem("user");
          setStatus(true);
          userdata.status=status
          console.log(status)
          if (status===true) {
            navigate("/");
          
          }
        

          
        }else{
                   navigate("/login");

        }
        
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
    <div className="image">
      <div className='login container'>
      <div className="login-form-wrap">
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
              class="form-control form-control-lg"
              value={email}
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              class="form-control form-control-lg"
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
            <input
              class="btn btn-primary mb-2 col-12 "
              type="submit"
            />
          </p>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Login;
