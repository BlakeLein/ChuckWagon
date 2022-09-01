import React from "react";
import "../Menu.css";
import { useDispatch } from "react-redux";

export default function MenuItem(props) {
  const dispatch = useDispatch();
  return (
    <div className="menu-item">
      <h2 id="h1-sub">{props.item.name}</h2>
      <div className="card-info">
        <div className="card-text">
          <p>{props.item.description}</p>
          <p className="red">${props.item.price}</p>
          <button
            className="order-btn"
            onClick={() => {
              dispatch({ type: "ADD_TO_CART", payload: props.item });
              alert(`Added ${props.item.name} to your cart`);
            }}
          >
            Add to Order
          </button>
        </div>
        <img src={props.item.img} />
      </div>
    </div>
  );
}
