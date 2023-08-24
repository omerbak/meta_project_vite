import React, { useState } from "react";

const Dish = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { name, price, url, desc } = item;

  return (
    <div className="dish-box">
      <img src={url} alt={name} className="dish-img" />
      <div className="dish-info-container">
        <div className="dish-info">
          <span className="dish-name">{name}</span>
          <span className="dish-price">
            {price} <span>$</span>
          </span>
        </div>
        <div
          className={`desc-open ${isOpen && "open"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
      <div className={`dish-desc ${isOpen && "open"}`}>{desc}</div>
    </div>
  );
};

export default Dish;
