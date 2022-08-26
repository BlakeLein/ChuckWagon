import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="container-1">
        <button className="home-order-btn">Order Now</button>
      </div>
      <h1 id="h1">Specials For Every Day of the Week</h1>
      <div className="container-2">
        <button className="specials-btn">Click Here to View Specials</button>
      </div>
      <div className="container-3">
        <h1 id="h1">Menu Highlights</h1>
        <div className="menu-items">
          <div className="one">
            <h2 id="label">Appetizers</h2>
          </div>
          <div className="two">
            <h2 id="label">Entrées</h2>
          </div>
          <div className="three">
            <h2 id="label">Desserts</h2>
          </div>
          <div className="four">
            <h2 id="label">Beverages</h2>
          </div>
          <div className="five">
            <h2 id="label">Lunch Specials</h2>
          </div>
          <div className="six">
            <h2 id="label">Catering</h2>
          </div>
        </div>
      </div>
      <div className="container-4">
        <h1 id="h1">Join our Electronic Mailing List</h1>
        <div className="e-sign">
          <label>
            Receive notifications on daily promotions and special offers!
          </label>
          <form>
            <input
              className="e-sign-input"
              placeholder="Email Address"
              type="text"
            />
            <input className="e-sign-button" type="submit" value="Join" />
          </form>
        </div>
      </div>
    </div>
  );
}
