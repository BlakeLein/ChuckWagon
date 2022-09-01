import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";

export default function Homepage() {
  const dispatch = useDispatch();
  const emailToAdd = useSelector((state) => state.review.emailToAdd);
  return (
    <div className="homepage">
      <div className="container-1">
        <Link to="/menu">
          <button className="home-order-btn">Order Now</button>
        </Link>
      </div>
      <h1 id="h1">Specials For Every Day of the Week</h1>
      <div className="container-2">
        <Link to="/specials" className="specials-btn">
          Click Here to View Specials
        </Link>
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
        </div>
      </div>
      <div className="container-4">
        <h1 id="h1">Join our Electronic Mailing List</h1>
        <div className="e-sign">
          <p>Receive notifications on daily promotions and special offers!</p>
          <form
            onSubmit={() => {
              dispatch({ type: "ADD_EMAIL", payload: emailToAdd });
              alert(
                "You have successfully been added to our electronic mailing list!"
              );
            }}
          >
            <input
              onChange={(e) =>
                dispatch({ type: "EMAIL_TO_ADD", payload: e.target.value })
              }
              className="e-sign-input"
              placeholder="Email Address"
              type="text"
            />
            <input className="e-sign-button" type="submit" value="Join" />
          </form>
          <p>
            By signing up for our electornic mailing service, you are agreeing
            to receive promotional offers and notifications. The Chuck Wagon
            Cafe & Grill will not share your personal information without your
            explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
}
