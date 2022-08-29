import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import StoreItemPage from "./StoreItemPage";

export default function ShopItem(props) {
  const dispatch = useDispatch();
  return (
    <div className="shop-item">
      <div className="store-test">
        <img src={props.item.imgA} />
        <h2 id="h1">{props.item.name}</h2>
        <div className="shop-card-info">
          <div className="shop-card-text">
            <p>${props.item.price}</p>
            <Link to="/storeItem">
              <button
                name={props.item.name}
                onClick={() => {
                  dispatch({ type: "VIEW_ITEM", payload: props.item });
                }}
                className="shop-order-btn"
              >
                Add to Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
