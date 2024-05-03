import React, { useState } from "react";
import "./Register.css";
import RegisterLogo from "../../assets/Registo.gif";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    telefone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegistration = async () => {
    try {
      // Check if passwords match
      if (userData.password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      // API call to the backend registration endpoint
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        navigate("/home");
      } else {
        alert("Error registering user, email already in use");
      }
    } catch (error) {
      alert("Error processing registration:", error);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "password") {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [e.target.name]: e.target.value,
      }));
    } else if (e.target.name === "confirmPassword") {
      setConfirmPassword(e.target.value);
    } else {
      setUserData((prevUserData) => ({
        ...prevUserData,
        [e.target.name]: e.target.value,
      }));
    }
  };

  return (
    <div className="Registration">
      <div className="Title">
        <div className="logo">
          <h1>Registration</h1>
          <img src={RegisterLogo} alt="Registration Logo" />
        </div>

        <small>
          Register now to stay informed of all information and offers. We will
          contact you as soon as possible!
        </small>

      </div>
      <hr />
      <div className="form">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputFullName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFullName"
              aria-describedby="fullNameHelp"
              placeholder="Enter your full name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputConfirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputConfirmPassword"
              placeholder="Confirm your Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="examplePhone1">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="examplePhone1"
              placeholder="Enter your contact"
              name="telefone"
              value={userData.telefone}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleRegistration}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
