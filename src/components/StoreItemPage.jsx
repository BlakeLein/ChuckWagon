import React from "react";
import "../css/store.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function StoreItemPage() {
  const item = useSelector((state) => state?.store?.itemToView);
  const dispatch = useDispatch();
  const checkForSize = (object) => {
    if (item.size !== "") {
      dispatch({ type: "ADD_TO_CART", payload: item });
      alert(`Added ${item.name} to your cart`);
    } else {
      alert("Please select a size");
    }
  };
  return (
    <div className="store-item-page-main">
      <div className="store-item-page-container">
        <div className="store-item-page-inner-container">
          <h1 id="h1">{item?.name}</h1>
          <div className="store-item-page-content-container">
            <div className="store-item-page-pictures">
              <img src={item?.imgA} />
              <img src={item?.imgB} />
            </div>
            <div className="detail-container">
              <p id="h1-sub">{item?.description}</p>
              <select
                className={item?.isClothing ? "visible" : "hidden"}
                name={item.name}
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_SIZE",
                    payload: e.target.value,
                  })
                }
                required
              >
                <option disabled selected hidden>
                  Select Size
                </option>
                <option>Youth Small</option>
                <option>Youth Medium</option>
                <option>Youth Large</option>
                <option>Adult Small</option>
                <option>Adult Medium </option>
                <option>Adult Large</option>
                <option>Adult X-Large</option>
                <option>Adult 2X-Large</option>
                <option>Adult 3x-Large</option>
              </select>
              <p>${item?.price}</p>
              <div className="store-item-page-button-container">
                <button
                  className="shop-order-btn"
                  onClick={() => {
                    checkForSize(item);
                  }}
                >
                  Add to Cart
                </button>
                <Link className="return-btn" to="/store">
                  Return to Shop
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
