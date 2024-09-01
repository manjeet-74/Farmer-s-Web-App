import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import star_dull_icon from "../Assets/star_dull_icon.png";
import star_icon from "../Assets/star_icon.png";
import "./ProductDisplay.css";

export default function ProductDisplay(props) {
  const { product } = props;

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="ProductDisplay">
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-img-list">
          <img
            src={product.image}
            alt=""
            style={{ height: "120px", width: "120px" }}
          />
          <img
            src={product.image}
            alt=""
            style={{ height: "120px", width: "120px" }}
          />
          <img
            src={product.image}
            alt=""
            style={{ height: "120px", width: "120px" }}
          />
          <img
            src={product.image}
            alt=""
            style={{ height: "120px", width: "120px" }}
          />
        </div>

        <div className="ProductDisplay-img">
          <img
            src={product.image}
            alt=""
            className="ProductDisplay-main-img"
            style={{ height: "510px", width: "510px" }}
          />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>

        <div className="ProductDisplay-right-prices">
          <div className="ProductDisplay-right-price-old">
            &#8377;{product.old_price}
          </div>

          <div className="ProductDisplay-right-price-new">
            &#8377;{product.new_price}
          </div>
        </div>

        <div className="ProductDisplay-right-description">
          A light weight, something something............
        </div>

        <div className="ProductDisplay-right-size">
          <h1></h1>

          <div className="ProductDisplay-right-sizes"></div>
        </div>

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>

        <p className="ProductDisplay-right-category">
          <span>Catogory: </span> Vegetables, Fruits, Grains
        </p>

        <p className="ProductDisplay-right-category">
          <span>Tags: </span> Fresh, Seasonal
        </p>
      </div>
    </div>
  );
}
