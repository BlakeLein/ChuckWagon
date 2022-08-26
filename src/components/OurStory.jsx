import React from "react";
import "../Menu.css";
import { useSelector, useDispatch } from "react-redux";
import Review from "./Review";

export default function OurStory() {
  const reviews = useSelector((state) => state.review.reviews);
  return (
    <div className="about-main">
      <div className="dummy"></div>
      <h1 id="h1">Our Story</h1>
      <div className="about-text">
        <p>
          We set up camp with the Chuck Wagon Grill & Cafe in March of 2022 in
          Pearland, Texas. The idea was simple - to provide quality food to the
          simple-minded folks looking to get away from the hustle and bustle of
          the big city. That's why we specialize in outdoor cooking for the
          whole family. From our Cowboy Sliders to our Homemade Ice Cream, it's
          our gurantee that we have exaclty what you need to feel like you're on
          the trail without a care in the world.
        </p>
        <h3>Hearth Kitchen</h3>
        <p>
          The Chuck Wagon Grill is a family-owned and operated business, and we
          like to put the community first. We encourage all of our patrons to
          take part in our "pay-it-forward" program - a donation service
          designed to give back to those in need. Simply tell your cashier that
          you want to add the $2 "Hearth Bonus" to your order. Your donation
          will go into our food vault, and you can see these donations in action
          every Saturday night outside the shop at our Hearth Kitchen.
        </p>
        <div className="reviews-container">
          <h3>What Our Customers Say</h3>
          <div className="reviews">
            {reviews.map((review) => (
              <Review review={review} />
            ))}
          </div>
        </div>
        <div className="form-container">
          <h3>Now Tell Us What You Think</h3>
          <label>Tell us about your experience!</label>
          <form className="about-form">
            <div className="form-names">
              <input placeholder="First Name" type="text" name="first" />
              <input placeholder="Last Name" type="text" name="last" />
            </div>
            <input placeholder="Email Adress" type="email" name="email" />
            <input
              size="500"
              placeholder="Tell us about your visit!"
              type="text"
              name="about"
            />
            <input id="form-btn" type="submit" name="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}
