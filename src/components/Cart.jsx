import React from "react";
import "../Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  const menuItems = cartItems.filter((item) => item.type === "food");
  const storeItems = cartItems.filter((item) => item.type === "store");

  const calculateSubtotal = (items) => {
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
      subtotal += items[i].price;
    }
    return subtotal;
  };
  const calculateTaxes = (subtotal) => {
    return (subtotal * 0.0825).toFixed(2);
  };
  const calculateTotal = (subtotal, taxes) => {
    return (parseFloat(subtotal) + parseFloat(taxes)).toFixed(2);
  };
  const cartSubtotal = calculateSubtotal(cartItems);
  const storeSubtotal = calculateSubtotal(storeItems);
  const menuSubtotal = calculateSubtotal(menuItems);
  const taxes = calculateTaxes(cartSubtotal);
  const total = calculateTotal(cartSubtotal, taxes);

  return (
    <div>
      <div className="dummy"></div>
      <div className="main-cart-container">
        <h1 id="h1">Cart</h1>
        <h1 id="h1-sub" className={cartItems.length < 1 ? "visible" : "hidden"}>
          You currently have no items in your cart
        </h1>
        <div className="cart-item-container">
          {/* Store Items */}
          <div className="cart-item-inner-container">
            <h1
              id="h1-sub"
              className={storeItems.length < 1 ? "hidden" : "visible"}
            >
              Items from the General Store
            </h1>
            {storeItems.map((item) => (
              <div className="cart-item">
                <div className="x-name">
                  <button
                    className="x"
                    onClick={() =>
                      dispatch({ type: "DELETE_ITEM", payload: item })
                    }
                  >
                    X
                  </button>
                  <div>
                    {item.name} {item.size ? `(${item.size})` : ""}
                  </div>
                </div>
                <div>$ {item.price}</div>
              </div>
            ))}
            <div
              className={storeItems.length < 1 ? "hidden" : "sub-tax visible"}
            >
              <h3>Store Subtotal</h3>
              <p>$ {storeSubtotal}.00</p>
            </div>
          </div>
          {/* Menu Items */}
          <div className="cart-item-inner-container">
            <div className="store-items">
              <h1
                id="h1-sub"
                className={menuItems.length < 1 ? "hidden" : "visible"}
              >
                Items from the Menu
              </h1>
              {menuItems.map((item) => (
                <div className="cart-item">
                  <div className="x-name">
                    <button
                      className="x"
                      onClick={() =>
                        dispatch({ type: "DELETE_ITEM", payload: item })
                      }
                    >
                      X
                    </button>
                    <div>
                      {item.name} {item.size ? `(${item.size})` : ""}
                    </div>
                  </div>
                  <div>$ {item.price}</div>
                </div>
              ))}
              <div
                className={menuItems.length < 1 ? "hidden" : "sub-tax visible"}
              >
                <h3>Menu Subtotal</h3>
                <p>$ {menuSubtotal}.00</p>
              </div>
            </div>

            <div
              className={cartItems.length < 1 ? "hidden" : "cost-info visible"}
            >
              <div className="final-sub-total">
                <h3 id="h1-sub">Subtotal</h3>
                <p>$ {cartSubtotal}.00</p>
              </div>
              <div className="final-sub-total">
                <h3 id="h1-sub">Tax</h3>
                <p>$ {taxes}</p>
              </div>
              <div className="total">
                <h3 id="h1-sub">Total</h3>
                <p>$ {total}</p>
              </div>
            </div>
            <Link
              to="/checkout"
              className={cartItems.length < 1 ? "hidden" : "visible"}
              id="checkout-btn"
              onClick={dispatch({ type: "CART_TOTAL", payload: total })}
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
