import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="DescriptionBox">
      <div className="DescriptionBox-navigator">
        <div className="DescriptionBox-nav-box">Description</div>
        <div className="DescriptionBox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="DescriptionBox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
          distinctio cupiditate, optio, nostrum alias earum cumque expedita eos
          velit consectetur eaque quia! Veniam provident repellat officia
          doloremque sint. Eos, nisi?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          laboriosam quam harum fugit expedita id quod debitis impedit quidem,
          modi atque cupiditate illo accusamus, ea maxime sit perferendis
          laborum dolore.
        </p>
      </div>
    </div>
  );
}
