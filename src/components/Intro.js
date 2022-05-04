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
        <img src="/logo.png" alt="" />
          <h2>We are a local family owned company serving the Twin Cities. Lulu's was established in 2019 by a team of experienced landscape foremen. This results in knowledgable designers and laborers who have hands on experience on the project you may be looking to get done.</h2>
        </div>
      </div>
      <div className="history">
        <div className="history-text">
          <h1>Our Experience</h1>
          <h2>Our team has over 15 years of experience in the industry. We have seen and done it all. We understand the beautiful environment Minnesota offers and use the best materials, plants and techniques proven to withstand the test of time.No matter how big or small your project may be, we gaurantee prompt and professional quality work!</h2>
        </div>
      </div>
      <div className="mission">
          <div className="mission-title">
          <h1>Our Mission</h1>
          </div>
          <div className="mission-text">
          <h2>Is to make our customers happy! We want your dream yard to become a reality. A beautiful outdoor space can be the perfect place to relax, host or  simply enjoy the best of what nature has to offer. Our team is ready to work with you and make all your visions come true.  
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Intro
