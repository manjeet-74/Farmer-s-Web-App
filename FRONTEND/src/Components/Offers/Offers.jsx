import React from "react";
import exclusive_image from "../Assets/exclusive_image.jpg";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="Offers">
      <div className="Offers-left">
        <h1>Fresh Harvest</h1>
        <h1>Seasonal Delights Just for You</h1>
        <p>GET THE BEST DEALS ON LOCALLY GROWN PRODUCE</p>
        <button>Shop Fresh</button>
      </div>

      <div className="Offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}
