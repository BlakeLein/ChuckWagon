import React from "react";
import "../css/store.css";
import { useSelector } from "react-redux";

export default function StoreItemPage() {
  const item = useSelector((state) => state?.store?.itemToView);
  return (
    <div className="store-item-page-container">
      <div className="store-item-page-inner-container">
        <h1 id="store-item-page-h1">{item?.name}</h1>
        <div>
          <div>
            <img />
            <img />
          </div>
          <div>
            <p>{item?.description}</p>
            <select placeholder="Select Size">
              <option>Select Size</option>
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
          </div>
        </div>
      </div>
    </div>
  );
}
