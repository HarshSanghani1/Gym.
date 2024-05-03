import React, { useState } from "react";
import "./Login.css";
import login from "../../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); 
    if (email === "abcd@gmail.com" && password === "898912") {
      navigate("/members");
      alert("Login successful");
      return;
    }

    alert("Invalid email or password. Please check your credentials.");
  };

  return (
    <div className="login">
      <div className="photo">
        <img src={login} alt="logo" />
      </div>
      <div className="form">
        <div className="logo"></div>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
