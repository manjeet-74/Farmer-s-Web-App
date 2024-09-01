import React from "react";
import instagram_icon from "../Assets/instagram_icon.png";
import footer_logo from "../Assets/logo.jpg";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-logo">
        <img
          src={footer_logo}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <p>HarvestHub</p>
      </div>

      <ul className="Footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="Footer-social-icon">
        <div className="Footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="Footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="Footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div className="Footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
}
