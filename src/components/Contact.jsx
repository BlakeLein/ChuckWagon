import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="dummy"></div>
      <h1 id="h1">Contact Us</h1>
      <div className="inner-container">
        <div className="inner-outer-container">
          <div className="info-container">
            <label>
              Phone
              <p>(281) 555-2140</p>
            </label>
            <label>
              General Info
              <p>info@chuckwagon.org</p>
            </label>
            <label>
              Catering Info
              <p>catering@chuckwagon.org</p>
            </label>
            <label>
              Address
              <p>3519 Liberty Drive, Pearland, TX 77581</p>
            </label>
            <label>
              Open Every Day
              <p>10:00 AM - 11:00PM</p>
            </label>
          </div>
          <div className="review-container">
            <h3 id="h1-sub">Leave a Review for Us</h3>
            <form className="about-form">
              <div className="form-names">
                <input placeholder="First Name" type="text" name="first" />
                <input placeholder="Last Name" type="text" name="last" />
              </div>
              <input placeholder="Email Address" type="email" name="email" />
              <input
                size="500"
                placeholder="Tell us about your visit!"
                type="text"
                name="about"
              />
              <select type="select" name="rating">
                <option disabled selected hidden>
                  Rating
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <input id="form-btn" type="submit" name="submit" value="Send" />
            </form>
          </div>
        </div>
        <div className="email-container"></div>
      </div>
    </div>
  );
}
