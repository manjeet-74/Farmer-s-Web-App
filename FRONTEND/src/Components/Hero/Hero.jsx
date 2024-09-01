import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <div>
          <div className="Hero-hand-icon">
            <p>Fresh</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>vegetables</p>
          <p>for everyone</p>
        </div>
        <div className="Hero-latest-btn">
          <div>Today's Harvest</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="Hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}
