import React from 'react'
import '../App.css'
import './Intro.css'

function Intro() {
  return (
    <div>
      <div className="introduction">
        <div className="intro-title">
          <h1>Meet the Team</h1>
        </div>
        <div className="intro-text">
        <img src="/img/image6.jpg" alt="" />
          <h2>We are a local family owned company Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, accusamus at! Impedit sunt eaque beatae ad aut culpa pariatur aliquid vero amet, alias, fugiat molestiae!</h2>
        </div>
      </div>
      <div className="history">
        <div className="history-text">
          <h1>Our Experience</h1>
          <h2>We have over 10years of experience in the industry Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, modi aperiam enim corporis aliquam expedita?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, natus!</h2>
        </div>
      </div>
      <div className="mission">
          <div className="mission-title">
          <h1>Our Mission</h1>
          </div>
          <div className="mission-text">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ullam quos vel iure placeat dicta, explicabo ad autem unde. Quasi fugiat ducimus voluptatem reprehenderit libero illo atque, sunt necessitatibus, eum, labore veritatis sint dolore neque dolor expedita maxime fuga nam.
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Intro
