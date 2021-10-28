import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css'


function HeroSection() {
  return (
    
    <div className="hero-container">
      <h1>Bring Your Dream Yard To Life</h1>
      <div className="hero-btns">
        <Button className="btn" buttonStyle="btn--primary" buttonSize="btn--large">Learn More</Button>
      </div>
    </div>
    
  )
}

export default HeroSection
