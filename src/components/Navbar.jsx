import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

export default function Navbar() {
  // Collapsable NavBar Fucntions
  const [open, setOpen] = useState(false);

  const navBarNeeded = useMediaQuery({ maxWidth: 1000 });
  console.log(navBarNeeded);

  // Set open to "false" when reach a certain size, set to "true" when it goes back down

  const showNavbar = () => {
    if (navBarNeeded) {
      setOpen(!open);
    }
  };

  const cartItems = useSelector((state) => state.cart.cart.length);
  return (
    <div>
      <div className="navbar">
        <img src={require("../images/chuck-wagon.png")} />
        <div id="nav-item" className="nav-left">
          <Link to="/">Home</Link> | <Link to="/menu">Menu</Link> |{" "}
          <Link to="/about">Our Story</Link> | <Link to="/store">Shop</Link>
        </div>
        <div id="nav-item" className="nav-right">
          <Link to="/locate">Find a Restaurant</Link> |
          <div className="cart-icon-container">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
            <div className={cartItems ? "red-cart-dot visible" : "hidden"}>
              {cartItems}
            </div>
          </div>
          <div id="hamburger-btn" onClick={showNavbar}>
            <div className="hamburger-top"></div>
            <div className="hamburger-mid"></div>
            <div className="hamburger-bot"></div>
          </div>
        </div>
      </div>

      <div className="dummy"></div>
      {/* if opennavbar is true, render below otherwise render null */}
      {navBarNeeded && (
        <>
          {open && (
            <div className="collapsible-menu">
              <div className="collapsible-container">
                <Link to="/" onClick={showNavbar}>
                  Home
                </Link>
                <Link to="/menu" onClick={showNavbar}>
                  Menu
                </Link>
                <Link to="/about" onClick={showNavbar}>
                  Our Story
                </Link>
                <Link to="/store" onClick={showNavbar}>
                  Shop
                </Link>
                <Link to="/locate" onClick={showNavbar}>
                  Find a Restaurant
                </Link>
                <Link to="contact" onClick={showNavbar}>
                  Contact Us
                </Link>
                <Link to="/cart" onClick={showNavbar}>
                  <FontAwesomeIcon icon={faCartShopping} />
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
