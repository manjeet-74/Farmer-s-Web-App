import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="Hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="Hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="Hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}
