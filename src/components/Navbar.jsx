import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        {/* <h1>Chuck Wagon</h1> */}
        <img src={require("../images/chuck-wagon.png")} />
        <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> |{" "}
        <Link to="/about">Our Story</Link> | <Link to="/store">Shop</Link>
      </div>
      <div className="nav-right">
        <Link to="/locate">Find a Restaurant</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>
      </div>
    </div>
  );
}
