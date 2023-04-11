import React from 'react'
import { useState, useRef, useEffect } from 'react'
import meal1 from "../icons_assets/greek salad.jpg"
import meal2 from "../icons_assets/bruchetta.jpg"
import meal3 from "../icons_assets/lemon dessert.jpg"

// Meal card component
const MealCard = ({imgurl, mealName, price}) => {
    return(
        <div className="card">
            <img src={imgurl} alt="" />
            <div className="card-text">
                <div className="img-title">
                    <h5 className='meal-name'>{mealName}</h5>
                    <span className='price'>{price}$</span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit minima numquam tempora dicta consequatur perferendis nesciunt accusamus doloremque eum sequi.</p>
                <a href="#">Order Delivery<span class="material-symbols-outlined">takeout_dining</span></a>
            </div>
        </div>
    )
}

const Specials = () => {
    let isDown = false;
    let startX;
    let scrollLeft;
    const cardsRef = useRef();

    function handleScroll(e){
        e.preventDefault()
        if(e.type === "mousedown"){
            isDown = true;
            startX = e.pageX - cardsRef.current.offsetLeft;
            scrollLeft = cardsRef.current.scrollLeft;
            e.currentTarget.classList.add("scroll-active");
        }
        else if(e.type === "mouseup"){
            isDown = false;
            e.currentTarget.classList.remove("scroll-active");

        }
        else if(e.type === "mouseleave"){
            isDown = false;
            e.currentTarget.classList.remove("scroll-active");

        }
        else if(e.type === "mousemove"){
            if(!isDown){
                return
            }
            const x = e.pageX - cardsRef.current.offsetLeft;
            const walk = (x - startX) * 1.5 ;
            cardsRef.current.scrollLeft = scrollLeft - walk;
        }
    } 
  return (
    <section className="specials">
        <div className="container">
            <div className="top-elements">
                <h1>This Weekend Specials!</h1>
                <a href="#" className='cta-btn'>Online Menu</a>
            </div>
            <div className="cards-box" ref={cardsRef} onMouseDown={handleScroll} onMouseUp={handleScroll} onMouseMove={handleScroll} onMouseLeave={handleScroll}>
                <MealCard
                    imgurl={meal1}
                    mealName="Greek Salad"
                    price={10.5}
                />
                <MealCard
                    imgurl={meal2}
                    mealName="Bruchetta"
                    price={12}
                />
                <MealCard
                    imgurl={meal3}
                    mealName="Lemon Cake"
                    price={8}
                />
                <MealCard
                    imgurl={meal3}
                    mealName="Lemon Cake"
                    price={8}
                />
            </div>
        </div>
    </section>
  )
}

export default Specials