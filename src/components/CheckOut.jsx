import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../css/checkout.css";
import orderSelectOptions from "../data/orderSelectOptions";

export default function CheckOut() {
  const total = useSelector((state) => state.cart.cartTotal);
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.order.firstName);
  const lastName = useSelector((state) => state.order.lastName);
  const emailAddress = useSelector((state) => state.order.emailAddress);
  const street = useSelector((state) => state.order.street);
  const city = useSelector((state) => state.order.city);
  const states = orderSelectOptions.states;
  const pickUpTimes = orderSelectOptions.times;
  const cardNumber = useSelector((state) => state.order.cardNumber);
  const months = orderSelectOptions.expMonths;
  const years = orderSelectOptions.expYears;
  const CVV = useSelector((state) => state.order.CVV);

  return (
    <div className="checkout-container">
      <div className="dummy"></div>
      <h1 id="h1">Checkout</h1>
      <div className="checkout-inner-container">
        <h3>Cart Total: ${total}</h3>
        <div className="form">
          <div className="names">
            <input
              onChange={(e) =>
                dispatch({ type: "FIRST", payload: e.target.value })
              }
              type="text"
              value={firstName}
              name="first"
              placeholder="First Name"
            />
            <input
              onChange={(e) =>
                dispatch({ type: "LAST", payload: e.target.value })
              }
              type="text"
              value={lastName}
              name="last"
              placeholder="Last Name"
            />
          </div>
          <div className="email">
            <input
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
              type="text"
              value={emailAddress}
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="address">
            <input
              onChange={(e) =>
                dispatch({ type: "STREET", payload: e.target.value })
              }
              type="text"
              value={street}
              name="street"
              placeholder="Street Address"
            />
            <input
              onChange={(e) =>
                dispatch({ type: "CITY", payload: e.target.value })
              }
              type="text"
              value={city}
              name="city"
              placeholder="City"
            />
            <select
              onChange={(e) =>
                dispatch({ type: "STATE", payload: e.target.value })
              }
              name="state"
            >
              <option hidden disabled selected>
                Select State
              </option>
              {states.map((state) => (
                <option>{state}</option>
              ))}
            </select>
          </div>
          <div className="pickup">
            <input
              onChange={(e) =>
                dispatch({ type: "PICK_DATE", payload: e.target.value })
              }
              type="date"
              name="date"
            />
            <select
              onChange={(e) =>
                dispatch({ type: "PICK_TIME", payload: e.target.value })
              }
              name="time"
            >
              <option disabled selected hidden>
                Select Pick-Up Time
              </option>
              {pickUpTimes.map((time) => (
                <option>{time}</option>
              ))}
            </select>
          </div>
          <div className="payment-label">
            <label>
              Payment is required at the time you place your order. Please enter
              your payment information below.
            </label>
          </div>
          <div className="card-no">
            <input
              onChange={(e) =>
                dispatch({ type: "CARD_NUM", payload: e.target.value })
              }
              type="text"
              name="card-number"
              value={cardNumber}
              placeholder="Card number (no spaces)"
            />
          </div>
          <div className="card-info">
            <select
              onChange={(e) =>
                dispatch({ type: "EXP_MONTH", payload: e.target.value })
              }
              type="text"
              name="exp-month"
            >
              <option disabled hidden selected>
                Exp Month
              </option>
              {months.map((month) => (
                <option>{month}</option>
              ))}
            </select>
            <select
              onChange={(e) =>
                dispatch({ type: "EXP_YEAR", payload: e.target.value })
              }
              type="text"
              name="exp-year"
            >
              <option disabled hidden selected>
                Exp Year
              </option>
              {years.map((year) => (
                <option>{year}</option>
              ))}
            </select>
            <input
              onChange={(e) =>
                dispatch({ type: "CVV", payload: e.target.value })
              }
              type="text"
              name="cvv"
              value={CVV}
              placeholder="CVV"
            />
          </div>
          <div className="agreement">
            <label>
              <input id="radio" type="radio" name="agree" value="" required />I
              agree to the terms of service for Online Transactions.
            </label>
          </div>
          <button
            onClick={() => dispatch({ type: "PLACE_ORDER" })}
            id="submit-btn"
            name="submit"
          >
            Place Order!
          </button>
        </div>
      </div>
    </div>
  );
}
