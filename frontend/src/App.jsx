import React from "react";
import Footer from "./components/template/Footer";
import Nav from "./components/template/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes";

const App = () => (
  <Router>
    <div className="app">
      <div className="header">
        <Nav />
      </div>
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
