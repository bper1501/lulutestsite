import React from 'react'
import '../App.css'
import './Services.css'
import ServiceCard from './ServiceCard';
import { Button } from './Button';

function Services() {
  return (
    <div>
      <div className="service-container">
        <h1>Services</h1>
        <h3>View the services Lulu’s Landscape has to offer. 
            Contact us today with your project idea! 
        </h3>
        <div className="row-container">
        <ul className="container1">
          <ServiceCard
            src="img/firepit.jpg"
            title="Fire Features"
            text="There's nothing like memories made around a firepit. No matter how simple or complex you may want your firepit, the amount of fun and enjoyment you and your family will have is priceless. "
            path="/Gallery"
            />
          <ServiceCard
            src="img/paver.jpg"
            title="Paver Patios"
            text="Summers spent on the patio are summers well spent. Trust us to use the best materials and techniques to gaurantee durability."
            path="/Gallery"
            />
          <ServiceCard
            src="img/fenceExmp.jpg"
            title="Fences"
            text="The privacy a fence brings is something that we sometimes take for granted, but trust us when we say, it will be a decision you wont regret!"
            path="/Gallery"
            />
        </ul>
        <ul className="container2">
            <ServiceCard
            src="img/waterfeat.jpg"
            title="Water Features"
            text="At Lulu's we appreciate a well executed water feature. Yes, you do need that fountain in that backyard!"
            path="/Gallery"
            />
            <ServiceCard
            src="img/curbapp.jpg"
            title="Curb Appeal"
            text="If there is something that you will appreciate daily it is your homes curb appeal. The great satisfying feeling you get pulling up to your home and seeing how beautiful and welcoming it looks for you and others."
            path="/Gallery"
            />
            <ServiceCard
            src="img/image9.jpg"
            title="Retainer Walls"
            text="A good retaining wall can serve serveral purposes. Whether you're looking to avoid soil erosion, or correct a drainage issue, or simply give your yard a level aesthetically  pleasing look, a retaining wall is for you!"
            path="/Gallery"
            />
        </ul>
        </div>
        <center>
        <div className="service-btn">
          <Button className="btn" buttonStyle='btn--primary' buttonSize="btn--large">contact us for your free quote today!</Button> 
        </div> 
        </center>      
      </div>  
    </div>
  )
}

export default Services
