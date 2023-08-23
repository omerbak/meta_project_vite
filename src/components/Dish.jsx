import React from "react";

const Dish = ({ item }) => {
  const { name, price, url, desc } = item;
  return (
    <div className="dish-box">
      <img src={url} alt={name} className="dish-img" />
      <div className="dish-info">
        <span className="dish-name">{name}</span>
        <span className="dish-price">
          {price} <span>$</span>
        </span>
      </div>
    </div>
  );
};

export default Dish;
