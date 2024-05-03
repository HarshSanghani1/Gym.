import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/home">
            <span className="glyphicon glyphicon-home"></span> Home
          </a>
        </li>
        <li>
          <a href="/About">
            <span className="glyphicon  glyphicon-fire"></span> About Us
          </a>
        </li>
        <li>
          <a href="/Plans">
            <span className="glyphicon glyphicon-tag"></span> Plans
          </a>
        </li>
        <li>
          <a href="/Contacts">
            <span className="glyphicon glyphicon-earphone"></span> Contacts
          </a>
        </li>
        <li>
          <a href="/Register">
            <span className="glyphicon glyphicon-user"></span> Member Registration
          </a>
        </li>
        <li>
          <a href="/Login">
            <span className="glyphicon glyphicon-log-in"></span> Admin Login
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
