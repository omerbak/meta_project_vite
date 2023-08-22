import React from "react";
import person1 from "../icons_assets/Vincent.jpg";
import person2 from "../icons_assets/Ayo.jpg";
import person3 from "../icons_assets/Jessie.jpg";
import { AiFillStar } from "react-icons/ai";

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-headline">Testimonials</h2>
        <div className="cus-cards-box">
          <div className="cus-card">
            <div className="card-top">
              <div className="cus-info">
                <span className="cus-name">Vincent</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 9</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person1} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Delicious food, excellent service. Would definitely recommend.
            </p>
          </div>
          <div className="cus-card">
            <div className="card-top">
              <div className="cus-info">
                <span className="cus-name">Ayo</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 8.5</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person2} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Hidden gem in city. Authentic food, reasonable prices. Great
              service.
            </p>
          </div>
          <div className="cus-card">
            <div className="card-top">
              <div className="cus-info">
                <span className="cus-name">Jessie</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 10</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person3} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Wonderful experience. Delicious food, excellent service, cozy
              atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
