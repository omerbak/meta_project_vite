import React, { useState } from "react";
import Dish from "./Dish";
import { meals } from "../../lib/meals";

const Menu = () => {
  const [selectedCatg, setSelectedCatg] = useState(1);

  let items = meals["appetizers"];
  if (selectedCatg === 1) {
    items = meals["appetizers"];
  } else if (selectedCatg === 2) {
    items = meals["main"];
  } else if (selectedCatg === 3) {
    items = meals["desserts"];
  } else if (selectedCatg === 4) {
    items = meals["drinks"];
  }

  return (
    <div className="menu-page">
      <div className="container">
        <div className="menu-catgs-box">
          <span
            className={selectedCatg === 1 ? "menu-catg selected" : "menu-catg"}
            onClick={() => setSelectedCatg(1)}
          >
            Appetizers
          </span>
          <span
            className={selectedCatg === 2 ? "menu-catg selected" : "menu-catg"}
            onClick={() => setSelectedCatg(2)}
          >
            Main Dishes
          </span>
          <span
            className={selectedCatg === 3 ? "menu-catg selected" : "menu-catg"}
            onClick={() => setSelectedCatg(3)}
          >
            Deserts
          </span>
          <span
            className={selectedCatg === 4 ? "menu-catg selected" : "menu-catg"}
            onClick={() => setSelectedCatg(4)}
          >
            Drinks
          </span>
        </div>
        <div className="menu-items-box">
          {items.map((item, ind) => (
            <Dish key={ind} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
