import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function ErrorPage() {
  return (
    <div className="error-inner">
      <div className="error-container">
        <div className="dummy"></div>
        <h1 id="h1">Uh Oh! We couldn't find that page!</h1>
        <h1 id="h1-sub">Looks like you're a little off the trail...</h1>
        <img src={require("../images/sad_cowboy.png")} />
        <Link to="/">Click Here to Return to Camp!</Link>
      </div>
    </div>
  );
}
