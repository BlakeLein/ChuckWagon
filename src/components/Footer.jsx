import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <h3>About</h3>
        <div className="about-links">
          <Link to="about">Our Story</Link>
          <Link to="contact">Contact Us</Link>
          <Link to="locate">Find a Restaurant</Link>
        </div>
      </div>
      <img src={require("../images/chuck-wagon.png")} />
      <div className="footer-container">
        <h3>Shop</h3>
        <div className="about-links">
          <Link to="menu">Order from the Menu</Link>
          <Link to="store">General Store</Link>
          <Link to="cart">View Cart</Link>
        </div>
      </div>
    </div>
  );
}
