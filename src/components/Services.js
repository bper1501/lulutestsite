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
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
            />
          <ServiceCard
            src="img/paver.jpg"
            title="Paver Patios"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
            />
          <ServiceCard
            src="img/fenceExmp.jpg"
            title="Fences"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
            />
        </ul>
        <ul className="container2">
            <ServiceCard
            src="img/waterfeat.jpg"
            title="Water Features"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
            />
            <ServiceCard
            src="img/curbapp.jpg"
            title="Curb Appeal"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
            />
            <ServiceCard
            src="img/image9.jpg"
            title="Retainer Walls"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, laborum."
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
