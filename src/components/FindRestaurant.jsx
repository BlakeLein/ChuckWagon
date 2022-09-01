import React from "react";
import "../css/find.css";

export default function FindRestaurant() {
  return (
    <div>
      <div className="dummy"></div>
      <h1 id="h1">Find a Restaurant</h1>
      <div className="map-container">
        <h3>East Pearland</h3>
        <div className="map">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2650%20Pearland%20Pkway,%20Pearland,%20TX%2077581+(Chuck%20Wagon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure acres/hectares on map
            </a>
          </iframe>
        </div>
        <h3>West Pearland</h3>
        <div className="map">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=11200%20Broadway%20Street,%20Pearland,%20TX%2077584+(Chuck%20Wagon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              distance maps
            </a>
          </iframe>
        </div>
        <h3>Baybrook Mall</h3>
        <div className="map">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=500%20Baybrook%20Mall,%20Friendswood,%20TX%2077546+(Chuck%20Wagon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/distance-area-calculator.html">
              measure area map
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
