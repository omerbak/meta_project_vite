import React from "react";
import photo1 from "../icons_assets/Mario and Adrian A.jpg";
import photo2 from "../icons_assets/Mario and Adrian b.jpg";

const Chicago = () => {
  return (
    <section className="chicago">
      <div className="container">
        <div className="chicago-text-box">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Little Lemon is a hidden gem in Chicago serving up delicious and
            authentic Mediterranean food. Our menu features a variety of dishes,
            from classic favorites like hummus and baba ghanoush to more unique
            creations like our lamb kebabs and grilled octopus. We also have a
            wide selection of wines and beers to pair with your meal.
          </p>
        </div>
        <div className="chicago-img-box">
          <img src={photo2} alt="" />
          <img src={photo1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Chicago;
