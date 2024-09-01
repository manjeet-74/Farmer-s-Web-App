import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import nav_dropdown from "../Assets/arrow_icon.svg";
import "./Navbar.css";

import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/cart_icon.png";
import logo from "../Assets/logo.jpg";

export default function Navbar() {
  const [menu, setMenu] = useState("");

  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="Navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ height: "30px", width: "30px" }} />
        <p>HarvestHub</p>
      </div>

      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("fruits");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/fruits">
            Fruits
          </Link>{" "}
          {menu === "fruits" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("vegetables");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/vegetables">
            Vegetables{" "}
          </Link>
          {menu === "vegetables" ? <hr /> : <></>}{" "}
        </li>

        <li
          onClick={() => {
            setMenu("grains");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/grains">
            Grains
          </Link>{" "}
          {menu === "grains" ? <hr /> : <></>}{" "}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
