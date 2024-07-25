import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item(props) {
  return (
    <div className="Item">
      <Link onClick={window.scrollTo(0, 0)} to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>

      <div className="Item-prices">
        <div className="Item-price-new">${props.new_price}</div>

        <div className="Item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
}
