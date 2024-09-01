import React, { useContext } from "react";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";
import { ShopContext } from "../Context/ShopContext.jsx";
import "./CSS/ShopCategory.css";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="Shop-category">
      <div className="banner">
        <div className="left-banner"></div>
        <div className="right-banner">
          <img
            className="Shopcategory-banner"
            src={props.banner}
            alt=""
            style={{ height: "250px", width: "250px" }}
          />
        </div>
      </div>

      <div className="Shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="Shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="Shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="Shopcategory-loadmore">Explore More</div>
    </div>
  );
}
