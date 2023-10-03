import React, { useState } from "react";
import { useUser } from "./UserContext";

function Login() {
  const { userData } = useUser();
  const [username, setUsername] = useState(userData ? userData.username : "");
  const [password, setPassword] = useState(userData ? userData.password : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form onClick={handleSubmit} id="login-form">
          <p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </p>
          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </form>
        <div id="create-account-wrap"></div>
      </div>
    </div>
  );
}

export default Login;
