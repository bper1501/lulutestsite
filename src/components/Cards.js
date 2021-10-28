import React from 'react';
import CardItem from './CardItem';
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>A Few Of The Many Services We Offer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="img/image6.jpg"
              text="Bring the family around the fire pit or BBQ with our custom fire feature services"
              label="Fire Features"
              path="/services"
            />
            <CardItem
              src="img/image7.jpeg"
              text="A custom patio is a great way of adding personality to any space"
              label="Patios"
              path="/services"
            />
            <CardItem
              src="img/image9.jpg"
              text="Completely renovate the look of your yard with a retainer wall"
              label="Retaining Walls"
              path="/services"
            />
            <CardItem
              src="img/image8.jpeg"
              text="Take your curb appeal to the next level with beautiful yardscape design"
              label="Yardscape Design"
              path="/services"
            />
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Cards
