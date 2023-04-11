import React from 'react';
import { Link } from 'react-router-dom';
import heroImgae from "../icons_assets/restaurant.jpg";


const Hero = () => {
  return (
    <section className='hero-section'>
      <div className="container">
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit alias hic maxime assumenda, aut voluptate doloribus quae voluptates ab mollitia.</p>
            <Link to="/booking" className='cta-btn'>Rserve Table</Link>
        </div>
        <div className="hero-image">
          <img src={heroImgae} alt="resturant's food sample" />
        </div>
      </div>
    </section>
  )
}

export default Hero