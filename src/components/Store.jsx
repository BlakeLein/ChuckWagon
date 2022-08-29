import React from "react";
import "../css/store.css";
import { useSelector } from "react-redux";
import StoreItemCard from "./StoreItemCard";
import StoreItemPage from "./StoreItemPage";

export default function Store() {
  const shopItems = useSelector((state) => state.store.shopItems);
  const shopOpen = useSelector((state) => state.store.shopOpen);

  return (
    <div>
      <div className="dummy"></div>
      <h1 id="h1">Welcome to the General Store</h1>
      <div className="store-container">
        {shopItems.map((item) => (
          <StoreItemCard item={item} />
        ))}
      </div>
      {/* <div className={shopOpen ? "open-shop" : "close-shop"}>
        <StoreItemPage />
      </div> */}
    </div>
  );
}
