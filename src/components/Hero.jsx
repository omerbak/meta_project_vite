import React from "react";
import { Link } from "react-router-dom";
import heroImgae from "../icons_assets/restaurant.jpg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Our restaurant is small and cozy, creating a warm and inviting
            atmosphere. We are the perfect place to enjoy a casual meal with
            friends or family. Come experience Little Lemon today!
          </p>
          <Link to="/booking" className="cta-btn">
            Rserve Table
          </Link>
        </div>
        <div className="hero-image">
          <img src={heroImgae} alt="resturant's food sample" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
