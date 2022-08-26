import React from "react";
import "../Menu.css";

export default function MenuItem(props) {
  return (
    <div className="menu-item">
      <h2 id="h1">{props.item.name}</h2>
      <div className="card-info">
        <div className="card-text">
          <p>{props.item.description}</p>
          <p>${props.item.price}</p>
          <button className="order-btn">Add to Order</button>
        </div>
        <img src={props.item.img} />
      </div>
    </div>
  );
}
