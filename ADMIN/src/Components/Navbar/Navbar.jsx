import React from "react";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-logo">
      <img src={logo} alt="" style={{ height: "30px", width: "30px" }} />
      <p>HarvestHub</p>
    </div>
  );
};

export default Navbar;
