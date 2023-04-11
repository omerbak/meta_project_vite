import React from 'react'
import person from '../icons_assets/person.jpg'
const CustomersSay = () => {
  return (
    <section className="testimonials">
        <div className="container">
                <h2 className='testimonials-headline'>Testimonials</h2>
                <div className="cus-cards-box">
                    <div className="cus-card">
                        <span className='cus-rating'>9</span>
                        <div className='cus-img-box'>
                            <span className='cus-name'>Omar</span>
                            <img src={person}alt="" />
                        </div>
                        <p className="cus-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla minima dicta quo! Molestias, quo?
                        </p>
                    </div>
                    <div className="cus-card">
                        <span className='cus-rating'>9</span>
                        <div className='cus-img-box'>
                            <span className='cus-name'>Jack</span>
                            <img src={person}alt="" />
                        </div>
                        <p className="cus-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla minima dicta quo! Molestias, quo?
                        </p>
                    </div>
                    <div className="cus-card">
                        <span className='cus-rating'>10</span>
                        <div className='cus-img-box'>
                            <p className='cus-name'>Ahmed</p>
                            <img src={person} alt="" />
                        </div>
                        <p className="cus-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla minima dicta quo! Molestias, quo?
                        </p>
                    </div>
                    <div className="cus-card">
                        <span className='cus-rating'>8</span>
                        <div className='cus-img-box'>
                            <span className='cus-name'>Terry</span>
                            <img src={person} alt="" />
                        </div>
                        <p className="cus-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nulla minima dicta quo! Molestias, quo?
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default CustomersSay