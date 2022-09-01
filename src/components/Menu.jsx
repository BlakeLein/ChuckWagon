import React from "react";
import "../Menu.css";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

export default function () {
  const apps = useSelector((state) => state.menu.appetizers);
  const entrees = useSelector((state) => state.menu.entrees);
  const sides = useSelector((state) => state.menu.sides);
  const desserts = useSelector((state) => state.menu.desserts);
  const beverages = useSelector((state) => state.menu.beverages);
  const lunch = useSelector((state) => state.menu.lunchSpecials);
  return (
    <div>
      <div className="dummy"></div>
      <h1 id="h1">Menu</h1>
      <div className="menu-container">
        <div id="appetizers" className="cat-container">
          <h1 id="h1">Appetizers</h1>
          <div className="card-container">
            {apps.map((app) => (
              <MenuItem key={app.key} item={app} />
            ))}
          </div>
        </div>
        <div>
          <div id="entrees" className="cat-container">
            <h1 id="h1">Entrees</h1>
            <div className="card-container">
              {entrees.map((entree) => (
                <MenuItem key={entree.key} item={entree} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div id="sides" className="cat-container">
            <h1 id="h1">Sides</h1>
            <div className="card-container">
              {sides.map((side) => (
                <MenuItem key={side.key} item={side} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div id="desserts" className="cat-container">
            <h1 id="h1">Desserts</h1>
            <div className="card-container">
              {desserts.map((dessert) => (
                <MenuItem key={dessert.key} item={dessert} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div id="beverages" className="cat-container">
            <h1 id="h1">Beverages</h1>
            <div className="card-container">
              {beverages.map((beverage) => (
                <MenuItem key={beverage.key} item={beverage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
