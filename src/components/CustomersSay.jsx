import React from "react";
import person from "../icons_assets/person.webp";
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
                <span className="cus-name">Omar</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 9</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla minima dicta quo! Molestias, quo?
            </p>
          </div>
          <div className="cus-card">
            <div className="card-top">
              <div className="cus-info">
                <span className="cus-name">Omar</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 9</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla minima dicta quo! Molestias, quo?
            </p>
          </div>
          <div className="cus-card">
            <div className="card-top">
              <div className="cus-info">
                <span className="cus-name">Omar</span>
                <div className="cus-rating">
                  <span>Rating:</span>
                  <span> 9</span>
                  <AiFillStar className="rating-icon" />
                </div>
              </div>
              <div className="cus-img-box">
                <img src={person} alt="" />
              </div>
            </div>
            <p className="cus-review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              nulla minima dicta quo! Molestias, quo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
