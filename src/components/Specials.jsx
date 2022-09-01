import React from "react";
import "../css/specials.css";

export default function Specials() {
  return (
    <div className="specials-container">
      <div className="dummy"></div>
      <h1 id="h1">Specials</h1>
      <div className="specials-inner-container">
        <div className="specials-item">
          <img src={require("../images/specials/monday.jpg")} />
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Monday
            </h2>
            <h4 className="special">Half-Off Drinks All Day!</h4>
            <p>Grab your buddies and come celebrate the end of Monday!</p>
          </div>
        </div>
        <div className="specials-item">
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Tuesday
            </h2>
            <h4 className="special">Pizza Night</h4>
            <p>
              Everyone loves Pizza. Purchase one of our specialty pizzas for 20%
              off or build your own pizza for 10% off!
            </p>
          </div>
          <img src={require("../images/specials/tuesday.jpg")} />
        </div>
        <div className="specials-item">
          <img src={require("../images/specials/wednesday.jpg")} />
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Wednesday
            </h2>
            <h4 className="special">Ice Cream Social</h4>
            <p>
              Ice cream cones and cups of all sizes are 15% off for adults and
              30% off for kids!
            </p>
          </div>
        </div>
        <div className="specials-item">
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Thursday
            </h2>
            <h4 className="special">Wing Night</h4>
            <p>
              Wing it and weep. Every wing is only 50 cents. We stock up pretty
              seriously for this, so please come eat. Also, you can watch the
              big Thursday Night game (that we can't name for copyright reasons)
              on one of our big screens!
            </p>
          </div>
          <img src={require("../images/specials/thursday.jpg")} />
        </div>
        <div className="specials-item">
          <img src={require("../images/specials/friday.jpg")} />
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Friday
            </h2>
            <h4 className="special">Friday is Fry Day!</h4>
            <p>
              It's Fry-day!!! 20% off any order of french fries with the
              purchase of any entrée!
            </p>
          </div>
        </div>
        <div className="specials-item">
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Saturday
            </h2>
            <h4 className="special">Live Music & Chili Night</h4>
            <p>
              Enjoy local musicians and a bowl of our famous chili. 40% of every
              chili purchase is given to our musicians...don't forget to leave a
              little extra for them too!
            </p>
            <p>
              If you are interested in performing at The Chuck Wagon, please
              contact us at info@chuckwagon.org
            </p>
          </div>
          <img src={require("../images/specials/saturday.jpg")} />
        </div>
        <div className="specials-item">
          <img src={require("../images/specials/sunday.jpg")} />
          <div className="specials-info">
            <h2 id="h1-sub-specials" className="day">
              Sunday
            </h2>
            <h4 className="special">Kids Eat Lunch Free!</h4>
            <p>
              Stop by on your way home from church and feed the little ones. You
              are hungry. They are hungry. They get a free lunch. You are happy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
