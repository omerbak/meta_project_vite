import React from 'react'
import photo1 from '../icons_assets/Mario and Adrian A.jpg'
import photo2 from '../icons_assets/Mario and Adrian b.jpg'

const Chicago = () => {
  return (
    <section className="chicago">
        <div className="container">
            <div className="chicago-text-box">
            <h1>Little Lemon</h1>
                <h4>Chicago</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste facere modi facilis nemo quia molestias eum commodi corporis porro molestiae accusamus beatae perspiciatis debitis quibusdam maxime, ducimus a vero. Autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem dolor nostrum accusamus magni, nulla repudiandae possimus iste nam recusandae libero?</p>
            </div>
            <div className="chicago-img-box">
                <img src={photo2} alt="" />
                <img src={photo1} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Chicago