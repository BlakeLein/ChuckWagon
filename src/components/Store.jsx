import React from "react";
import "../css/store.css";
import { useSelector } from "react-redux";
import StoreItemCard from "./StoreItemCard";
import StoreItemPage from "./StoreItemPage";

export default function Store() {
  const shopItems = useSelector((state) => state.store.shopItems);
  console.log(shopItems);
  return (
    <div>
      <div className="dummy"></div>
      <h1 id="h1">Welcome to the General Store</h1>
      <div className="store-container">
        {shopItems.map((item) => (
          <>
            <StoreItemCard key={item.key} item={item} />
            <h1>{console.log(item.type)}</h1>
          </>
        ))}
      </div>
    </div>
  );
}
